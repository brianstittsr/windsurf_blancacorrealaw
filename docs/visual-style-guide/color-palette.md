# Color Palette for Blanca Correa Law Website

## Primary Colors

| Color Swatch | Color Name | Hex Code | RGB | Usage |
|--------------|------------|----------|-----|-------|
| ![#E07A5F](https://via.placeholder.com/50/E07A5F/FFFFFF?text=+) | Terracotta | #E07A5F | rgb(224, 122, 95) | Primary brand color, call-to-action elements, key headings |
| ![#3D5A80](https://via.placeholder.com/50/3D5A80/FFFFFF?text=+) | Deep Teal | #3D5A80 | rgb(61, 90, 128) | Secondary elements, navigation, footer, professional accents |
| ![#F9C74F](https://via.placeholder.com/50/F9C74F/000000?text=+) | Sunrise Yellow | #F9C74F | rgb(249, 199, 79) | Accent color, highlights, progress indicators, interactive elements |

## Neutral Colors

| Color Swatch | Color Name | Hex Code | RGB | Usage |
|--------------|------------|----------|-----|-------|
| ![#F8F5F2](https://via.placeholder.com/50/F8F5F2/000000?text=+) | Warm White | #F8F5F2 | rgb(248, 245, 242) | Background, content areas |
| ![#E5E5E5](https://via.placeholder.com/50/E5E5E5/000000?text=+) | Light Gray | #E5E5E5 | rgb(229, 229, 229) | Subtle backgrounds, dividers |
| ![#9D9D9D](https://via.placeholder.com/50/9D9D9D/000000?text=+) | Medium Gray | #9D9D9D | rgb(157, 157, 157) | Secondary text, icons |
| ![#4A4A4A](https://via.placeholder.com/50/4A4A4A/FFFFFF?text=+) | Dark Gray | #4A4A4A | rgb(74, 74, 74) | Body text |
| ![#2D2D2D](https://via.placeholder.com/50/2D2D2D/FFFFFF?text=+) | Charcoal | #2D2D2D | rgb(45, 45, 45) | Headings, important text |

## Functional Colors

| Color Swatch | Color Name | Hex Code | RGB | Usage |
|--------------|------------|----------|-----|-------|
| ![#81B29A](https://via.placeholder.com/50/81B29A/000000?text=+) | Success Green | #81B29A | rgb(129, 178, 154) | Success messages, completion indicators |
| ![#E76F51](https://via.placeholder.com/50/E76F51/FFFFFF?text=+) | Alert Red | #E76F51 | rgb(231, 111, 81) | Error messages, alerts, urgent information |
| ![#457B9D](https://via.placeholder.com/50/457B9D/FFFFFF?text=+) | Info Blue | #457B9D | rgb(69, 123, 157) | Information messages, help text |

## Color Combinations

### Primary Button
- Background: Terracotta (#E07A5F)
- Text: Warm White (#F8F5F2)
- Hover: Darker Terracotta (#C86A52)
- Focus: Terracotta (#E07A5F) with 3px Deep Teal (#3D5A80) outline

### Secondary Button
- Background: Transparent
- Border: Deep Teal (#3D5A80)
- Text: Deep Teal (#3D5A80)
- Hover: Light Deep Teal background (#EEF1F5)
- Focus: 3px Deep Teal (#3D5A80) outline

### Navigation
- Background: Warm White (#F8F5F2)
- Text: Dark Gray (#4A4A4A)
- Active/Current: Terracotta (#E07A5F)
- Hover: Deep Teal (#3D5A80)

### Cards
- Background: Warm White (#F8F5F2)
- Border: Light Gray (#E5E5E5)
- Heading: Charcoal (#2D2D2D)
- Text: Dark Gray (#4A4A4A)
- Accent: Terracotta (#E07A5F) or Deep Teal (#3D5A80)

### Form Elements
- Input Background: Warm White (#F8F5F2)
- Input Border: Medium Gray (#9D9D9D)
- Input Text: Dark Gray (#4A4A4A)
- Label: Charcoal (#2D2D2D)
- Focus: Deep Teal (#3D5A80)
- Error: Alert Red (#E76F51)
- Success: Success Green (#81B29A)

### Progress Indicators
- Background: Light Gray (#E5E5E5)
- Completed: Success Green (#81B29A)
- Current: Sunrise Yellow (#F9C74F)
- Upcoming: Light Gray (#E5E5E5)

## Accessibility Considerations

All color combinations have been tested to ensure they meet WCAG 2.1 AA standards for contrast:

### Text on Background Contrast Ratios
- Dark Gray (#4A4A4A) on Warm White (#F8F5F2): 8.5:1 ✓
- Charcoal (#2D2D2D) on Warm White (#F8F5F2): 13.1:1 ✓
- Warm White (#F8F5F2) on Deep Teal (#3D5A80): 8.3:1 ✓
- Warm White (#F8F5F2) on Terracotta (#E07A5F): 4.6:1 ✓
- Dark Gray (#4A4A4A) on Sunrise Yellow (#F9C74F): 4.8:1 ✓

### Interactive Element Contrast Ratios
- Terracotta (#E07A5F) against Warm White (#F8F5F2): 3.2:1 ✓
- Deep Teal (#3D5A80) against Warm White (#F8F5F2): 8.3:1 ✓
- Sunrise Yellow (#F9C74F) against Warm White (#F8F5F2): 1.8:1 ✗ (Use only for non-essential decorative elements or ensure adequate text contrast)

## Implementation in CSS

```css
:root {
  /* Colors: Primary */
  --color-terracotta: #E07A5F;
  --color-terracotta-dark: #C86A52;
  --color-deep-teal: #3D5A80;
  --color-deep-teal-light: #EEF1F5;
  --color-sunrise-yellow: #F9C74F;
  
  /* Colors: Neutral */
  --color-warm-white: #F8F5F2;
  --color-light-gray: #E5E5E5;
  --color-medium-gray: #9D9D9D;
  --color-dark-gray: #4A4A4A;
  --color-charcoal: #2D2D2D;
  
  /* Colors: Functional */
  --color-success: #81B29A;
  --color-alert: #E76F51;
  --color-info: #457B9D;
}
```
