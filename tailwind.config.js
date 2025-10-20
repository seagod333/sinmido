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
const maxFont = 100;

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
    'text-primary',
    'text-secondary',
    'text-third',
    'text-fourth',
    'text-fifth',
    'text-sixth',
    'text-seventh',
    'text-eighth',
    'text-ninth',
    'text-tenth',
    'hover:text-primary',
    'hover:text-secondary',
    'hover:text-third',
    'hover:text-fourth',
    'hover:text-fifth',
    'hover:text-sixth',
    'hover:text-seventh',
    'hover:text-eighth',
    'hover:text-ninth',
    'hover:text-tenth',
    'bg-primary',
    'bg-secondary',
    'bg-third',
    'bg-fourth',
    'bg-fifth',
    'bg-sixth',
    'bg-seventh',
    'bg-eighth',
    'bg-ninth',
    'bg-tenth',
    'hover:bg-primary',
    'hover:bg-secondary',
    'hover:bg-third',
    'hover:bg-fourth',
    'hover:bg-fifth',
    'hover:bg-sixth',
    'hover:bg-eighth',
    'hover:bg-ninth',
    'hover:bg-tenth',
    'border-primary',
    'border-secondary',
    'border-third',
    'border-fourth',
    'border-fifth',
    'border-sixth',
    'border-seventh',
    'border-eighth',
    'border-ninth',
    'border-tenth',
    'hover:border-primary',
    'hover:border-secondary',
    'hover:border-third',
    'hover:border-fourth',
    'hover:border-fifth',
    'hover:border-sixth',
    'hover:border-seventh',
    'hover:border-eighth',
    'hover:border-ninth',
    'hover:border-tenth',
    // Positioning classes
    ...range(0, 200).map(i => `-right-${i}`),
    ...range(0, 200).map(i => `right-${i}`),
    ...range(0, 200).map(i => `-left-${i}`),
    ...range(0, 200).map(i => `left-${i}`),
    ...range(0, 200).map(i => `-top-${i}`),
    ...range(0, 200).map(i => `top-${i}`),
    ...range(0, 200).map(i => `-bottom-${i}`),
    ...range(0, 200).map(i => `bottom-${i}`),
    // Letter spacing classes
    ...range(-5, 20).map(i => `tracking-${i}`),
    ...range1(0.1, 2, 10).map(i => `tracking-${i}r`),
    'tracking-tighter',
    'tracking-tight',
    'tracking-normal',
    'tracking-wide',
    'tracking-wider',
    'tracking-widest',
    // Line height classes
    ...range(10, 200).map(i => `leading-${i}`),
    ...range1(0.5, 5, 10).map(i => `leading-${i}r`),
    'leading-none',
    'leading-tight',
    'leading-snug',
    'leading-normal',
    'leading-relaxed',
    'leading-loose',
    'leading-3',
    'leading-4',
    'leading-5',
    'leading-6',
    'leading-7',
    'leading-8',
    'leading-9',
    'leading-10',
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

        primary: '#ffffff',
        secondary: '#003391',
        third: '#B8FB3C',
        fourth: '#165BD9',
        fifth: '#EEF4FF',
        sixth: "#0F62FE",
        seventh: '#335CA7',
        eighth: '#0061A0',
        ninth: '#139486',
        tenth: '#345CA7',
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
      },

      // Positioning utilities
      inset: {
        ...range(-200, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
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
        ...range(-200, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
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
        ...range(-200, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
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
        ...range(-200, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
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
        ...range(-200, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
        ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
        'auto': 'auto !important',
        'full': '100% !important',
        '1/2': '50% !important',
        '1/3': '33.333333% !important',
        '2/3': '66.666667% !important',
        '1/4': '25% !important',
        '3/4': '75% !important',
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

    // Custom letter spacing (tracking)
    letterSpacing: {
      ...range(-5, 20).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.1, 2, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'tighter': '-0.05em',
      'tight': '-0.025em',
      'normal': '0em',
      'wide': '0.025em',
      'wider': '0.05em',
      'widest': '0.1em',
    },

    // Custom line height (leading)
    lineHeight: {
      ...range(10, 200).reduce((merged, f) => ({ ...merged, [f]: `${f}px !important` }), {}),
      ...range1(0.5, 5, 10).reduce((merged, f) => ({ ...merged, [f + 'r']: `${f}rem !important` }), {}),
      'none': '1',
      'tight': '1.25',
      'snug': '1.375',
      'normal': '1.5',
      'relaxed': '1.625',
      'loose': '2',
      '3': '.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '9': '2.25rem',
      '10': '2.5rem',
    },
  },

  plugins: [

  ]
}
