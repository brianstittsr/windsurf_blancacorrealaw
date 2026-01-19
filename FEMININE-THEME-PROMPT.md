# Feminine Theme Update Prompt

## Overview
Update the Blanca Correa Law website to have a softer, more feminine aesthetic while maintaining professionalism. Incorporate immigration-related imagery from Pexels.

---

## Color Palette Changes

Update `frontend/tailwind.config.ts` with these feminine colors:

### Primary - Dusty Rose / Mauve
```typescript
primary: {
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
  DEFAULT: '#be185d', // Dusty Rose
},
```

### Secondary - Soft Teal / Sage
```typescript
secondary: {
  50: '#f0fdfa',
  100: '#ccfbf1',
  200: '#99f6e4',
  300: '#5eead4',
  400: '#2dd4bf',
  500: '#14b8a6',
  600: '#0d9488',
  700: '#0f766e',
  800: '#115e59',
  900: '#134e4a',
  DEFAULT: '#0d9488', // Soft Teal
},
```

### Accent - Warm Gold / Champagne
```typescript
accent: {
  50: '#fffbeb',
  100: '#fef3c7',
  200: '#fde68a',
  300: '#fcd34d',
  400: '#fbbf24',
  500: '#f59e0b',
  600: '#d97706',
  700: '#b45309',
  800: '#92400e',
  900: '#78350f',
  DEFAULT: '#d97706', // Warm Gold
},
```

### Neutral - Warm Gray
```typescript
neutral: {
  50: '#fafaf9',
  100: '#f5f5f4',
  200: '#e7e5e4',
  300: '#d6d3d1',
  400: '#a8a29e',
  500: '#78716c',
  600: '#57534e',
  700: '#44403c',
  800: '#292524',
  900: '#1c1917',
},
```

---

## Pexels Immigration Images

### Recommended Free Images (Search Terms & URLs)

#### Hero Section - Diverse Families / New Beginnings
- Search: "diverse family america", "immigrant family happy", "multicultural family"
- Suggested images:
  - https://www.pexels.com/photo/happy-diverse-family-3807517/
  - https://www.pexels.com/photo/multiethnic-family-walking-together-5637731/

#### About Section - Professional Woman / Attorney
- Search: "professional woman lawyer", "female attorney", "businesswoman office"
- Suggested images:
  - https://www.pexels.com/photo/woman-in-black-blazer-3756679/
  - https://www.pexels.com/photo/professional-woman-smiling-5669619/

#### Services Section - Documents / Consultation
- Search: "legal documents", "consultation meeting", "paperwork signing"
- Suggested images:
  - https://www.pexels.com/photo/person-signing-document-3760067/
  - https://www.pexels.com/photo/two-women-having-a-meeting-3756681/

#### Immigration Pathways - American Dream / Citizenship
- Search: "american flag", "citizenship ceremony", "passport documents"
- Suggested images:
  - https://www.pexels.com/photo/american-flag-1550342/
  - https://www.pexels.com/photo/person-holding-us-passport-3943882/

#### Contact Section - Welcoming Office
- Search: "modern office reception", "welcoming workspace"
- Suggested images:
  - https://www.pexels.com/photo/modern-office-interior-3182812/

---

## Typography Suggestions

Consider softer, elegant fonts:
- **Headings**: Playfair Display, Cormorant Garamond, or Lora
- **Body**: Open Sans, Nunito, or Quicksand

Update in `frontend/src/app/layout.tsx`:
```typescript
import { Playfair_Display, Nunito } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
});
```

---

## UI Element Updates

### Buttons - Softer Rounded Corners
```css
.btn-primary {
  @apply bg-primary text-white px-6 py-3 rounded-full font-semibold 
         transition-all duration-200 hover:bg-primary-600 
         focus:ring-4 focus:ring-primary/20 active:scale-95;
}
```

### Cards - Subtle Shadows & Borders
```css
.card-pathway {
  @apply bg-white rounded-2xl shadow-soft border border-primary/10 
         p-6 transition-all duration-300 hover:shadow-lg 
         hover:border-primary/20;
}
```

### Add Decorative Elements
- Soft gradient backgrounds
- Subtle floral or organic patterns
- Curved section dividers instead of straight lines

---

## Implementation Steps

1. **Update Tailwind Config** - Apply new color palette
2. **Download Pexels Images** - Save to `public/images/`
3. **Update Components** - Replace placeholder images with Pexels images
4. **Adjust Typography** - Import and apply new fonts
5. **Soften UI Elements** - Update button/card styles
6. **Add Decorative Touches** - Gradients, curves, subtle patterns

---

## Example Component Updates

### Hero Section with Pexels Image
```tsx
<section className="relative bg-gradient-to-br from-primary-50 via-white to-secondary-50">
  <div className="container-custom py-20">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <h1 className="text-display text-primary-800">
          Your Journey to a <span className="text-primary">New Beginning</span>
        </h1>
        <p className="text-body text-neutral-600 mt-6">
          Compassionate immigration guidance for families seeking their American dream.
        </p>
      </div>
      <div className="relative">
        <img 
          src="/images/hero-family.jpg" 
          alt="Happy immigrant family"
          className="rounded-2xl shadow-soft"
        />
      </div>
    </div>
  </div>
</section>
```

---

## Notes
- All Pexels images are free for commercial use
- Credit is appreciated but not required
- Download high-resolution versions for best quality
- Optimize images before adding to project (use WebP format)
