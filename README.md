# WorkSuite Pro

Professional static productivity suite for Vercel.

## Included tools
- FocusFlow Pomodoro timer with 25/5/15 cycles, progress ring, audio alerts and daily localStorage sessions.
- QR Studio real-time QR generator with qrcode.js CDN, colour controls and PNG download.
- WordCount Pro live text analytics, keyword density, copy/clear and .txt export.
- ZenType AI upgraded typing test with time modes, difficulty, live highlighting, results sharing, Chart.js WPM history and keyboard heatmap.
- Signature Studio upgraded with layouts, optional socials, vCard QR, profile photo, preview theme, templates, copy and HTML export.
- Sports Taxonomy upgraded with favourites, compare mode, random sport, tags and share buttons.
- Site-wide dark/light mode via `data-theme` and localStorage.
- Homepage dashboard stats pulled from localStorage.

## Deploy on Vercel
1. Upload these files to the GitHub repository root.
2. Keep the folder names exactly as provided for routing.
3. Optional: add `GROQ_API_KEY` in Vercel for the typing API fallback route.
4. Deploy.

## Structure
```
index.html
assets/styles.css
assets/app.js
FocusFlow/index.html
QRStudio/index.html
WordCountPro/index.html
typingtest/index.html
signature/index.html
Sportstaxonomy/index.html
api/groq.js
vercel.json
```
