# Pretty Eye Ladies Salon: demo website

A static, bilingual (English / Arabic) one-page site for **Pretty Eye Ladies Salon**, Karama Commercial Complex, 37 16th Street, Al Karama, Dubai.

- **Live demo:** https://tanish0212.github.io/pretty-eye-demo/
- **Counter poster (A5, printable):** https://tanish0212.github.io/pretty-eye-demo/poster.html

No frameworks, no build step, no API keys. Open `index.html` through any static server
(e.g. `python -m http.server`) or host it on GitHub Pages.

## Files

| File | What it is |
| --- | --- |
| `index.html` | Page structure (section order, icons, `<head>` meta tags) |
| `style.css` | All styling. Mobile-first, logical properties so Arabic RTL mirrors automatically |
| `script.js` | The `SHOP` content object (top) + the site logic (bottom, no need to edit) |
| `poster.html` | Printable A5 counter poster with two inline SVG QR codes (WhatsApp + website) |
| `images/` | Monogram logo (dark + light), fine-line illustrations, `og-image.jpg` (1200×630 share image, under 200 KB), touch icon |

## Editing the content

1. **Edit the `SHOP` object at the top of `script.js`.** Everything on the page comes from it:
   name, phone, WhatsApp number, map links, hours, rating, services, reviews and every English and Arabic text.
   - `whatsappNumber`: digits only. Every WhatsApp button opens `https://wa.me/<number>` with the
     pre-filled message from `text.en.waMessage` / `text.ar.waMessage` (matches the page language).
     Each service card pre-fills a question about that service.
   - `hours`: one entry per weekday (index 0 = Sunday … 6 = Saturday), `["HH:MM", "HH:MM"]` in Dubai time,
     or `null` for a closed day. The "Open now / Closed now · opens …" badge uses `timeZone` (`Asia/Dubai`),
     so it is correct wherever the visitor is. `hoursGroups` controls how rows are grouped in the hours table.
   - `showDemoBanner: false` hides the "Demo preview" banner.
   - JSON-LD structured data (`BeautySalon`, opening hours, rating) is built from `SHOP` automatically.
2. **Edit the `<head>` of `index.html`**: `<title>`, description and the `og:` / `twitter:` tags
   (WhatsApp link previews don't run JavaScript).
3. **Images:** `images/og-image.jpg` must stay 1200×630 and **under 200 KB**, or WhatsApp won't show the preview.
4. **Poster:** edit the text in `poster.html`. The QR codes are static inline SVG generated locally
   with [segno](https://pypi.org/project/segno/) (no online QR service):

   ```bash
   pip install segno
   python -c "import segno; print(segno.make('https://your-link/', error='m').svg_inline(border=2, omitsize=True, svgclass='qr'))"
   ```

   Print with **Margins: none** and **Background graphics: on**. It fits exactly one A5 page.

Only put **real, confirmed facts** in the content: no made-up prices, services, staff, years, offers, awards or reviews.

## Swapping illustrations for real photos

| Slot | Where to change it | Frame |
| --- | --- | --- |
| Hero (vanity mirror) | `SHOP.images.hero.src` | 4:5 rounded frame with a plum offset |
| Service cards | `image` of each entry in `SHOP.services` | 5:4 frame |

Add the photo to `images/`, change that one path, and update the `alt` text in both languages.
Photos use `object-fit: cover`; illustrations (`.svg`) use `contain` so they're never cropped.
Use portrait photos (about 1200×1500), compressed to under 250 KB each.

## Design

Peach, terracotta and plum on cream: warm and friendly. Headings in Instrument Serif (italic accents), body in Nunito Sans, Arabic in Tajawal, with feminine Arabic forms (راسلينا، اسألي) because it's a ladies salon. The motif is the eye from the name: an almond eye with lashes in the logo, hero and threading card; big peach discs; soft rounded frames with a solid plum offset; a plum how-it-works band and a terracotta closing band.

## Notes

- `<meta name="robots" content="noindex">` keeps the demo out of Google. Remove it when the site goes live.
- The language choice is saved in `localStorage` (if available) under `site-lang`.
- Animations are subtle and switch off for visitors with "reduce motion" enabled.
- `screenshots/` is local QA output only and is git-ignored.
