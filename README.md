# Sinmido

A Gatsby TypeScript website project.

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. **Install dependencies**

   ```shell
   npm install
   ```

2. **Build Tailwind CSS**

   ```shell
   npm run css:build
   ```

3. **Start development server**

   ```shell
   npm run develop
   ```

   Your site is now running at http://localhost:8000!

## 📜 Available Scripts

- `npm run develop` - Start development server
- `npm run build` - Build production version
- `npm run build:clean` - Clean and build production version
- `npm run serve` - Serve production build locally
- `npm run clean` - Clean Gatsby cache and public directory
- `npm run typecheck` - Run TypeScript type checking
- `npm run css:build` - Build Tailwind CSS
- `npm run css:watch` - Watch and build Tailwind CSS

## 🛠️ Tech Stack

- **Framework**: Gatsby 5
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4, Sass
- **Animations**: Framer Motion
- **UI Components**: React 18

## 📁 Project Structure

```
src/
├── assets/         # Static assets (images, styles)
├── components/     # React components
├── pages/          # Page components
└── utils/          # Utility functions
```

## 🔧 Configuration

The project uses `config.json` for configuration. Make sure to create this file (and add it to .gitignore) with your project-specific settings.

## 📝 Notes

- Use TypeScript for all new files
- Prefer functional components in React
- Follow the repository pattern for architecture
- Keep business logic in service layers
