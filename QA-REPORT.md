# Quality assurance

Checked 26 October 2026.

## Browser checks

The available in-app Chromium browser loaded all six pages over a local HTTP server at viewport widths 1440, 1024, 768, 390 and 320 pixels (30 page/width combinations).

- No horizontal document overflow at any checked width.
- Local image paths validated; homepage gallery photographs confirmed loaded after scrolling into view. Lazy-loading means offscreen images may not be loaded at initial page inspection.
- Exactly one H1 on each page.
- No captured browser console warning/error messages during those page loads.
- Homepage inspected visually at desktop and mobile sizes.
- Mobile menu opened, exposed navigation, closed with Escape, and successfully navigated to Contact.
- FAQ expansion, gallery image dialog, and Escape dismissal verified.
- Desktop/tablet/mobile layouts use shared responsive breakpoints.
- Latest source validation: 229 references checked; all local targets and fragments valid.
- Reduced-motion styling implemented; real-device motion preference testing remains outstanding.

## Static checks

See the accompanying `validation-results.json` for the actual automated file/link checks, source asset sizes, and pass/fail result. Checks cover local page/asset existence, internal anchor targets, title/meta descriptions, alternative text, duplicate IDs, and WhatsApp number/message format. JavaScript syntax was checked with Node.

Basic accessibility provisions include semantic navigation/main/footer, a skip link, visible focus styles, keyboard-operable native links/buttons, current-page indicators, meaningful image descriptions, reduced-motion handling, and navigation that remains visible if JavaScript is disabled. This is not a formal accessibility certification or a full screen-reader audit.

## Limits

- WhatsApp URL syntax and message encoding are verified. No test message was sent, and account availability or app handoff on an actual phone was not verified.
- Telephone URL format is verified; no call was placed.
- No email link exists because no business email was supplied.
- Social profile availability/content remains unverified; web retrieval failed.
- No deployed host, domain DNS, HTTPS, redirects, live caching, crawl indexing or real-device Safari/Firefox testing has been performed.
- Images are optimized local WebP files; no Lighthouse/network throttling performance score is claimed.

The website is ready for local review. Public launch remains subject to the README checklist and deployment-specific verification.

## 28 October brand and priority update

All six pages checked at 1440, 1024, 768, 390 and 320 pixels: no horizontal overflow; three stylesheets loaded at every size. New logo is used throughout. No Energy Audits service heading remains. Mobile process and footer reviewed visually; firefighting CTA reaches the highlighted service, and mobile menu navigation works. No captured console errors. Static validation passed with 274 references. Supplied logo and discipline graphics optimized locally; no new stock or generated project images were introduced.
