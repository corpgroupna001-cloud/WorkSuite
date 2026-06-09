# WorkSuite v3

A premium suite of 12 fast, local-first browser tools. No sign-ups. No tracking. No server dependencies.

## Flagship: ZenType Typing Test

Premium typing test with **piano key sounds** via Web Audio API, character-by-character progress tracking, live WPM/accuracy metrics, polished results screen, keyboard heatmap, and performance history charts.

## All Tools

| Tool | Description |
|------|-------------|
| **ZenType** | Typing test with piano sounds, live metrics, heatmap |
| **FocusFlow** | Pomodoro timer with custom durations, streaks, session log |
| **Signature Studio** | Email signature generator with logo, socials, Outlook copy |
| **QR Studio** | QR codes with custom colors, Wi-Fi, vCard modes |
| **WordCount Pro** | Text analysis with readability, find/replace, case tools |
| **Password Generator** | Crypto-random passwords with strength meter |
| **JSON Formatter** | Validate, format, minify with structure stats |
| **Color Palette** | Harmonious palettes with HEX/RGB/HSL converter |
| **Markdown Editor** | Live preview, toolbar, drafts, HTML export |
| **Unit Converter** | 6 categories: length, weight, temp, speed, data, time |
| **Quick Notes** | Auto-saving notepad with search and export |
| **Sports Taxonomy** | 20 sports with bookmarks, compare, tag filters |

## Features

- **Command palette** — Press `Ctrl+K` to search and navigate tools
- **Dark mode** — System-aware with manual toggle
- **Local-first** — All data in localStorage, nothing sent to servers
- **Piano sounds** — Web Audio API generates piano-like tones during typing
- **Recent tools** — Dashboard tracks your most-used tools
- **Keyboard-first** — Shortcuts throughout for power users

## Stack

- Pure HTML, CSS, JavaScript
- No build step
- CDN: Chart.js, QRCode.js
- Optional: Groq API for AI typing passages

## Deploy

```bash
vercel --prod
# Or open index.html locally
```

## License

MIT
