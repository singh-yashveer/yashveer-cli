# 🎨 Yashveer CLI Portfolio

An interactive terminal-based portfolio built with React and Ink. Browse experience, projects, and skills directly from your terminal.

```
 __   __ _    ____  _   ___     _______ _____ ____
 \ \ / // \  / ___|| | | \ \   / / ____| ____|  _ \
  \ V // _ \ \___ \| |_| |\ \ / /|  _| |  _| | |_) |
   | |/ ___ \ ___) |  _  | \ V / | |___| |___|  _ <
   |_/_/   \_\____/|_| |_|  \_/  |_____|_____|_| \_\
```

## Features

✨ **Interactive CLI Experience**

- Navigate through sections using arrow keys and Enter
- Animated content reveal for each section
- Styled boxes and colored text for visual appeal

📚 **Sections**

- **About** — Professional overview and experience summary
- **Skills** — Technical toolkit (18+ technologies)
- **Work** — Recent work experience and roles
- **Projects** — Open-source and side projects
- **Contact** — Selectable social media links (GitHub, LinkedIn, Twitter, Instagram)

⌨️ **Keyboard Controls**

- Arrow keys + Enter to navigate menus
- ESC to go back to menu
- `q` to quit at any time

## Installation

### Global Install (Recommended)

```bash
npm install -g yashveer
yashveer
```

### Via npx (No Install)

```bash
npx yashveer
```

### Local Development

Clone and run locally:

```bash
git clone <repo-url>
cd yashveer-cli
npm install
npm run build
node dist/index.js
```

## Development

### Quick Start

```bash
npm install
npm run dev  # Run with live TypeScript (no rebuild)
npm run build  # Compile to dist/
```

### Project Structure

```
yashveer-cli/
├── src/
│   ├── index.tsx                 # Entry point with shebang
│   ├── App.tsx                   # Main app logic and routing
│   ├── components/
│   │   ├── Header.tsx            # ASCII art + title
│   │   ├── Menu.tsx              # Main navigation menu
│   │   ├── About.tsx             # About section (animated)
│   │   ├── Skills.tsx            # Skills list (animated)
│   │   ├── Work.tsx              # Work experience (animated)
│   │   ├── Projects.tsx          # Projects showcase (animated)
│   │   └── Contact.tsx           # Social links (navigatable)
│   ├── hooks/
│   │   ├── useMenuNavigation.ts  # Keyboard input handling
│   │   └── useRevealContent.ts   # Animation reveal logic
│   └── data/
│       └── portfolio.ts          # Portfolio content (single source of truth)
├── dist/                         # Compiled output (auto-generated)
├── package.json
├── tsconfig.json
└── README.md
```

### Key Technologies

- **Ink** — React renderer for CLIs
- **React** — UI component library
- **chalk** — Terminal color styling
- **figlet** — ASCII art text
- **TypeScript** — Type-safe development
- **ink-select-input** — Interactive menu selection

### Editing Content

All portfolio content lives in [`src/data/portfolio.ts`](src/data/portfolio.ts). Update:

- Name, title, about
- Skills array
- Work experience array
- Projects array
- Social links

Then rebuild:

```bash
npm run build
```

## Publishing to npm

### Prerequisites

1. Create an npm account at [npmjs.com](https://www.npmjs.com)
2. Log in locally:
   ```bash
   npm login
   ```

### Publish

```bash
npm publish
```

After publishing, anyone can run:

```bash
npx yashveer
```

### Update Version

Before republishing, update the version in `package.json`:

```bash
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
npm publish
```

## Scripts

- `npm run build` — Compile TypeScript to JavaScript
- `npm run dev` — Run with live TypeScript (no build step)
- `npm run prepare` — Automatically runs before `npm publish`

## Navigation

### Main Menu

```
Use arrow keys and Enter to select:
- About
- Skills
- Work Experience
- Projects
- Contact
- Quit
```

### In Sections

- **ESC** → Back to menu
- **q** → Quit app
- Arrow keys + Enter → Select options (Contact section)

## License

MIT — Feel free to fork, modify, and distribute!

## Author

**Yashveer Singh** — Software Engineer & Frontend Specialist

- GitHub: [singh-yashveer](https://github.com/singh-yashveer)
- LinkedIn: [singh-yashveer](https://linkedin.com/in/singh-yashveer)
- Twitter: [@Citron5007](https://twitter.com/Citron5007)
- Instagram: [@yashvxxr.singh](https://instagram.com/yashvxxr.singh)

---

Built with ❤️ using **Ink** and **React**
