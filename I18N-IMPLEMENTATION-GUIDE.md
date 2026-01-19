# Bilingual Implementation Guide (next-intl)

## ✅ What's Been Completed

### 1. Installation & Configuration ✅
- ✅ Installed `next-intl` package
- ✅ Created `src/i18n.ts` configuration
- ✅ Created `src/middleware.ts` for locale routing
- ✅ Updated `next.config.js` (removed old i18n config)
- ✅ Created translation dictionaries:
  - `messages/en.json` (English - complete)
  - `messages/es.json` (Spanish - complete)

### 2. Translation Files ✅
Both `en.json` and `es.json` include translations for:
- Common UI elements
- Navigation
- Homepage
- About page
- Services page
- Contact form
- Consultation booking
- Assessment tool
- All 3 pathway pages (Family, Employment, Citizenship)
- Footer
- Form validation messages

### 3. Locale Layout ✅
- Created `src/app/[locale]/layout.tsx` for locale-based routing

---

## 🔄 Migration Steps Required

### Step 1: Move Pages to [locale] Directory

All pages need to be moved from `src/app/` to `src/app/[locale]/`:

```bash
# Current structure:
src/app/
  ├── page.tsx
  ├── about/page.tsx
  ├── services/page.tsx
  ├── contact/page.tsx
  ├── consultation/page.tsx
  ├── assessment/page.tsx
  └── pathways/
      ├── family/page.tsx
      ├── employment/page.tsx
      └── citizenship/page.tsx

# New structure:
src/app/
  ├── [locale]/
  │   ├── layout.tsx (✅ created)
  │   ├── page.tsx (needs migration)
  │   ├── about/page.tsx (needs migration)
  │   ├── services/page.tsx (needs migration)
  │   ├── contact/page.tsx (needs migration)
  │   ├── consultation/page.tsx (needs migration)
  │   ├── assessment/page.tsx (needs migration)
  │   └── pathways/
  │       ├── family/page.tsx (needs migration)
  │       ├── employment/page.tsx (needs migration)
  │       └── citizenship/page.tsx (needs migration)
```

### Step 2: Update Each Page to Use Translations

#### Example: Homepage (page.tsx)

**Before:**
```tsx
export default function Home() {
  return (
    <h1>Your Bridge to Immigration Success in North Carolina</h1>
  );
}
```

**After:**
```tsx
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('home');
  
  return (
    <h1>
      {t('heroTitle')} <span>{t('heroTitleHighlight')}</span>
    </h1>
  );
}
```

### Step 3: Create Language Switcher Component

```tsx
// src/components/LanguageSwitcher.tsx
'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLocale = (newLocale: string) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '');
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <div className="flex items-center gap-3">
      <button
        onClick={() => switchLocale('en')}
        className={`text-sm font-medium ${
          locale === 'en'
            ? 'text-primary underline underline-offset-4'
            : 'text-neutral-600 hover:text-primary transition-colors'
        }`}
      >
        English
      </button>
      <span className="text-neutral-400">|</span>
      <button
        onClick={() => switchLocale('es')}
        className={`text-sm font-medium ${
          locale === 'es'
            ? 'text-primary underline underline-offset-4'
            : 'text-neutral-600 hover:text-primary transition-colors'
        }`}
      >
        Español
      </button>
    </div>
  );
}
```

### Step 4: Update Navigation Component

```tsx
// src/components/Navigation.tsx
'use client';

import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function Navigation() {
  const t = useTranslations('nav');
  const locale = useLocale();

  return (
    <nav>
      <Link href={`/${locale}`}>{t('home')}</Link>
      <Link href={`/${locale}/about`}>{t('about')}</Link>
      <Link href={`/${locale}/services`}>{t('services')}</Link>
      <Link href={`/${locale}/contact`}>{t('contact')}</Link>
    </nav>
  );
}
```

---

## 📋 Complete Migration Checklist

### Pages to Migrate (9 total)
- [ ] `src/app/page.tsx` → `src/app/[locale]/page.tsx`
- [ ] `src/app/about/page.tsx` → `src/app/[locale]/about/page.tsx`
- [ ] `src/app/services/page.tsx` → `src/app/[locale]/services/page.tsx`
- [ ] `src/app/contact/page.tsx` → `src/app/[locale]/contact/page.tsx`
- [ ] `src/app/consultation/page.tsx` → `src/app/[locale]/consultation/page.tsx`
- [ ] `src/app/assessment/page.tsx` → `src/app/[locale]/assessment/page.tsx`
- [ ] `src/app/pathways/family/page.tsx` → `src/app/[locale]/pathways/family/page.tsx`
- [ ] `src/app/pathways/employment/page.tsx` → `src/app/[locale]/pathways/employment/page.tsx`
- [ ] `src/app/pathways/citizenship/page.tsx` → `src/app/[locale]/pathways/citizenship/page.tsx`

