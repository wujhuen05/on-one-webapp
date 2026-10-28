---
name: Academic Rhythm
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0058be'
  on-secondary: '#ffffff'
  secondary-container: '#2170e4'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#23005c'
  on-tertiary-container: '#9466ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d8e2ff'
  secondary-fixed-dim: '#adc6ff'
  on-secondary-fixed: '#001a42'
  on-secondary-fixed-variant: '#004395'
  tertiary-fixed: '#e9ddff'
  tertiary-fixed-dim: '#d0bcff'
  on-tertiary-fixed: '#23005c'
  on-tertiary-fixed-variant: '#5516be'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.025em
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-sm:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 18px
    letterSpacing: 0em
  label-md:
    fontFamily: Inter
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.005em
  label-sm:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '600'
    lineHeight: 14px
    letterSpacing: 0.02em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1.25rem
  gutter-desktop: 1.75rem
  margin: 1rem
  margin-desktop: 2rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 0.75rem
  space-lg: 1.25rem
  space-xl: 2rem
---

## Brand & Style

This design system serves focused university students navigating demanding academic terms. The visual philosophy blends the structured velocity of Linear with the serene, spatial clarity of Notion and Todoist. The interface acts as calm cognitive architecture: quiet enough to study beside, crisp enough to parse complex assignment schedules and syllabi at a single glance.

The aesthetic follows an **Elevated Modern Minimalist** approach. High-contrast typography sits atop clean, airy canvas surfaces, while functional color tags provide high-efficiency semantic anchoring. Interactions evoke tactility without visual noise, leaning into refined micro-borders, purposeful whitespace, and precise optical alignment.

## Colors

The palette employs a restrained, paper-clean tonal base accented by high-clarity academic category tags.

### Base Surfaces & Content
- **Canvas Base:** `#F8FAFC` (Slate 50) for outer canvas and neutral page backgrounds.
- **Surface Elevation:** `#FFFFFF` for primary cards, schedule boards, and modal sheets.
- **Surface Subdued:** `#F1F5F9` (Slate 100) for input fills, hover backgrounds, and segmented tracks.
- **Border Default:** `#E2E8F0` (Slate 200) for structural lines and card boundaries.
- **Border Subtle:** `#F1F5F9` (Slate 100) for subtle internal dividers.
- **Text Primary:** `#0F172A` (Slate 900) for primary headings, assignment titles, and active states.
- **Text Secondary:** `#334155` (Slate 700) for body reading, meta-descriptions, and course codes.
- **Text Muted:** `#64748B` (Slate 500) for timestamps, unselected tabs, and secondary labels.

### Course & Context Categorization Tokens
Each subject tag is balanced in luminance to prevent visual dominance while maintaining instantaneous recognition:
- **Organizational Psychology:** Primary `#3B82F6` | Subtle Tint `#EFF6FF` | Border `#BFDBFE`
- **Social Psychology:** Primary `#10B981` | Subtle Tint `#ECFDF5` | Border `#A7F3D0`
- **Group Therapy:** Primary `#8B5CF6` | Subtle Tint `#F5F3FF` | Border `#DDD6FE`
- **Design Psychology:** Primary `#F97316` | Subtle Tint `#FFF7ED` | Border `#FED7AA`
- **Personal / Life:** Primary `#64748B` | Subtle Tint `#F8FAFC` | Border `#E2E8F0`
- **Urgent / Exam Deadlines:** Primary `#EF4444` | Subtle Tint `#FEF2F2` | Border `#FECACA`

## Typography

The type system prioritizes structural hierarchy and rapid scanning over decorative display. Inter is deployed across all contexts, pairing naturally with Korean web-font fallbacks (such as Pretendard) via system fallbacks `(-apple-system, BlinkMacSystemFont, "Pretendard", "Inter", sans-serif)`.

Negative letter tracking is applied consistently to medium and large display headings to preserve tightness and modern editorial cadence. Compact label typography (`label-sm`) enforces uppercase or high-weight pill presentations for course indicators and status tags.

## Layout & Spacing

The layout is built on a responsive 12-column adaptive grid that transitions between compact mobile views, focused split-views on tablet, and widescreen multi-pane calendar dashboards on desktop.

- **Mobile (< 768px):** Single-column stack with persistent bottom navigation. Canvas margins are locked to `margin` (16px), relying on unified vertical flow.
- **Tablet (768px – 1023px):** 8-column layout. Sidebar navigation collapses to an icon bar; timetable and day task views share a 5:3 column split.
- **Desktop (≥ 1024px):** 12-column layout. A 240px persistent tree-sidebar, an 8-column primary timeline/agenda workboard, and a 4-column dynamic urgency and inspection pane. Canvas margins scale to `margin-desktop` (32px).

