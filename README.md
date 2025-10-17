# Sinmido - React TypeScript Project

A modern React application built with TypeScript, Vite, and Tailwind CSS.

## 🚀 Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** - Latest React with hooks and concurrent features
- 🔷 **TypeScript** - Type-safe JavaScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🎭 **Sass/SCSS** - CSS preprocessor for enhanced styling
- 🧭 **React Router** - Client-side routing
- 📱 **Responsive Design** - Mobile-first approach
- 🎬 **Video Backgrounds** - Rich media support

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.2.0
- **Build Tool**: Vite 5.0.8
- **Language**: TypeScript 5.2.2
- **Styling**: Tailwind CSS 3.3.6 + Sass 1.69.5
- **Routing**: React Router DOM 7.9.4
- **Linting**: ESLint with TypeScript support

## 📁 Project Structure

```
src/
├── @types/           # TypeScript type definitions
├── assets/           # Static assets (images, fonts, styles, videos)
│   ├── image/        # Image assets
│   ├── styles/       # Global styles and fonts
│   └── video/        # Video assets
├── components/       # Reusable React components
│   └── layouts/      # Layout components (header, footer)
├── pages/           # Page components
│   └── dashboard/    # Dashboard pages
├── provider/        # Context providers and API utilities
├── main.tsx         # Application entry point
└── routers.tsx      # Routing configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3003` (or the port shown in your terminal)

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 🎨 Styling

This project uses a combination of:
- **Tailwind CSS** for utility-first styling
- **Sass/SCSS** for custom styles and components
- **Custom fonts** (Shippori Mincho) for Japanese typography
- **Responsive design** with mobile-first approach

### Font Usage
Custom fonts are available in `src/assets/styles/fonts/`. See `FONT_USAGE_EXAMPLES.md` for implementation details.

## 📱 Pages & Components

### Dashboard Pages
- **Hero Section** - Landing page with video background
- **Students** - Student showcase with image galleries
- **Recruit** - Recruitment information and opportunities

### Layout Components
- **Header** - Navigation and branding
- **Footer** - Site footer with links
- **Layouts** - Main layout wrapper

## 🔧 Configuration

### Vite Configuration
- Development server runs on port 3003
- Hot module replacement enabled
- TypeScript support configured

### Tailwind Configuration
- Custom utilities and components
- Responsive breakpoints
- Custom color palette

### TypeScript Configuration
- Strict type checking enabled
- Path mapping configured
- React JSX support

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Preview Production Build
```bash
npm run preview
```

## 📦 Dependencies

### Production Dependencies
- `react` - React library
- `react-dom` - React DOM rendering
- `react-router-dom` - Client-side routing

### Development Dependencies
- `@vitejs/plugin-react` - Vite React plugin
- `typescript` - TypeScript compiler
- `tailwindcss` - CSS framework
- `sass` - CSS preprocessor
- `eslint` - Code linting
- `autoprefixer` - CSS vendor prefixing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🆘 Support

For support and questions, please contact the development team.

---

Built with ❤️ using React, TypeScript, and Vite
