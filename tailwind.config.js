/** @type {import('tailwindcss').Config} */

function range(start, end, increment = 1) {
  const count = Math.floor((end - start + increment) / increment);
  return Array(count).fill(0).map((_, idx) => start + idx * increment);
}

function range1(start, end, increment = 10) {
  const count = Math.floor((end - start + 1 / increment) * increment);
  return Array(count).fill(0).map((_, idx) => start + idx / increment);
}

const minFont = 5;
const maxFont = 80;

const minPixel = 0;
const maxPixel = 1500;

const minFontWeight = 100;
const maxFontWeight = 1000;

const screens = {
  xs: '320px',
  sx: '450px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
  '2xl': '1920px',
  '3xl': '2560px',
  'full': '100%',
  'screen': '100vh',
  'auto': 'auto',
}

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  safelist: [
    // Grid column spans
    ...range(1, 24).map(i => `col-span-${i}`),
    // Grid row spans  
    ...range(1, 24).map(i => `row-span-${i}`),
    // Grid columns
    ...range(1, 24).map(i => `grid-cols-${i}`),
    // Grid rows
    ...range(1, 24).map(i => `grid-rows-${i}`),
    // Grid column start/end
    ...range(1, 24).map(i => `col-start-${i}`),
    ...range(1, 24).map(i => `col-end-${i}`),
    // Grid row start/end
    ...range(1, 24).map(i => `row-start-${i}`),
    ...range(1, 24).map(i => `row-end-${i}`),
    // Responsive grid utilities
    ...range(1, 24).map(i => `lg:col-span-${i}`),
    ...range(1, 24).map(i => `lg:row-span-${i}`),
    ...range(1, 24).map(i => `md:col-span-${i}`),
    ...range(1, 24).map(i => `md:row-span-${i}`),
    ...range(1, 24).map(i => `sm:col-span-${i}`),
    ...range(1, 24).map(i => `sm:row-span-${i}`),
    // Aspect ratio classes
    'aspect-square',
    'aspect-video',
    'aspect-[1/1]',
    'aspect-[2/1]',
    'aspect-[3/2]',
    'aspect-[1.5/1]',
    'aspect-[1/1.5]',
    'aspect-[2/1.5]',
    'aspect-[3/2]',
    'aspect-[1/2]',
    'aspect-[1.5/1]',
    'lg:aspect-[1/1]',
    'lg:aspect-[2/1]',
    'lg:aspect-[3/2]',
    'lg:aspect-[1.5/1]',
    'lg:aspect-[1/1.5]',
    'lg:aspect-[2/1.5]',
    'lg:aspect-[3/2]',
    'lg:aspect-[1/2]',
    'lg:aspect-[1.5/1]',

    // Custom text and background color classes
    'text-textPrimary',
    'text-textSecondary',
    'text-textThird',
    'hover:text-textPrimary',
    'hover:text-textSecondary',
    'hover:text-textThird',
    'bg-textPrimary',
    'bg-textSecondary',
    'bg-textThird',
    'hover:bg-textPrimary',
    'hover:bg-textSecondary',
    'hover:bg-textThird',

    // Positioning classes
    ...range(0, 100).map(i => `-right-${i}`),
    ...range(0, 100).map(i => `right-${i}`),
    ...range(0, 100).map(i => `-left-${i}`),
    ...range(0, 100).map(i => `left-${i}`),
    ...range(0, 100).map(i => `-top-${i}`),
    ...range(0, 100).map(i => `top-${i}`),
    ...range(0, 100).map(i => `-bottom-${i}`),
    ...range(0, 100).map(i => `bottom-${i}`),
  ],

  theme: {
    screens: {
      ...screens,
    },

    extend: {
      colors: {
        black: '#000000',
        white: '#ffffff',
        unset: '#00000000',

        textPrimary: '#ffffff',
        textSecondary: '#003391',
        textThird: '#B8FB3C',

        // Enhanced brand colors based on your gradient theme
        primary: {
          50: '#f0f4ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#6366f1',
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
          950: '#1e1b4b',
        },
        secondary: {
          50: '#fdf2f8',
          100: '#fce7f3',
          200: '#fbcfe8',
          300: '#f9a8d4',
          400: '#f472b6',
          500: '#ec4899',
          600: '#db2777',
          700: '#be185d',
          800: '#9d174d',
          900: '#831843',
          950: '#500724',
        },
        accent: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        // Custom gradient colors for your background
        gradient: {
          start: '#0a0a1a',
          mid1: '#1a1a3a',
          mid2: '#2d1b69',
          mid3: '#8b5cf6',
          mid4: '#ec4899',
          end: '#f472b6',
        },
        // Glass morphism colors
        glass: {
          light: 'rgba(255, 255, 255, 0.1)',
          medium: 'rgba(255, 255, 255, 0.2)',
          dark: 'rgba(0, 0, 0, 0.1)',
          primary: 'rgba(139, 92, 246, 0.2)',
          secondary: 'rgba(236, 72, 153, 0.2)',
        },
      },

      fontFamily: {
        'sans': ['Zen Old Mincho', 'serif'],
        'serif': ['Zen Old Mincho', 'serif'],
        'mono': ['Zen Old Mincho', 'serif'],
        'display': ['Zen Old Mincho', 'serif'],
        'body': ['Zen Old Mincho', 'serif'],
      },

      fontWeight: {
        ...range(minFontWeight, maxFontWeight, 100).reduce((merged, f) => (
          { ...merged, [f]: `${f}` }
        ), {})
      },

      borderRadius: {
        DEFAULT: '5px',
        ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      }
    },

    fontSize: {
      ...range(minFont, maxFont).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {})
    },

    spacing: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {})
    },

    width: {
      ...range(1, 1000).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      ...screens,
    },

    height: {
      ...range(1, 1000).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      ...screens,
    },

    maxWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...screens,
    },

    minWidth: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vw']: `${f}vw !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...screens,
    },

    maxHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...screens,
    },

    minHeight: {
      ...range(minPixel, maxPixel).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range(1, 100).reduce((merged, f) => ({ ...merged, [f + 'vh']: `${f}vh !important` }), {}),
      ...range(1, 500).reduce((merged, f) => ({ ...merged, [f + '%']: `${f}% !important` }), {}),
      ...screens,
    },

    zIndex: {
      ...range(0, 99).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
      ...range(100, 990, 10).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
      ...range(1000, 10000, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}` }), {}),
    },

    borderWidth: {
      DEFAULT: '1px',
      ...range(0, 50).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
    },

    // Positioning utilities
    inset: {
      ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'auto': 'auto !important',
      'full': '100% !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '2/3': '66.666667% !important',
      '1/4': '25% !important',
      '3/4': '75% !important',
    },

    top: {
      ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'auto': 'auto !important',
      'full': '100% !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '2/3': '66.666667% !important',
      '1/4': '25% !important',
      '3/4': '75% !important',
    },

    right: {
      ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'auto': 'auto !important',
      'full': '100% !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '2/3': '66.666667% !important',
      '1/4': '25% !important',
      '3/4': '75% !important',
    },

    bottom: {
      ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'auto': 'auto !important',
      'full': '100% !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '2/3': '66.666667% !important',
      '1/4': '25% !important',
      '3/4': '75% !important',
    },

    left: {
      ...range(0, 100).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'auto': 'auto !important',
      'full': '100% !important',
      '1/2': '50% !important',
      '1/3': '33.333333% !important',
      '2/3': '66.666667% !important',
      '1/4': '25% !important',
      '3/4': '75% !important',
    },

    // Custom backdrop blur values
    backdropBlur: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '12px',
      xl: '16px',
      '2xl': '24px',
      '3xl': '40px',
    },

    // Custom box shadows for your glass morphism effects
    boxShadow: {
      'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      'glass-inset': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.05)',
      'glow-primary': '0 0 20px rgba(139, 92, 246, 0.5)',
      'glow-secondary': '0 0 20px rgba(236, 72, 153, 0.5)',
      'glow-white': '0 0 20px rgba(255, 255, 255, 0.3)',
      'floating': '0 10px 30px rgba(0, 0, 0, 0.1), 0 1px 8px rgba(0, 0, 0, 0.2)',
    },

    // Custom text shadows
    textShadow: {
      'none': 'none',
      'sm': '0 1px 2px rgba(0, 0, 0, 0.5)',
      'DEFAULT': '0 2px 4px rgba(0, 0, 0, 0.5)',
      'md': '0 2px 4px rgba(0, 0, 0, 0.5)',
      'lg': '0 4px 8px rgba(0, 0, 0, 0.5)',
      'xl': '0 8px 16px rgba(0, 0, 0, 0.5)',
      '2xl': '0 16px 32px rgba(0, 0, 0, 0.5)',
      'glow': '0 0 10px rgba(255, 255, 255, 0.8)',
      'glow-primary': '0 0 10px rgba(139, 92, 246, 0.8)',
      'glow-secondary': '0 0 10px rgba(236, 72, 153, 0.8)',
    },
  },

  plugins: [

  ]
}