### Components to Update
- [ ] Create `LanguageSwitcher` component
- [ ] Update `Navigation` component (if exists)
- [ ] Update `Footer` component (if exists)
- [ ] Update any form components to use translations

### Testing
- [ ] Test English version: `http://localhost:3000/en`
- [ ] Test Spanish version: `http://localhost:3000/es`
- [ ] Test language switcher
- [ ] Test all navigation links
- [ ] Test all forms in both languages
- [ ] Verify email notifications use correct language

---

## 🚀 Quick Start Commands

### 1. Move All Pages (PowerShell)
```powershell
# Create locale directories
New-Item -ItemType Directory -Path "src\app\[locale]\about" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\services" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\contact" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\consultation" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\assessment" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\pathways\family" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\pathways\employment" -Force
New-Item -ItemType Directory -Path "src\app\[locale]\pathways\citizenship" -Force

# Copy pages (you'll need to update them after)
Copy-Item "src\app\page.tsx" "src\app\[locale]\page.tsx"
Copy-Item "src\app\about\page.tsx" "src\app\[locale]\about\page.tsx"
Copy-Item "src\app\services\page.tsx" "src\app\[locale]\services\page.tsx"
Copy-Item "src\app\contact\page.tsx" "src\app\[locale]\contact\page.tsx"
Copy-Item "src\app\consultation\page.tsx" "src\app\[locale]\consultation\page.tsx"
Copy-Item "src\app\assessment\page.tsx" "src\app\[locale]\assessment\page.tsx"
Copy-Item "src\app\pathways\family\page.tsx" "src\app\[locale]\pathways\family\page.tsx"
Copy-Item "src\app\pathways\employment\page.tsx" "src\app\[locale]\pathways\employment\page.tsx"
Copy-Item "src\app\pathways\citizenship\page.tsx" "src\app\[locale]\pathways\citizenship\page.tsx"
```

### 2. Test the Setup
```bash
cd frontend
npm run dev
```

Visit:
- English: http://localhost:3000/en
- Spanish: http://localhost:3000/es

---

## 🔍 Translation Key Reference

### Common Patterns

```tsx
// Simple text
const t = useTranslations('home');
<h1>{t('heroTitle')}</h1>

// With HTML
<p>{t('heroDescription')}</p>

// Navigation
const t = useTranslations('nav');
<Link href={`/${locale}/about`}>{t('about')}</Link>

// Forms
const t = useTranslations('contact');
<label>{t('nameLabel')}</label>
<input placeholder={t('namePlaceholder')} />

// Buttons
const t = useTranslations('common');
<button>{t('submit')}</button>
```

---

## 📊 Translation Coverage

### Completed Translations
- ✅ Common UI (14 keys)
- ✅ Navigation (9 keys)
- ✅ Homepage (20 keys)
- ✅ About page (12 keys)
- ✅ Services (11 keys)
- ✅ Contact form (16 keys)
- ✅ Consultation (25 keys)
- ✅ Assessment (17 keys)
- ✅ Family pathway (12 keys)
- ✅ Employment pathway (10 keys)
- ✅ Citizenship pathway (16 keys)
- ✅ Footer (14 keys)
- ✅ Form validation (7 keys)

**Total: 183 translation keys** in both English and Spanish

---

## 🎯 Next Steps

### Option A: Automated Migration (Recommended)
I can automatically:
1. Move all pages to `[locale]` directory
2. Update all pages to use `useTranslations`
3. Create language switcher component
4. Update navigation and footer
5. Test both languages

**Estimated time: 30-45 minutes**

### Option B: Manual Migration
Follow the checklist above and update pages one by one.

**Estimated time: 2-3 hours**

---

## 🌐 URL Structure

After implementation:
- `/` → redirects to `/en` (default locale)
- `/en` → English homepage
- `/es` → Spanish homepage
- `/en/about` → English about page
- `/es/about` → Spanish about page
- `/en/consultation` → English consultation booking
- `/es/consultation` → Spanish consultation booking

All URLs will automatically include the locale prefix!

---

## ✅ Benefits

1. **Complete Bilingual Support**: Every page, form, and component in both languages
2. **SEO Friendly**: Separate URLs for each language
3. **User Experience**: Language switcher on every page
4. **Maintainable**: All translations in JSON files
5. **Scalable**: Easy to add more languages in the future

---

**Ready to proceed with automated migration?**
