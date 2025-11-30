# UI Components for Blanca Correa Law Website

This document outlines the key UI components that implement the "Pathways to Belonging" visual theme for the Blanca Correa Law website.

## Navigation Components

### Primary Navigation

The primary navigation implements the journey-based approach, organizing content by immigration situation rather than traditional service categories.

```
+--------------------------------------------------------------+
|                                                              |
|  LOGO                               LANGUAGE TOGGLE (EN/ES)  |
|                                                              |
+--------------------------------------------------------------+
|                                                              |
|  HOME   PATHWAYS ▾   RESOURCES ▾   TOOLS ▾   ABOUT   CONTACT |
|                                                              |
+--------------------------------------------------------------+
```

**States:**
- Normal: Dark Gray text (#4A4A4A)
- Hover: Deep Teal text (#3D5A80)
- Active: Terracotta text (#E07A5F)
- Current: Terracotta text (#E07A5F) with subtle underline

**Mobile Version:**
```
+--------------------------------------------------------------+
|                                                              |
|  LOGO                      [LANGUAGE]     [MENU HAMBURGER]   |
|                                                              |
+--------------------------------------------------------------+
```

**Dropdown Menu:**
```
+--------------------------------------------------------------+
|                                                              |
|  PATHWAYS ▾                                                  |
|  +----------------------------------------------------------+|
|  | Family-Based Immigration                                 ||
|  | Employment Visas                                         ||
|  | Citizenship & Naturalization                             ||
|  | Humanitarian Relief                                      ||
|  | View All Pathways                                        ||
|  +----------------------------------------------------------+|
|                                                              |
+--------------------------------------------------------------+
```

### Language Toggle

The language toggle allows users to switch between English and Spanish while maintaining context.

```
+----------------+
|                |
|  EN  |  ES     |
|  ▔▔▔            |
|                |
+----------------+
```

**States:**
- Selected: Underlined, Terracotta text (#E07A5F)
- Unselected: Dark Gray text (#4A4A4A)

### Breadcrumbs

Breadcrumbs provide context and navigation path.

```
HOME > IMMIGRATION PATHWAYS > FAMILY-BASED IMMIGRATION
```

**Styling:**
- Text: Medium Gray (#9D9D9D)
- Current Page: Dark Gray (#4A4A4A)
- Separator: Light Gray (#E5E5E5)
- Hover: Deep Teal (#3D5A80)

## Button Components

### Primary Button

Used for main calls-to-action and primary user actions.

```
+------------------+
|                  |
|  PRIMARY ACTION  |
|                  |
+------------------+
```

**States:**
- Normal: Terracotta background (#E07A5F), White text (#F8F5F2)
- Hover: Darker Terracotta background (#C86A52), White text (#F8F5F2)
- Active: Pressed state with slight darkening
- Disabled: Muted colors with reduced opacity
- Focus: 3px Deep Teal outline (#3D5A80)

### Secondary Button

Used for alternative actions and secondary options.

```
+------------------+
|                  |
|  SECONDARY ACTION|
|                  |
+------------------+
```

**States:**
- Normal: Transparent background, Deep Teal border and text (#3D5A80)
- Hover: Light Deep Teal background (#EEF1F5), Deep Teal border and text (#3D5A80)
- Active: Pressed state with slight darkening
- Disabled: Muted colors with reduced opacity
- Focus: 3px Deep Teal outline (#3D5A80)

### Tertiary Button

Used for less prominent actions and text links.

```
Tertiary Action
```

**States:**
- Normal: Deep Teal text (#3D5A80) with subtle underline
- Hover: Darker Deep Teal text with more prominent underline
- Active: Pressed state with slight darkening
- Disabled: Muted colors with reduced opacity
- Focus: Dotted outline

### Button with Icon

Icons can be added to any button type for additional context.

```
+----------------------+
|                      |
|  ACTION  [ICON]      |
|                      |
+----------------------+
```

**Icon Placement:**
- Left-aligned: For action reinforcement
- Right-aligned: For directional or "next" actions

## Card Components

### Pathway Card

Used to present immigration pathway options on the homepage and pathway selection pages.

```
+----------------------------------------------------------+
|  [Terracotta accent bar]                                 |
|                                                          |
|  [ICON]                                                  |
|                                                          |
|  Family-Based Immigration                                |
|                                                          |
|  Reunite with family members through various             |
|  sponsorship options for immediate relatives             |
|  and family preference categories.                       |
|                                                          |
|  [EXPLORE]                                               |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Warm White (#F8F5F2)
- Border: Light Gray (#E5E5E5)
- Accent: Terracotta top border (#E07A5F)
- Title: Charcoal (#2D2D2D), Montserrat, 20px
- Description: Dark Gray (#4A4A4A), Source Serif Pro, 16px
- Icon: Simple line icon in Deep Teal (#3D5A80)
- Hover: Subtle shadow and slight scaling

### Resource Card

Used in the resource directory to display local immigration resources.

```
+----------------------------------------------------------+
|                                                          |
|  Legal Aid of North Carolina                             |
|  Immigration Project                                     |
|                                                          |
|  Legal representation, Know Your Rights workshops,       |
|  DACA assistance                                         |
|                                                          |
|  Languages: English, Spanish                             |
|  Location: Raleigh, NC                                   |
|  Phone: (919) 856-2564                                   |
|                                                          |
|  [WEBSITE]  [DIRECTIONS]  [SAVE]                         |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Warm White (#F8F5F2)
- Border: Light Gray (#E5E5E5)
- Title: Charcoal (#2D2D2D), Montserrat, 18px
- Description: Dark Gray (#4A4A4A), Source Serif Pro, 16px
- Metadata: Medium Gray (#9D9D9D), Source Serif Pro, 14px
- Category Indicator: Color-coded based on resource type
- Expandable: Click to show more details

### Testimonial Card

Used to showcase client success stories and build trust.

```
+----------------------------------------------------------+
|                                                          |
|  [CLIENT PHOTO]                                          |
|                                                          |
|  "Blanca Correa Law helped me navigate the complex       |
|  family visa process with expertise and compassion.      |
|  Today, my family is reunited in North Carolina."        |
|                                                          |
|  - Maria S., Mexico                                      |
|  Family-Based Immigration                                |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Warm White (#F8F5F2) or subtle gradient
- Quote: Dark Gray (#4A4A4A), Source Serif Pro Italic, 16px
- Attribution: Medium Gray (#9D9D9D), Montserrat, 14px
- Photo: Circular crop with subtle border
- Quote Marks: Subtle Terracotta (#E07A5F)

## Form Components

### Text Input

Used for collecting user information in forms.

```
+----------------------------------------------------------+
|                                                          |
|  Label Text                                              |
|  +------------------------------------------------------+|
|  |                                                      ||
|  | Input text                                           ||
|  |                                                      ||
|  +------------------------------------------------------+|
|  Helper text or error message                            |
|                                                          |
+----------------------------------------------------------+
```

**States:**
- Default: Light Gray border (#E5E5E5)
- Focus: Deep Teal border (#3D5A80)
- Filled: Light Gray border (#E5E5E5)
- Error: Alert Red border (#E76F51) with error message
- Disabled: Muted appearance with reduced opacity

### Selection Controls

#### Radio Buttons

Used for single selection from limited options.

```
+----------------------------------------------------------+
|                                                          |
|  Option Group Label                                      |
|                                                          |
|  (•) Selected option                                     |
|  ( ) Unselected option                                   |
|  ( ) Another unselected option                           |
|                                                          |
+----------------------------------------------------------+
```

**States:**
- Unselected: Empty circle outline
- Selected: Filled circle in Terracotta (#E07A5F)
- Hover: Subtle highlight
- Focus: Deep Teal outline (#3D5A80)
- Disabled: Muted appearance with reduced opacity

#### Checkboxes

Used for multiple selections or single toggles.

```
+----------------------------------------------------------+
|                                                          |
|  [✓] Selected checkbox                                   |
|  [ ] Unselected checkbox                                 |
|                                                          |
+----------------------------------------------------------+
```

**States:**
- Unselected: Empty square outline
- Selected: Filled square with checkmark in Terracotta (#E07A5F)
- Hover: Subtle highlight
- Focus: Deep Teal outline (#3D5A80)
- Disabled: Muted appearance with reduced opacity

### Dropdown

Used for single selection from many options.

```
+----------------------------------------------------------+
|                                                          |
|  Label Text                                              |
|  +------------------------------------------------------+|
|  |                                                      ||
|  | Selected option                            [▼]       ||
|  |                                                      ||
|  +------------------------------------------------------+|
|                                                          |
+----------------------------------------------------------+
```

**States:**
- Default: Light Gray border (#E5E5E5)
- Focus: Deep Teal border (#3D5A80)
- Open: Shows options list
- Disabled: Muted appearance with reduced opacity

## Interactive Tool Components

### Progress Indicator

Used in multi-step processes like the assessment tool and intake forms.

```
+----------------------------------------------------------+
|                                                          |
|  [Step 1] --> [Step 2] --> [Step 3] --> [Results]        |
|  [===============>-----------------------]               |
|                                                          |
+----------------------------------------------------------+
```

**States:**
- Completed: Terracotta (#E07A5F) with checkmark
- Current: Sunrise Yellow (#F9C74F)
- Upcoming: Light Gray (#E5E5E5)

### Assessment Question

Used in the immigration pathway assessment tool.

```
+----------------------------------------------------------+
|                                                          |
|  QUESTION 2 OF 8:                                        |
|                                                          |
|  What is your relationship to the U.S. citizen or        |
|  permanent resident who would sponsor you?               |
|                                                          |
|  ( ) Spouse                                              |
|  ( ) Parent                                              |
|  ( ) Child                                               |
|  ( ) Sibling                                             |
|  ( ) Other relative                                      |
|  ( ) No relative who is a U.S. citizen or resident       |
|                                                          |
|  [?] Help: Explanation of what each option means         |
|                                                          |
+----------------------------------------------------------+
|                                                          |
|  [PREVIOUS]                                [NEXT]        |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Question: Charcoal (#2D2D2D), Montserrat, 18px
- Options: Dark Gray (#4A4A4A), Source Serif Pro, 16px
- Help Text: Medium Gray (#9D9D9D), Source Serif Pro, 14px
- Progress: Clear indication of current question and total

### Results Display

Used to show assessment results and other tool outputs.

```
+----------------------------------------------------------+
|                                                          |
|  POTENTIAL IMMIGRATION PATHWAY                           |
|                                                          |
|  Family-Based Green Card (Spouse of U.S. Citizen)        |
|  [Progress bar: 90%]                                     |
|                                                          |
|  Why this may apply to you:                              |
|  • You are married to a U.S. citizen                     |
|  • You entered the U.S. legally                          |
|  • You currently have a valid visa status                |
|                                                          |
|  [LEARN MORE ABOUT THIS PATHWAY]                         |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Result Title: Charcoal (#2D2D2D), Montserrat, 20px
- Confidence Indicator: Progress bar in Success Green (#81B29A) or other appropriate color
- Explanation: Dark Gray (#4A4A4A), Source Serif Pro, 16px
- Call to Action: Clear button to learn more or take next steps

## Visual Process Maps

Used to illustrate immigration pathways and processes.

### Horizontal Process Map (Desktop)

```
+----------------------------------------------------------+
|                                                          |
|  [Step 1] --> [Step 2] --> [Step 3] --> [Step 4] --> [Step 5]|
|   |             |            |            |            |  |
|  [Details]    [Details]    [Details]    [Details]    [Details]|
|                                                          |
+----------------------------------------------------------+
```

### Vertical Process Map (Mobile)

```
+---------------------------+
|                           |
|  [Step 1]                 |
|     ↓                     |
|  [Step 2]                 |
|     ↓                     |
|  [Step 3]                 |
|     ↓                     |
|  [Step 4]                 |
|     ↓                     |
|  [Step 5]                 |
|                           |
+---------------------------+
```

**Styling:**
- Steps: Clear visual nodes in Deep Teal (#3D5A80)
- Current Step: Highlighted in Terracotta (#E07A5F)
- Completed Steps: Success Green (#81B29A) with checkmark
- Connections: Clear paths showing progression
- Details: Expandable information for each step

## Alert Components

### Success Alert

Used to confirm successful actions or positive outcomes.

```
+----------------------------------------------------------+
|                                                          |
|  ✓ Success! Your consultation has been scheduled.        |
|  You will receive a confirmation email shortly.          |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Light Success Green (#EDF4F0)
- Border: Success Green (#81B29A)
- Icon: Checkmark in Success Green (#81B29A)
- Text: Dark Gray (#4A4A4A)

### Error Alert

Used to communicate errors or problems.

```
+----------------------------------------------------------+
|                                                          |
|  ✕ There was a problem submitting your form.             |
|  Please check the highlighted fields and try again.      |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Light Alert Red (#FAEFEC)
- Border: Alert Red (#E76F51)
- Icon: X in Alert Red (#E76F51)
- Text: Dark Gray (#4A4A4A)

### Information Alert

Used to provide neutral information or guidance.

```
+----------------------------------------------------------+
|                                                          |
|  ℹ This information is for general guidance only and     |
|  does not constitute legal advice.                       |
|                                                          |
+----------------------------------------------------------+
```

**Styling:**
- Background: Light Info Blue (#EEF2F5)
- Border: Info Blue (#457B9D)
- Icon: Information icon in Info Blue (#457B9D)
- Text: Dark Gray (#4A4A4A)

## Implementation Notes

These components should be implemented as reusable React components with:

1. **Consistent Props:** Well-defined props for customization
2. **Accessibility:** ARIA attributes and keyboard navigation
3. **Responsive Behavior:** Adaptation to different screen sizes
4. **Bilingual Support:** Text content that updates based on language selection
5. **Theme Integration:** Use of design tokens for colors, typography, and spacing

Example React component structure:

```jsx
// Button component example
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  icon,
  iconPosition = 'right',
  disabled = false,
  fullWidth = false,
  onClick,
  className,
  ...props
}) => {
  const buttonClasses = classNames(
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    {
      'btn--disabled': disabled,
      'btn--full-width': fullWidth,
      'btn--with-icon': icon,
      [`btn--icon-${iconPosition}`]: icon && iconPosition,
    },
    className
  );

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="btn__icon">{icon}</span>}
      <span className="btn__text">{children}</span>
      {icon && iconPosition === 'right' && <span className="btn__icon">{icon}</span>}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};
```
