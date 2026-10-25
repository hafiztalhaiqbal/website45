"""Validate local links, metadata, image text and confirmed contact URLs."""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote, parse_qs
import json

root = Path(__file__).resolve().parent.parent
class Document(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.tags = []
        self.feed(text)
    def handle_starttag(self, name, attributes):
        self.tags.append((name, dict(attributes)))

pages = {p.name: Document(p.read_text(encoding='utf8')) for p in root.glob('*.html')}
errors = []
checked = 0
for filename, document in pages.items():
    ids = [a['id'] for t, a in document.tags if 'id' in a]
    if len(ids) != len(set(ids)):
        errors.append(f'{filename}: duplicate IDs')
    if sum(t == 'h1' for t, a in document.tags) != 1:
        errors.append(f'{filename}: expected one H1')
    for tag, attributes in document.tags:
        if tag == 'img' and not attributes.get('alt'):
            errors.append(f'{filename}: image missing alt')
        for key in ('src', 'href'):
            if key not in attributes:
                continue
            checked += 1
            url = urlsplit(attributes[key])
            if url.netloc == 'wa.me' and (url.path != '/923346070617' or not parse_qs(url.query).get('text')):
                errors.append(f'{filename}: invalid WhatsApp URL')
            if url.scheme or url.netloc:
                continue
            target = unquote(url.path) or filename
            if not (root / target).exists():
                errors.append(f'{filename}: missing {target}')
            if url.fragment and target in pages:
                if not any(a.get('id') == unquote(url.fragment) for t, a in pages[target].tags):
                    errors.append(f'{filename}: missing anchor {attributes[key]}')
    if not any(t == 'title' for t, a in document.tags):
        errors.append(f'{filename}: missing title')
    if not any(t == 'meta' and a.get('name') == 'description' and a.get('content') for t, a in document.tags):
        errors.append(f'{filename}: missing description')
    text = (root / filename).read_text(encoding='utf8')
    if '\ufffd' in text or '\u00e2\u20ac' in text:
        errors.append(f'{filename}: damaged text encoding')
result = {'passed': not errors, 'pages': len(pages), 'links_and_assets_checked': checked, 'errors': errors}
(root / 'validation-results.json').write_text(json.dumps(result, indent=2), encoding='utf8')
print(json.dumps(result))
raise SystemExit(bool(errors))
