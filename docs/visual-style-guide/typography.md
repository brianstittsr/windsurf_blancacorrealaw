# Typography for Blanca Correa Law Website

## Primary Typefaces

### Montserrat (Sans-serif)
Used for headings, navigation, buttons, and UI elements.

![Montserrat Font Sample](https://via.placeholder.com/800x100/FFFFFF/000000?text=Montserrat:+ABCDEFGHIJKLMNOPQRSTUVWXYZ+abcdefghijklmnopqrstuvwxyz+0123456789)

**Weights Used:**
- Regular (400): UI elements, labels
- Medium (500): Subheadings, emphasis
- SemiBold (600): Buttons, smaller headings
- Bold (700): Primary headings

**Fallbacks:** Nunito, Arial, sans-serif

### Source Serif Pro (Serif)
Used for body text and longer content.

![Source Serif Pro Font Sample](https://via.placeholder.com/800x100/FFFFFF/000000?text=Source+Serif+Pro:+ABCDEFGHIJKLMNOPQRSTUVWXYZ+abcdefghijklmnopqrstuvwxyz+0123456789)

**Weights Used:**
- Regular (400): Body text
- SemiBold (600): Emphasis, quotes
- Bold (700): Important information

**Fallbacks:** Georgia, Times New Roman, serif

## Typography Scale

| Element | Font | Weight | Size (Desktop) | Size (Mobile) | Line Height | Letter Spacing |
|---------|------|--------|----------------|---------------|-------------|----------------|
| H1 | Montserrat | 700 | 40px | 32px | 1.2 | -0.5px |
| H2 | Montserrat | 700 | 32px | 28px | 1.2 | -0.3px |
| H3 | Montserrat | 600 | 24px | 22px | 1.3 | -0.2px |
| H4 | Montserrat | 600 | 20px | 18px | 1.3 | -0.1px |
| H5 | Montserrat | 600 | 18px | 16px | 1.4 | 0 |
| H6 | Montserrat | 600 | 16px | 14px | 1.4 | 0 |
| Body | Source Serif Pro | 400 | 16px | 16px | 1.6 | 0 |
| Small | Source Serif Pro | 400 | 14px | 14px | 1.5 | 0 |
| Button | Montserrat | 600 | 16px | 16px | 1.4 | 0.2px |
| Caption | Source Serif Pro | 400 | 12px | 12px | 1.4 | 0.1px |

## Heading Examples

# Heading 1 (40px/32px)
Primary page headings, hero titles

## Heading 2 (32px/28px)
Section headings, major content divisions

### Heading 3 (24px/22px)
Subsection headings, card titles

#### Heading 4 (20px/18px)
Minor section headings, feature titles

##### Heading 5 (18px/16px)
Small section headings, form section titles

###### Heading 6 (16px/14px)
Smallest headings, sidebar titles

## Body Text Examples

**Body Text (16px):** The main content text used throughout the website. Source Serif Pro provides excellent readability for longer content while maintaining a professional appearance. The line height of 1.6 ensures adequate spacing between lines for comfortable reading, especially important for complex immigration information.

**Small Text (14px):** Used for secondary information, metadata, and supporting content. Maintains readability while allowing for more compact presentation of information.

**Caption Text (12px):** Used sparingly for image captions, footnotes, and legal text. Still maintains minimum accessibility standards for text size.

## Multilingual Typography Considerations

Both Montserrat and Source Serif Pro have excellent multilingual character support, which is essential for a bilingual English/Spanish website. Special considerations for Spanish typography include:

- **Accented Characters:** Both fonts properly display á, é, í, ó, ú, ü, ñ, ¿, ¡
- **Text Expansion:** Spanish text is typically 15-25% longer than English, so layouts must accommodate this expansion
- **Line Heights:** Adequate line heights ensure accented characters don't overlap
- **Hyphenation:** Different hyphenation rules apply for Spanish text

### Example of Bilingual Text:

**English:**
> We guide you through every step of your immigration journey with expertise and compassion.

**Spanish:**
> Le guiamos a través de cada paso de su proceso migratorio con experiencia y compasión.

## Typography Implementation in CSS

```css
/* Font imports */
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Source+Serif+Pro:wght@400;600;700&display=swap');

:root {
  /* Typography: Font Families */
  --font-heading: 'Montserrat', 'Nunito', Arial, sans-serif;
  --font-body: 'Source Serif Pro', Georgia, 'Times New Roman', serif;
  
  /* Typography: Font Sizes */
  --font-size-h1: clamp(32px, 5vw, 40px);
  --font-size-h2: clamp(28px, 4vw, 32px);
  --font-size-h3: clamp(22px, 3vw, 24px);
  --font-size-h4: clamp(18px, 2.5vw, 20px);
  --font-size-h5: clamp(16px, 2vw, 18px);
  --font-size-h6: clamp(14px, 1.8vw, 16px);
  --font-size-body: 16px;
  --font-size-small: 14px;
  --font-size-caption: 12px;
  
  /* Typography: Line Heights */
  --line-height-heading: 1.2;
  --line-height-subheading: 1.3;
  --line-height-body: 1.6;
  --line-height-small: 1.5;
  --line-height-caption: 1.4;
  
  /* Typography: Letter Spacing */
  --letter-spacing-h1: -0.5px;
  --letter-spacing-h2: -0.3px;
  --letter-spacing-h3: -0.2px;
  --letter-spacing-h4: -0.1px;
  --letter-spacing-button: 0.2px;
}

/* Base Typography Styles */
body {
  font-family: var(--font-body);
  font-size: var(--font-size-body);
  line-height: var(--line-height-body);
  color: var(--color-dark-gray);
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  margin-top: 0;
  color: var(--color-charcoal);
}

h1 {
  font-size: var(--font-size-h1);
  line-height: var(--line-height-heading);
  letter-spacing: var(--letter-spacing-h1);
  font-weight: 700;
  margin-bottom: 24px;
}

h2 {
  font-size: var(--font-size-h2);
  line-height: var(--line-height-heading);
  letter-spacing: var(--letter-spacing-h2);
  font-weight: 700;
  margin-bottom: 20px;
}

h3 {
  font-size: var(--font-size-h3);
  line-height: var(--line-height-subheading);
  letter-spacing: var(--letter-spacing-h3);
  font-weight: 600;
  margin-bottom: 16px;
}

h4 {
  font-size: var(--font-size-h4);
  line-height: var(--line-height-subheading);
  letter-spacing: var(--letter-spacing-h4);
  font-weight: 600;
  margin-bottom: 16px;
}

h5 {
  font-size: var(--font-size-h5);
  line-height: var(--line-height-subheading);
  font-weight: 600;
  margin-bottom: 12px;
}

h6 {
  font-size: var(--font-size-h6);
  line-height: var(--line-height-subheading);
  font-weight: 600;
  margin-bottom: 12px;
}

small {
  font-size: var(--font-size-small);
  line-height: var(--line-height-small);
}

.caption {
  font-size: var(--font-size-caption);
  line-height: var(--line-height-caption);
}

.button {
  font-family: var(--font-heading);
  font-size: var(--font-size-body);
  font-weight: 600;
  letter-spacing: var(--letter-spacing-button);
}
```

## Accessibility Considerations

- All text meets WCAG 2.1 AA standards for contrast against its background
- Text can be resized up to 200% without loss of content or functionality
- Line heights are adequate for readability (minimum 1.5 for body text)
- Maximum line length is controlled for readability (66 characters recommended)
- Headings follow proper hierarchy for screen readers
- Font sizes never go below 12px for readability

## Typography Guidelines

1. **Maintain Hierarchy:** Use the type scale consistently to establish clear visual hierarchy
2. **Sentence Case:** Use sentence case for headings (capitalize first word only)
3. **Limit All Caps:** Reserve all caps for small UI elements or labels only
4. **Consistent Spacing:** Maintain consistent spacing between headings and body text
5. **Paragraph Length:** Keep paragraphs relatively short for better readability (3-5 lines ideal)
6. **Line Length:** Aim for 50-75 characters per line for optimal readability
7. **Emphasis:** Use bold sparingly for emphasis within body text
8. **Multilingual Parity:** Ensure typographic hierarchy is maintained across both languages
