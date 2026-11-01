# Fluvo search visibility

Primary website: https://fluvo.com.pk/

## Technical preparation included

- Canonical URLs on all six pages point to the owner's chosen main domain.
- `sitemap.xml` lists the six extensionless URLs served by Cloudflare Pages.
- `robots.txt` permits crawling and identifies the sitemap.
- Organization structured data uses only the supplied company name, public phone number, branding and owner-supplied social links. No address, review, accreditation or ranking claim is fabricated.
- Unique page titles and descriptions, semantic headings, text service descriptions and local image assets are retained.

## Owner setup in Google Search Console

1. Open https://search.google.com/search-console/ and use a company-controlled Google account.
2. Add a Domain property for `fluvo.com.pk`.
3. Copy the exact TXT verification record Google supplies. Add it as a new TXT record at `@` in the domain's Cloudflare DNS zone. Preserve the existing Zoho MX, SPF, DKIM and verification records.
4. Verify ownership in Search Console.
5. Under Sitemaps, submit `https://fluvo.com.pk/sitemap.xml`.
6. Inspect `https://fluvo.com.pk/` using URL Inspection, run the live test, and request indexing if eligible. Requesting repeatedly does not accelerate crawling.
7. Review Page indexing and Performance reports for actual discovery, queries and results over time.

Search Console setup and submission have not been performed by this code change; they require the owner's Google account and verification.

## Strengthen the Fluvo identity

- Add the main website to the existing Google Business Profile, with accurate business details and an eligible verified location or service-area setup.
- Use the same name, public contact information and website across Facebook, Instagram, X and any genuine LinkedIn presence.
- Add factual project case studies, exact service locations, and an approved business address when supplied.
- Obtain genuine customer reviews through normal business relationships; avoid fabricated reviews and purchased links.
- Complete the secondary-domain and www redirects in Cloudflare. Keep `fluvo.com.pk` as the consistent main address.

The website cannot guarantee first place for “Fluvo” or any other query. Google may take days or weeks to crawl; changes in rankings can take longer. A sitemap and indexing request help discovery but do not guarantee indexing or placement.

References:
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl
