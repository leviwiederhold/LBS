---
name: Lillyan’s Beauty Studio
colors:
  surface: '#fbf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fbf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae8e7'
  surface-container-highest: '#e4e2e1'
  on-surface: '#1b1c1c'
  on-surface-variant: '#4e4445'
  inverse-surface: '#303030'
  inverse-on-surface: '#f3f0f0'
  outline: '#807474'
  outline-variant: '#d1c3c3'
  surface-tint: '#695b5b'
  primary: '#695b5b'
  on-primary: '#ffffff'
  primary-container: '#f5e1e1'
  on-primary-container: '#726363'
  inverse-primary: '#d5c2c2'
  secondary: '#7b5455'
  on-secondary: '#ffffff'
  secondary-container: '#fdcbcb'
  on-secondary-container: '#795354'
  tertiary: '#735c00'
  on-tertiary: '#ffffff'
  tertiary-container: '#ffe397'
  on-tertiary-container: '#7d6300'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#f2dede'
  primary-fixed-dim: '#d5c2c2'
  on-primary-fixed: '#231919'
  on-primary-fixed-variant: '#514444'
  secondary-fixed: '#ffdad9'
  secondary-fixed-dim: '#ecbbba'
  on-secondary-fixed: '#2f1314'
  on-secondary-fixed-variant: '#603d3e'
  tertiary-fixed: '#ffe088'
  tertiary-fixed-dim: '#e9c349'
  on-tertiary-fixed: '#241a00'
  on-tertiary-fixed-variant: '#574500'
  background: '#fbf9f8'
  on-background: '#1b1c1c'
  surface-variant: '#e4e2e1'
typography:
  h1:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h2:
    fontFamily: Noto Serif
    fontSize: 36px
    fontWeight: '400'
    lineHeight: '1.3'
  h3:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1200px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
---

## Brand & Style

The design system is rooted in the "Modern Minimalist" aesthetic with tactile, editorial influences. It evokes a calm, spa-inspired atmosphere that feels both professional and intimately welcoming. The brand personality is high-end boutique—prioritizing serenity, clarity, and a sense of effortless beauty.

The UI avoids clutter, using generous whitespace to create a "breathable" experience. Visuals should feel light and airy, utilizing soft transitions and a cohesive palette to guide the user through a premium service journey.

## Colors

The palette is anchored by a soft cream background to maintain warmth over sterile whites. 

- **Primary (Warm Blush):** Used for large surface areas, hero sections, and soft containers to establish the feminine tone.
- **Secondary (Muted Rose):** Reserved for interactive elements like buttons, active states, and emphasized iconography.
- **Tertiary (Subtle Gold):** A premium accent used sparingly for decorative flourishes, star ratings, or high-tier membership badges.
- **Neutral (Deep Charcoal):** Provides high-contrast readability for all typographic elements, ensuring accessibility remains a priority.

## Typography

This design system utilizes a sophisticated pairing of an elegant serif and a contemporary sans-serif.

- **Headlines:** Noto Serif provides a timeless, editorial feel. Use generous line heights to maintain a relaxed, premium pace.
- **Body & Interface:** Be Vietnam Pro offers a friendly and approachable clarity. Its modern proportions ensure readability on mobile booking screens.
- **Letter Spacing:** Headlines use slightly tighter tracking for a polished look, while small labels use increased tracking and uppercase styling to denote hierarchy and professionalism.

## Layout & Spacing

The layout follows a **Fixed Grid** system for desktop, centering the content at a maximum width of 1200px to ensure the interface feels intentional and curated. 

Spacing follows an 8px rhythmic scale. To reinforce the spa-inspired feel, use larger-than-standard padding for section containers (64px to 96px). This intentional use of "negative space" prevents the UI from feeling transactional, instead guiding the user through a relaxed browsing experience.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**. Instead of harsh dropshadows, this design system uses soft, diffused blurs with a slight warm tint (#D4A5A5 at 10% opacity) to create a subtle lift.

- **Level 1:** The base cream background.
- **Level 2:** Warm blush cards with no shadow, but a 1px solid border in a slightly darker tint.
- **Level 3:** Floating elements like modals or primary action buttons, featuring a soft "glow" shadow to suggest they are gently resting on the surface.

## Shapes

The shape language is consistently **Rounded**, avoiding sharp corners to maintain a "soft" and approachable aesthetic.

- **Standard Buttons & Inputs:** 0.5rem (8px) corner radius.
- **Cards & Service Blocks:** 1rem (16px) corner radius for a friendly, modern container feel.
- **Images:** Should feature rounded corners or, in editorial layouts, use soft organic masking (ovals) to reinforce the feminine beauty theme.

## Components

### Buttons
Primary buttons use the Muted Rose background with Deep Charcoal text for high contrast. Secondary buttons use a Muted Rose outline with a transparent background. Hover states should involve a subtle shift in saturation or a thin Gold bottom border.

### Input Fields
Inputs are styled with a soft Warm Blush background and a 1px Muted Rose border. Focus states transition the border to Subtle Gold to signal premium interaction.

### Cards
Service cards (e.g., "Facial Treatments") should utilize the Level 2 elevation style: a Warm Blush background with high-quality photography. Text within cards should be center-aligned to mimic boutique signage.

### Lists & Selection
Checkboxes and radio buttons use the Muted Rose color for "active" states. Selection lists in booking flows should have generous vertical padding (16px) to remain accessible for touch.

### Specialized Components
- **Booking Calendar:** A minimalist date-picker using Noto Serif for month headings and a soft Blush highlight for selected dates.
- **Testimonial Slider:** Large Noto Serif quotation marks in Subtle Gold, with body text centered for an editorial look.