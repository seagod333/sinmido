# Font Usage Examples

This document provides examples of how to use the defined fonts in your project.

## Available Fonts

### 1. Shippori Mincho (Serif Font)
- **Regular (400)**: `ShipporiMincho-Regular.ttf`
- **Medium (500)**: `ShipporiMincho-Medium.ttf`
- **SemiBold (600)**: `ShipporiMincho-SemiBold.ttf`
- **Bold (700)**: `ShipporiMincho-Bold.ttf`
- **ExtraBold (800)**: `ShipporiMincho-ExtraBold.ttf`

### 2. Poppins (Sans-Serif Font)
- **Light (300)**: Available via Google Fonts
- **Regular (400)**: Available via Google Fonts
- **Medium (500)**: Available via Google Fonts
- **SemiBold (600)**: Available via Google Fonts
- **Bold (700)**: Available via Google Fonts
- **ExtraBold (800)**: Available via Google Fonts
- **Black (900)**: Available via Google Fonts

## Usage Methods

### Method 1: Using Tailwind CSS Classes

```jsx
// Shippori Mincho
<h1 className="font-shippori font-bold text-4xl">Japanese Title</h1>
<p className="font-shippori font-medium text-lg">Japanese content</p>

// Poppins
<h2 className="font-poppins font-semibold text-2xl">English Title</h2>
<p className="font-poppins font-regular text-base">English content</p>
```

### Method 2: Using Custom CSS Classes

```jsx
// Shippori Mincho with specific weights
<h1 className="font-shippori-bold text-4xl">Bold Japanese Title</h1>
<p className="font-shippori-medium text-lg">Medium weight Japanese text</p>

// Poppins with specific weights
<h2 className="font-poppins-semibold text-2xl">SemiBold English Title</h2>
<p className="font-poppins-light text-base">Light weight English text</p>
```

### Method 3: Using Tailwind Font Family Classes

```jsx
// Using Tailwind font family classes
<h1 className="font-shippori font-bold text-4xl">Japanese Title</h1>
<h2 className="font-poppins font-semibold text-2xl">English Title</h2>
<p className="font-serif font-medium text-lg">Serif text (Shippori Mincho)</p>
```

### Method 4: Direct CSS

```css
.japanese-title {
  font-family: 'Shippori Mincho', serif;
  font-weight: 700;
  font-size: 2rem;
}

.english-content {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
}
```

## Recommended Usage Patterns

### For Japanese Content
```jsx
// Headers
<h1 className="font-shippori font-bold text-4xl md:text-5xl">メインタイトル</h1>
<h2 className="font-shippori font-semibold text-2xl md:text-3xl">サブタイトル</h2>

// Body text
<p className="font-shippori font-regular text-base md:text-lg">日本語の本文テキスト</p>
```

### For English Content
```jsx
// Headers
<h1 className="font-poppins font-bold text-4xl md:text-5xl">Main Title</h1>
<h2 className="font-poppins font-semibold text-2xl md:text-3xl">Subtitle</h2>

// Body text
<p className="font-poppins font-regular text-base md:text-lg">English body text</p>
```

### For Mixed Content
```jsx
// Japanese title with English subtitle
<div>
  <h1 className="font-shippori font-bold text-4xl">日本語タイトル</h1>
  <h2 className="font-poppins font-medium text-xl text-gray-600">English Subtitle</h2>
</div>
```

## Font Weight Mapping

### Shippori Mincho
- `font-weight-400` or `font-normal` → Regular
- `font-weight-500` or `font-medium` → Medium
- `font-weight-600` or `font-semibold` → SemiBold
- `font-weight-700` or `font-bold` → Bold
- `font-weight-800` or `font-extrabold` → ExtraBold

### Poppins
- `font-weight-300` or `font-light` → Light
- `font-weight-400` or `font-normal` → Regular
- `font-weight-500` or `font-medium` → Medium
- `font-weight-600` or `font-semibold` → SemiBold
- `font-weight-700` or `font-bold` → Bold
- `font-weight-800` or `font-extrabold` → ExtraBold
- `font-weight-900` or `font-black` → Black

## Best Practices

1. **Use Shippori Mincho for Japanese text** - It's specifically designed for Japanese characters
2. **Use Poppins for English text** - It's a modern, clean sans-serif font
3. **Maintain consistency** - Use the same font family for similar content types
4. **Consider readability** - Use appropriate font weights for different content hierarchy
5. **Test on different devices** - Ensure fonts render correctly across all devices

## Performance Notes

- Shippori Mincho fonts are loaded locally for better performance
- Poppins is loaded from Google Fonts with `display=swap` for optimal loading
- All fonts use `font-display: swap` to prevent invisible text during font load
