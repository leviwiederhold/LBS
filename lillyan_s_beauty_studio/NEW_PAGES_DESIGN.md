---
name: Clinical Elegance
colors:
  surface: '#fff8f7'
  surface-dim: '#e7d6d6'
  surface-bright: '#fff8f7'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#fff0f0'
  surface-container: '#fbeae9'
  surface-container-high: '#f5e4e4'
  surface-container-highest: '#efdfde'
  on-surface: '#221a1a'
  on-surface-variant: '#514443'
  inverse-surface: '#382e2e'
  inverse-on-surface: '#feedec'
  outline: '#837373'
  outline-variant: '#d6c2c1'
  surface-tint: '#825151'
  primary: '#724444'
  on-primary: '#ffffff'
  primary-container: '#8d5b5b'
  on-primary-container: '#ffe2e1'
  inverse-primary: '#f5b7b6'
  secondary: '#655d54'
  on-secondary: '#ffffff'
  secondary-container: '#ede0d5'
  on-secondary-container: '#6b635a'
  tertiary: '#51504e'
  on-tertiary: '#ffffff'
  tertiary-container: '#6a6866'
  on-tertiary-container: '#ece8e5'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#f5b7b6'
  on-primary-fixed: '#331012'
  on-primary-fixed-variant: '#673a3b'
  secondary-fixed: '#ede0d5'
  secondary-fixed-dim: '#d0c5ba'
  on-secondary-fixed: '#201b14'
  on-secondary-fixed-variant: '#4d463e'
  tertiary-fixed: '#e5e2df'
  tertiary-fixed-dim: '#c9c6c3'
  on-tertiary-fixed: '#1c1b1a'
  on-tertiary-fixed-variant: '#484745'
  background: '#fff8f7'
  on-background: '#221a1a'
  surface-variant: '#efdfde'
typography:
  display-lg:
    fontFamily: Noto Serif
    fontSize: 48px
    fontWeight: '400'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1:
    fontFamily: Noto Serif
    fontSize: 32px
    fontWeight: '500'
    lineHeight: '1.3'
  h2:
    fontFamily: Noto Serif
    fontSize: 24px
    fontWeight: '500'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Manrope
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Manrope
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Manrope
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.08em
  data-tabular:
    fontFamily: Manrope
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 8px
  container-padding: 32px
  gutter: 24px
  form-stack: 20px
  section-gap: 48px
---

## Brand & Style
The design system establishes a "Clinical Elegance" aesthetic, bridging the gap between high-end beauty artistry and medical-grade professionalism. The brand personality is nurturing yet authoritative, catering to clients who value both aesthetic results and meticulous safety protocols. 

The visual style is a hybrid of **Minimalism** and **Tactile** design. It utilizes heavy whitespace and a restricted, warm palette to maintain a feminine softness, while employing sharp, intentional borders and high-contrast form elements to communicate the "medical-style" rigor required for intake forms and client dashboards. The UI should evoke a sense of calm, trust, and organized sophistication.

## Colors
The palette is rooted in organic, skin-toned warmth. 
- **Primary (Muted Rose):** Used for key actions, brand moments, and active interactive states in the booking flow.
- **Secondary (Warm Blush/Cream):** Used for container backgrounds and subtle section differentiation.
- **Tertiary (Ivory Cream):** The primary surface color, providing a soft alternative to pure white to reduce eye strain during long intake processes.
- **Neutral (Deep Espresso):** Used for all primary text and high-contrast borders to ensure maximum legibility and a professional, "ink-on-paper" medical feel.
- **Interactive States:** Selected time slots and active filters utilize a desaturated version of the primary rose to indicate focus without visual clutter.

## Typography
The system utilizes a dual-font strategy to balance beauty with clinical precision. **Noto Serif** provides the editorial, high-end studio feel for headlines and brand statements. **Manrope** is used for all functional interfaces, dashboards, and medical forms due to its exceptional legibility and modern, trustworthy geometric structure. For medical intake forms, uppercase labels with increased letter spacing are used to clearly define field categories.

## Layout & Spacing
The design system employs a **Fixed Grid** for dashboards and a centered **Container-based layout** for intake forms to ensure focus.
- **Dashboards:** Use a 12-column grid with generous 24px gutters to prevent information density from feeling overwhelming.
- **Intake Forms:** Use a single-column, max-width (640px) layout to guide the client through clinical questions linearly.
- **Booking UI:** Implements a 7-column flex-grid for calendar views, prioritizing clear hit-areas for time slots (minimum 48px height).

## Elevation & Depth
To maintain a professional "trusted" feel, elevation is primarily conveyed through **Tonal Layers** rather than heavy shadows. 
- **Surface Level 0:** The main background in Ivory Cream.
- **Surface Level 1 (Cards/Forms):** White backgrounds with a subtle 1px border in the Warm Blush tone (#E8DCD1).
- **Surface Level 2 (Modals/Popovers):** Soft, ambient shadows (0px 10px 30px rgba(45, 36, 36, 0.05)) to signify temporary focus over the dashboard.
- **Active States:** In the booking flow, selected items are elevated by a color shift to the Primary Rose rather than a physical shadow, maintaining a clean, flat aesthetic.

## Shapes
A **Soft (0.25rem)** roundedness is applied globally. This subtle rounding retains a friendly, approachable edge without appearing "bubbly" or unprofessional. 
- **Input Fields:** Utilize a 4px corner radius to mimic medical record standard forms.
- **Buttons:** Use a 4px radius for a structured, architectural feel.
- **Profile Avatars:** Circular (pill) to provide a soft counterpoint to the otherwise rectangular grid of the dashboard.

## Components
- **Medical Input Fields:** High-contrast labels in Deep Espresso. Inputs feature a 1px solid border that darkens on focus. Error states use a muted terracotta instead of bright red to remain within the brand palette while being clearly legible.
- **Booking Slots:** Rectangular chips. *Default:* Ivory background with Blush border. *Selected:* Primary Rose background with white text. *Unavailable:* Strikethrough text with 40% opacity.
- **Client Dashboard Cards:** Clean white surfaces with Noto Serif headers. Data points are presented in Manrope with a bold weight for the value and a light-caps label for the category.
- **Status Badges:** Small, low-saturation pills (e.g., "Confirmed," "Pending") used in client history tables to indicate appointment status without distracting from the primary data.
- **Steppers:** Minimalist line-and-dot progress indicators for multi-page intake forms, using the Primary Rose for the current step and Warm Blush for remaining steps.