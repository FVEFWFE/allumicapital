# Quadrant PE Website Clone - Design Guidelines

## Design Approach
**Reference-Based Approach**: Corporate private equity aesthetic inspired by professional financial services websites (Blackstone, KKR, Carlyle) with emphasis on credibility, sophistication, and portfolio prominence.

## Core Design Principles
1. **Corporate Sophistication**: Premium, institutional feel with restrained elegance
2. **Portfolio-First**: Investment companies are the hero—showcase them prominently
3. **Trust & Credibility**: Clean layouts, ample whitespace, professional imagery
4. **Content Hierarchy**: Clear visual separation between hero messaging, philosophy, and portfolio

---

## Typography

### Font Stack
- **Primary**: "Inter" or "DM Sans" (Google Fonts) - clean, modern sans-serif
- **Secondary**: System font stack for body text

### Type Scale
- Hero headline: 3.5rem (desktop) / 2rem (mobile), font-weight 600
- Section headings: 2.5rem (desktop) / 1.75rem (mobile), font-weight 600
- Subsection headings: 1.5rem, font-weight 500
- Body text: 1.125rem, font-weight 400, line-height 1.7
- Navigation: 0.9375rem, font-weight 500, letter-spacing 0.5px

---

## Layout System

### Spacing Scale
Use Tailwind units: **4, 6, 8, 12, 16, 20, 24** for consistent rhythm
- Section padding: `py-20` (desktop), `py-12` (mobile)
- Container max-width: `max-w-7xl`
- Content blocks: `space-y-8` to `space-y-16`

### Grid Structure
- Portfolio grid: 6 columns (desktop), 3-4 (tablet), 2 (mobile)
- Two-column content sections for text+image layouts

---

## Component Library

### Navigation
- Fixed header with transparent-to-solid transition on scroll
- Logo left-aligned, navigation items right-aligned
- Simple horizontal menu (About, Funds & Investments, Contact)
- Mobile: Hamburger menu with slide-in drawer

### Hero Section
- **Full viewport height (90vh)** with video thumbnail background image
- Overlay gradient for text readability (dark gradient from bottom)
- Centered headline and supporting text with generous whitespace
- Single primary CTA button ("Our Story") with blurred background
- Image: Professional business meeting or office environment showing collaboration

### Perspective/About Section
- Two-column layout (50/50 split on desktop, stacked on mobile)
- Large feature image on left (office/team photo)
- Content on right: Section label ("Perspective"), heading, descriptive paragraph, CTA link
- Generous padding between columns (`gap-16`)

### Portfolio Grid Section
- Section header: "Funds & Investments" with subtitle and "View All" CTA
- Logo grid: 6 columns desktop, responsive down to 2 on mobile
- Each logo: Grayscale by default, full color on hover
- Contained in cards with subtle borders: `border border-neutral-200`
- Equal height cells with centered logos: `aspect-square` containers
- Padding: `p-6` per cell

### Footer
- Three-column layout: Company info, Quick links, Contact
- Newsletter signup form
- Social media icons
- Copyright and legal links
- Subtle top border separation

---

## Images

### Required Images
1. **Hero Background**: High-quality business meeting/collaboration scene - professionals in modern office setting, warm natural lighting (aspect ratio 16:9, full bleed)
2. **Perspective Section**: Office environment or team working together - authentic, candid style (portrait orientation preferred)
3. **Portfolio Logos**: 60+ company logos - use placeholder logo images in grid, grayscale treatment

### Image Treatment
- Hero: Subtle dark overlay (opacity 40%) for text contrast
- Section images: No overlay, natural presentation
- All images: High resolution (min 1920px wide for hero), optimized for web

---

## Visual Hierarchy

### Section Structure
1. Hero (90vh) - Full impact entry
2. Perspective (auto height, ~600px min) - Philosophy/values
3. Portfolio Grid (auto height) - Investment showcase with 60+ logos
4. Footer - Comprehensive links and contact

### Emphasis Strategy
- Hero: Largest text, centered, dramatic
- Headings: Bold weight, generous spacing below
- CTAs: Medium prominence, not overly aggressive
- Portfolio: Grid dominates, logos are stars

---

## Interactions & States

### Micro-interactions
- Logo hover: Grayscale to color transition (0.3s ease)
- Navigation links: Subtle underline on hover
- CTA buttons: Scale slightly on hover (transform: scale(1.02))
- Smooth scroll to sections when clicking navigation

### No Complex Animations
Avoid parallax, scroll-triggered animations, or excessive motion. Keep interactions minimal and professional.

---

## Accessibility
- High contrast text (WCAG AA minimum)
- Semantic HTML structure (nav, main, section, footer)
- Alt text for all images
- Focus states for keyboard navigation
- Minimum touch target size: 44px × 44px