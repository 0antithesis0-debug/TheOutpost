# Iron & Embers Outpost — Website

Promotional website for the **Iron & Embers Outpost**, a modular breakfast & lunch concept rooted in the coal-mining heritage of Southeast Kansas. A spin-off of the full [Iron & Embers Bar & Grill](https://ironandembers.com) concept.

> *"The Heat of the Mine. The Heart of the Town."*

---

## Project Status

**Pre-investment planning phase.** This site serves as a lead capture and brand awareness vehicle while the Outpost concept moves through funding and permitting.

---

## Site Structure

```
iron-embers-outpost/
├── index.html          # Single-page site
├── css/
│   └── outpost.css     # Full brand stylesheet
├── js/
│   └── outpost.js      # Nav, scroll behavior, form handling
├── images/             # Brand assets (logo, photos — add locally)
├── netlify.toml        # Netlify headers + redirect config
└── README.md
```

### Pages / Sections

| Section | ID | Purpose |
|---|---|---|
| Nav | `#nav` | Fixed, mobile-responsive, brand lockup |
| Hero | `#hero` | Headline, tagline, dual CTAs |
| Brand Strip | — | Scrolling identity bar |
| Concept | `#concept` | What the Outpost is, three pillars, stat block |
| Menu | `#menu` | Rise & Shine + Handhelds preview, sides, drinks |
| Story | `#story` | Heritage narrative |
| Hours / Location | `#location` | Hours table, planning-phase location language |
| Early Access | `#updates` | Email signup with confirmation state |
| Footer | — | Brand lockup, legal, pre-investment disclaimer |

---

## Brand Tokens

```css
--coal:        #0F0B08   /* Primary background */
--coal-mid:    #1C1410   /* Section alternate background */
--coal-light:  #2A1F16   /* Card / elevated surfaces */
--ember:       #C85A1A   /* Primary accent — CTA, prices, icons */
--ember-light: #D4722A   /* Hover state */
--gold:        #C9921A   /* Tagline / heritage accent */
--cream:       #F0E8DC   /* Primary text */
--cream-muted: #C4B8A8   /* Secondary text */
```

**Fonts** (Google Fonts — loaded in `<head>`):
- `Playfair Display` — Display / headlines (700, 900; italic)
- `Barlow Condensed` — UI, nav, labels (400–700)
- `Barlow` — Body text (300–500)

---

## Deployment

### Netlify (Drag & Drop)

1. From inside this folder, create a zip:
   ```bash
   zip -r ../outpost-deploy.zip .
   ```
2. Go to [app.netlify.com](https://app.netlify.com) → your site → **Deploys**
3. Drag the zip into the deploy dropzone

> ⚠️ Always zip from **inside** the project folder so files land at root level, not nested in a subfolder.

### Netlify (Git — Recommended)

1. Push this repo to GitHub
2. In Netlify: **Add new site → Import an existing project → GitHub**
3. Select this repo
4. Build settings: no build command needed — publish directory is `.` (root)
5. Deploy

Git-linked deploys auto-publish on every push to `main`.

### GitHub Pages

1. Go to repo **Settings → Pages**
2. Source: `Deploy from a branch` → `main` → `/ (root)`
3. Site publishes at `https://yourusername.github.io/iron-embers-outpost/`

---

## Development

No build tools required. Plain HTML/CSS/JS.

To preview locally:
```bash
# Any static server works — e.g.:
npx serve .
# or
python3 -m http.server 8080
```

---

## Adding the Logo

Drop the brand medallion image into `/images/` and reference it where needed. Current nav and footer use text-only brand treatment per the Iron & Embers design standard — no circular logo images in nav/footer.

---

## Legal

**CONFIDENTIAL — Pre-investment concept.** Not yet open for business. All content is for investor and marketing development purposes only.

© 2024–2026 Iron & Embers Bar & Grill, LLC · Southeast Kansas · Crawford County 66762
