# STUDY_VIEWER Design System

STUDY_VIEWER uses two reference-driven themes. The default theme follows the OpenCode DESIGN.md: warm cream canvas, near-black ink, hairline borders, 4px controls, and terminal-native code surfaces. The moon control in the lower-left corner switches the interface to a Resend-inspired night theme: editorial dark developer-tool surfaces, translucent white hairlines, 8px controls, 12px code wells, and a required base background of `#212121`.

## Tokens

- Default canvas: `#fdfcfc`; sidebar `#fdfcfc`; ink `#201d1d`; soft surface `#f8f7f7`; code surface `#201d1d`; code inset `#302c2c`; hairline `rgba(15, 0, 0, 0.12)`.
- Night canvas: `#212121`; card `#06060a`; elevated `#101012`; soft surface `#0a0a0c`; text `#fcfdff`; body `rgba(252, 253, 255, 0.86)`; hairline `rgba(255, 255, 255, 0.14)`.
- Status/code chrome: default red `#ff3b30`, yellow `#ff9f0a`, green `#30d158`; night red `#ff2047`, yellow `#ffc53d`, green `#11ff99`.
- Typography: app UI text uses Asta Sans with optical sizing enabled by the browser. Question-facing code windows use a Berkeley Mono-compatible monospace stack: Berkeley Mono, JetBrains Mono, IBM Plex Mono, Geist Mono, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, monospace.
- Shape: default controls 4px and containers 0px; night controls 8px and code windows 12px.

## Components

- Sidebar: fixed 260px navigation with warm cream default background, theme-aware borders, and a lower-left icon-only moon button.
- Sidebar delete mode: the Delete control sits below Add Folder, switches to an active "Deleting..." state, and exposes compact circular `x` buttons beside folders and files. File deletion removes that file's linked local exam data; folder deletion removes every file inside it.
- Top app bar: flat hairline-separated workspace header with segmented tabs and a theme-aware search input.
- Progress strip: sticky tonal row with progress bar, timer chip, and reset control.
- Order strip: single/all reading modes use the same sticky tonal row but show only the centered sequential/random order toggle. Exam mode uses the full `progress | order toggle | timer` structure.
- Question card: always rendered as a code window/code block surface. It uses a dark code background, top traffic-light dots, filename label, compact monospace text, inset question badge, and code-like answer blocks.
- Folder aggregate mode: clicking a folder loads every question from every file in that folder as one study set. The prompt remains unchanged; source context appears in the card reference as `folder name - file name`.
- Answer surfaces: masked, revealed, raw, visible, and saved-answer states all stay inside the code-window vocabulary.
- Footer: fixed answer input and previous/next navigation using the active theme surface and hairline border.

## Do's and Don'ts

- Do keep the default app in the OpenCode cream/mono style.
- Do switch to the Resend-style dark system from the moon icon, with `#212121` as the night base background.
- Do render every question-facing card as a code window or code block.
- Do use SVG icons for icon-only controls.
- Don't return to indigo dashboard tokens.
- Don't use drop shadows for depth; borders, surface shifts, and code-window chrome carry hierarchy.
