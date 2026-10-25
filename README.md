# Fluvo website

Approved redesigned edition.

Six static pages, built with HTML, CSS and JavaScript. No database, framework, build step, subscription, external fonts, tracking scripts or contact-form service is required.

## Open the website

1. Extract `fluvo-website.zip` into a folder.
2. Double-click `index.html` to open it in your browser.
3. Visit every page using the navigation. Internet access is only needed for external social, WhatsApp and telephone links.

For a local HTTP preview, if Python is installed, open a terminal in the folder and run:

```sh
python -m http.server 8080 --bind 127.0.0.1
```

Visit `http://127.0.0.1:8080`. Press Ctrl+C in the terminal to stop the server. Python is optional and is not needed by the published website.

## Files

- `index.html` — homepage and capability overview.
- `about.html` — introduction, mission, vision and leadership.
- `services.html` — all seven services and their supported scope.
- `industries.html` — four client/industry groups.
- `projects.html` — engineering gallery; no invented project names or completion claims.
- `contact.html` — business enquiries, WhatsApp and calling links.
- `css/style.css` — shared structural and responsive rules.
- `css/premium.css` — premium visual design, new sections, motion, and responsive refinements.
- `js/main.js` — mobile navigation and copyright year.
- `assets/images/` — local optimized photographs, supplied branding and favicon.
- `SOURCE-REVIEW.md` — factual source notes and open content items.
- `QA-REPORT.md` — checks actually completed and their limits.
- `tools/` — optional original content-generation helper and extracted service data. Not needed to run or publish the site.

## Maintain the website

Edit the HTML files directly with any text editor. Text is present in the HTML, so the website and its navigation remain usable if JavaScript is unavailable. Header/footer markup is repeated deliberately to keep the site buildless; update all six pages when changing shared contact details or navigation.

Colours, typography and breakpoints are in `css/style.css`. There are no externally loaded typefaces. Use optimized WebP/JPEG photos and meaningful filenames. Keep image alternative text accurate and preserve logo proportions. The full original supplied branding remains in `assets/images/fluvo-brand.webp`; the navigation uses an undistorted crop of its logo.

The optional `tools/build_content.py` records the original one-time generation process. It requires standard Python and the included `tools/content-source.json`, and rewrites generated pages using retained local assets. Do not rerun it after manual edits unless you also update its templates. It is not a required build system.

### Add an email address

Once confirmed, add a visible email link to `contact.html` and the footer in all pages, using `mailto:` followed by the actual email. Do not use a placeholder address.

### Add project information

Update gallery captions with the exact approved project name, location, Fluvo scope and status. Only label a project completed when confirmed. Add individual detail pages when there is enough factual content. Do not confuse CEO experience with company age or completed-project totals.

### WhatsApp

All links use the confirmed number `923346070617` without spaces or a plus sign:

`https://wa.me/923346070617?text=Hello%20Fluvo%2C%20I%20would%20like%20to%20discuss%20an%20engineering%20project.`

Telephone links use `tel:+923346070617`. A visitor reviews and sends the WhatsApp message in WhatsApp. The website does not automatically send messages or collect enquiries. Email links will use the visitor's own email application when an email is supplied.

## Publish on your own domain

1. Choose your final domain and a host that supports ordinary static HTML files. Existing hosting is sufficient; no special application server is needed. Domain registration and hosting may have provider charges.
2. Back up any existing website before changing its files.
3. Use the hosting provider's file manager or SFTP to upload the six HTML files and the `css`, `js`, and `assets` folders to the site's document root, often called `public_html`. `index.html` must sit directly inside that root. Do not upload documentation, source documents, review screenshots, or `tools`.
4. In your domain registrar, set the DNS records exactly as your chosen host instructs. Keep existing email-related DNS records intact. DNS values depend on the host and cannot be specified before it is chosen.
5. Enable the host's HTTPS certificate and HTTP-to-HTTPS redirect. Choose one primary domain version (with or without `www`) and redirect the other to it.
6. Add a canonical link and `og:url` with the real absolute page URL to each page. Add `og:image` using the absolute URL to the supplied branding image and `og:image:alt` describing it. These domain-dependent fields were deliberately omitted rather than populated with a fictional domain.
7. Create `sitemap.xml` listing the six actual HTTPS URLs. Add its absolute URL to `robots.txt`. Ensure the public host allows indexing; keep staging/private reviews out of indexing using host-level protection.
8. Visit the HTTPS domain and follow the launch checklist below. Keep a copy of the original ZIP as a rollback backup.

The deliverable has not been uploaded or published. No hosting account or domain was supplied. Local testing does not establish DNS, TLS, redirect or server behaviour on the eventual host.

## Before public launch

- [ ] Approve the final wording, CEO biography, service scope and public phone number.
- [ ] Add business email and office address if you want them public. Only add a map for a verified location.
- [ ] Add project names, locations, scope and status when ready; retain permission to publish client/site photographs.
- [ ] Supply an actual LinkedIn URL if you want a LinkedIn link.
- [ ] Verify Facebook, Instagram and X links while signed out. Replace the Facebook share link with a stable page URL if available.
- [ ] Verify a stable Google Business/Maps profile URL before adding a location link. The supplied search URL did not provide a verified address.
- [ ] Select domain and host; configure HTTPS and the preferred domain redirect.
- [ ] Complete canonical URLs, sharing-image URL, sitemap and robots configuration.
- [ ] On the live domain, test all six pages, image loads, navigation and keyboard focus.
- [ ] Test WhatsApp on an actual phone and desktop; confirm the intended account and prefilled text. Test telephone handling on a phone.
- [ ] Review the site in current Chrome, Edge, Firefox and Safari, and on a real iOS/Android device. Browser QA in this delivery used the available in-app Chromium browser.
- [ ] If your host adds analytics, cookies or data collection later, update the site's privacy information to describe the actual practice.

Local SEO data such as address, opening hours and business location structured data should be added only after verification. No search ranking or lead guarantee is made.

## Redesigned edition

Includes a refreshed homepage, discipline strip, engineering gallery preview, project workflow, enquiry FAQs, subtle entry animations, and a keyboard-accessible gallery image dialog. Reduced-motion preferences disable the animations. Original images, confirmed phone number, and documented company facts are retained. No hosting or domain changes were made.
