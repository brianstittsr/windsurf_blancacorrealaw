# Blanca Correa Law - Immigration Website Frontend

A modern, bilingual (English/Spanish) immigration law website built with Next.js, implementing the "Pathways to Belonging" design theme.

## Features

- 🌐 **Bilingual Support**: Full English and Spanish content with language persistence
- 🎨 **Modern Design**: Implementing "Pathways to Belonging" visual theme with warm, welcoming colors
- 📱 **Mobile-First**: Responsive design optimized for all devices
- ⚡ **Performance**: Built with Next.js for optimal loading speeds
- ♿ **Accessible**: WCAG 2.1 AA compliant design
- 🎯 **Interactive Tools**: Immigration pathway assessment and consultation booking

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: TailwindCSS with custom design system
- **Fonts**: Montserrat (sans-serif) and Source Serif Pro (serif)
- **Icons**: Lucide React
- **i18n**: next-i18next for bilingual support

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Project Structure

```
frontend/
├── src/
│   ├── app/              # Next.js app directory
│   │   ├── layout.tsx    # Root layout with fonts
│   │   ├── page.tsx      # Homepage
│   │   └── globals.css   # Global styles
│   ├── components/       # Reusable components
│   ├── lib/              # Utility functions
│   └── types/            # TypeScript types
├── public/
│   └── locales/          # Translation files
│       ├── en/           # English translations
│       └── es/           # Spanish translations
└── ...config files
```

## Design System

### Colors

- **Primary (Terracotta)**: `#d54028` - Warmth, new foundations
- **Secondary (Deep Teal)**: `#2e5f6a` - Stability, trust
- **Accent (Sunrise Yellow)**: `#facc15` - Hope, new beginnings

### Typography

- **Headings**: Montserrat (humanist sans-serif)
- **Body**: Source Serif Pro (readable serif)

### Components

Custom Tailwind classes:
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-outline` - Outline button
- `.card-pathway` - Card component with hover effects
- `.container-custom` - Responsive container

## Internationalization

The site supports English and Spanish with:
- Language toggle in navigation
- Persistent language preference
- Culturally adapted content (not just translation)
- Proper multilingual typography

## Next Steps

1. Add bilingual content files
2. Implement navigation component
3. Create assessment tool pages
4. Build consultation booking system
5. Add educational resources section

## License

© 2024 Blanca Correa Law. All rights reserved.