## Elevation & Depth

This design system avoids heavy drop shadows, relying instead on high-precision low-contrast borders combined with ultra-diffused atmospheric ambient shadows.

- **Level 0 (Flat Canvas):** `#F8FAFC`, zero shadow, no outline.
- **Level 1 (Card & Board Tile):** `#FFFFFF` background, solid border `1px solid #E2E8F0`, shadow `0 1px 2px 0 rgba(15, 23, 42, 0.04)`.
- **Level 2 (Hover & Active Drag):** Solid border `1px solid #CBD5E1`, shadow `0 4px 12px -2px rgba(15, 23, 42, 0.08), 0 2px 6px -1px rgba(15, 23, 42, 0.04)`.
- **Level 3 (Urgent Plan Floating Widget & Modals):** `#FFFFFF` surface, `1px solid #E2E8F0`, shadow `0 12px 32px -4px rgba(15, 23, 42, 0.12), 0 4px 8px -2px rgba(15, 23, 42, 0.04)`.
- **Glass Underlay (Bottom Nav & Floating HUD):** `rgba(255, 255, 255, 0.85)` surface with `backdrop-filter: blur(12px)` and subtle border `1px solid rgba(226, 232, 240, 0.8)`.

## Shapes

The shape hierarchy is soft and deliberate. Small control items (checkboxes, badges) use tighter radiuses, while primary cards and interactive modals employ generous curves to evoke friendly, tactile approachability.

- **Micro Controls (Inputs, small buttons, badges):** `0.5rem` (8px).
- **Cards, Panels & Task Modules:** `rounded-lg` at `1rem` (16px) or `rounded-xl` at `1.5rem` (24px) for prominent hero widgets.
- **Course Status Pills & Floating Actions:** Full pill styling (`9999px`) to create clear differentiation against rectilinear time-grids.

## Components

### Buttons
- **Primary:** Background `#0F172A`, text `#FFFFFF`, hover `#1E293B`, active `#334155`. Height 40px (desktop) / 44px (touch). Border-radius `0.5rem`.
- **Secondary / Ghost:** Background transparent, text `#334155`, border `1px solid #E2E8F0`. Hover brings background `#F8FAFC` and border `#CBD5E1`.
- **Subject Accent Action:** Background matching category tint (e.g., `#EFF6FF`), text `#3B82F6`, border `1px solid #BFDBFE`.

### Category Chips & Badges
- Constructed with `label-sm` font.
- Displays a `6px` solid color circular dot followed by the subject name.
- Background uses the category’s 50-tint tone, text uses the high-contrast 700/800 counterpart, wrapped in an extra-fine `1px` translucent matching border.

### Task Cards
- Built on Surface Level 1 with 16px padding.
- Left-aligned custom circular checkbox, followed by a flex column containing Title (`body-md`, semibold), assignment time badge, and subject chip.
- Finished with a subtle 3px vertical accent indicator running along the left interior border, color-coded by subject.

### Timeline Node & Line
- A central vertical path styled with `2px solid #E2E8F0`.
- Nodes are `12px` circular indicators with a `2px` white border ring. An active or current-hour node pulses with an outer glow using the subject’s primary hue.
- Connectors bridge between timeline nodes with smooth vertical rhythm.

### Urgent Plan Floating Widget
- Anchored to the bottom-right on desktop or above the tab bar on mobile.
- Features an alert-tinted base (`#FEF2F2`) with an `#EF4444` accent border.
- Houses urgent D-day countdown counters, high-visibility examination checklists, and rapid-complete triggers. Elevated at Level 3.

### Bottom Navigation Bar (Mobile / Tablet)
- Docked fixed to bottom screen with safe area padding.
- Uses the frosted glass effect: `rgba(255, 255, 255, 0.85)` with `12px` backdrop blur and `1px` top border in `#E2E8F0`.
- 4 primary destinations (Today, Calendar, Courses, Inbox) with centered icon and micro-label; active tab indicates an active dot in `#0F172A`.

### Input Fields & Checkboxes
- **Input:** 40px height, background `#F8FAFC`, border `1px solid #E2E8F0`, focus state transitions to `#FFFFFF` surface with `1px solid #0F172A` and `0 0 0 1px #0F172A`.
- **Checkboxes:** Smooth rounded `18px` circles with `1.5px solid #CBD5E1`. Checked state fills `#0F172A` with an animated white check vector, triggering a clean strikethrough transition on associated task text.