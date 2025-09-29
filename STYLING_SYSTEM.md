# FisioActif Gym - Styling System Documentation

## Overview

This project uses a modular CSS approach with Tailwind v4, implementing a comprehensive design system based on the Figma design specifications. The styling system is organized into modular CSS files for maintainability and scalability.

## File Structure

```
src/
├── app/
│   └── globals.css          # Main CSS file with imports and CSS variables
└── styles/
    ├── typography.css       # Typography system and text styling
    ├── components.css       # Reusable component styles
    ├── patterns.css         # Design pattern utilities
    └── utilities.css        # Common utility classes
```

## Color Palette

### Primary Colors

- **Primary**: `#E31E3F` - Main red color
- **Primary Dark**: `#C11530` - Darker shade for hover states
- **Primary Light**: `#FF2C4D` - Lighter shade for accents

### Secondary Colors

- **Secondary**: `#1A1A1A` - Main black color
- **Secondary Dark**: `#000000` - Pure black
- **Secondary Light**: `#2D2D2D` - Dark gray

### Neutral Colors

- **50**: `#FAFAFA` - Lightest gray
- **100**: `#F5F5F5` - Very light gray
- **200**: `#E5E5E5` - Light gray
- **300**: `#D4D4D4` - Medium light gray
- **400**: `#A3A3A3` - Medium gray
- **500**: `#737373` - Medium dark gray
- **600**: `#525252` - Dark gray
- **700**: `#404040` - Darker gray
- **800**: `#262626` - Very dark gray
- **900**: `#171717` - Darkest gray

### Accent Colors

- **Cyan**: `#00D4D4` - Floating action buttons
- **Success**: `#10B981` - Success states
- **Warning**: `#F59E0B` - Warning states
- **Error**: `#EF4444` - Error states

## Typography System

### Fonts

- **Primary**: Inter (body text)
- **Heading**: Poppins (headings and titles)

### Text Sizes

- `text-xs` - 12px
- `text-sm` - 14px
- `text-base` - 16px
- `text-lg` - 18px
- `text-xl` - 20px
- `text-2xl` - 24px
- `text-3xl` - 30px
- `text-4xl` - 36px
- `text-5xl` - 48px
- `text-6xl` - 60px

### Font Weights

- `font-normal` - 400
- `font-medium` - 500
- `font-semibold` - 600
- `font-bold` - 700
- `font-extrabold` - 800

### Typography Classes

- `heading-1` through `heading-6` - Predefined heading styles
- `hero-title` - Large hero title with mixed colors
- `hero-subtitle` - Hero section subtitle
- `body-large`, `body-regular`, `body-small` - Body text variants
- `caption` - Small caption text

## Design Patterns

### Diagonal Slice Pattern

```css
.diagonal-slice {
  /* Creates diagonal red background */
}
.diagonal-slice-reverse {
  /* Reversed diagonal pattern */
}
.diagonal-slice-small {
  /* Smaller diagonal accent */
}
```

### Angled Corner Overlays

```css
.angled-corner {
  /* Adds angled corner to top-right */
}
.angled-corner-large {
  /* Larger angled corner */
}
.angled-corner-left {
  /* Angled corner on top-left */
}
```

### Floating Action Buttons

```css
.floating-action {
  /* Fixed position cyan circular button */
}
.floating-action-right {
  /* Positioned on right side */
}
.floating-action-small {
  /* Smaller size variant */
}
```

### Breadcrumb Navigation

```css
.breadcrumb-angled {
  /* Angled breadcrumb with red background */
}
.breadcrumb-angled-reverse {
  /* Reversed angled breadcrumb */
}
```

## Component Classes

### Buttons

```css
.btn {
  /* Base button styles */
}
.btn-primary, .btn-secondary, .btn-outline, .btn-ghost {
  /* Button variants */
}
.btn-sm, .btn-lg, .btn-xl {
  /* Button sizes */
}
```

### Cards

```css
.card {
  /* Standard card with hover effects */
}
.card-angled {
  /* Card with angled corner overlay */
}
.card-compact, .card-spacious {
  /* Card padding variants */
}
```

### Forms

```css
.input {
  /* Form input styling */
}
.label {
  /* Form label styling */
}
```

### Alerts

```css
.alert {
  /* Base alert styling */
}
.alert-success, .alert-warning, .alert-error, .alert-info {
  /* Alert variants */
}
```

### Badges

```css
.badge {
  /* Base badge styling */
}
.badge-primary, .badge-secondary, .badge-success, .badge-warning, .badge-error, .badge-cyan {
  /* Badge variants */
}
```

## Utility Classes

### Spacing

- `p-0` through `p-12` - Padding utilities
- `m-0` through `m-12` - Margin utilities
- `px-*`, `py-*`, `pt-*`, `pb-*`, `pl-*`, `pr-*` - Directional spacing
- `mx-auto` - Center horizontally

### Layout

- `flex`, `grid`, `block`, `inline-block` - Display utilities
- `flex-col`, `flex-row` - Flex direction
- `items-*`, `justify-*` - Flex alignment
- `grid-cols-*` - Grid columns
- `gap-*` - Grid/flex gap

### Colors

- `text-*` - Text color utilities
- `bg-*` - Background color utilities
- `border-*` - Border color utilities

### Sizing

- `w-*`, `h-*` - Width and height utilities
- `w-half`, `w-third`, `w-two-thirds`, `w-quarter`, `w-three-quarters` - Fractional width utilities
- `max-w-*` - Max width utilities

### Effects

- `shadow-*` - Box shadow utilities
- `rounded-*` - Border radius utilities
- `opacity-*` - Opacity utilities
- `transform`, `scale-*`, `rotate-*` - Transform utilities

## Responsive Design

The system includes responsive utilities with breakpoints:

- `sm:` - 640px and up
- `md:` - 768px and up
- `lg:` - 1024px and up

Example:

```css
.sm:text-lg { font-size: 1.125rem; }
.md:grid-cols-3 { grid-template-columns: repeat(3, 1fr); }
.lg:p-8 { padding: 2rem; }
```

## Usage Examples

### Hero Section

```jsx
<section className="hero-diagonal py-12 px-4">
  <div className="container mx-auto">
    <h1 className="hero-title-mixed mb-4">
      Welcome to <span className="text-primary">FisioActif</span> Gym
    </h1>
    <p className="hero-subtitle">
      Your premier destination for fitness and wellness
    </p>
  </div>
</section>
```

### Card with Angled Corner

```jsx
<div className="card-angled">
  <div className="card-header">
    <h3 className="card-title">Service Title</h3>
    <p className="card-subtitle">Service description</p>
  </div>
  <div className="card-body">
    <p className="body-regular">Card content goes here.</p>
  </div>
</div>
```

### Button with Loading State

```jsx
<button className="btn btn-primary" disabled>
  <span className="spinner mr-2"></span>
  Loading...
</button>
```

### Form with Validation

```jsx
<div>
  <label className="label label-required">Full Name</label>
  <input type="text" className="input" placeholder="Enter your name" />
</div>
```

## Customization

### Adding New Colors

1. Add color variables to `:root` in `globals.css`
2. Add corresponding utility classes in `utilities.css`
3. Update the `@theme` section in `globals.css`

### Adding New Components

1. Create component styles in `components.css`
2. Follow the existing naming convention
3. Include hover states and variants
4. Add responsive behavior if needed

### Adding New Patterns

1. Create pattern styles in `patterns.css`
2. Use CSS custom properties for consistency
3. Include responsive variants
4. Document usage examples

## Best Practices

1. **Use semantic class names** that describe purpose, not appearance
2. **Leverage CSS custom properties** for consistent theming
3. **Follow the modular structure** - keep related styles together
4. **Use utility classes** for common spacing and layout needs
5. **Test responsive behavior** across different screen sizes
6. **Maintain consistency** with the established design patterns
7. **Document new additions** to keep the system maintainable

## Browser Support

The styling system supports all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance Considerations

- CSS custom properties are used for theming and consistency
- Modular CSS structure allows for better tree-shaking
- Tailwind v4 provides optimized CSS output
- Font loading is optimized with `display=swap`

## Development Workflow

1. **Design Review**: Check Figma designs for new patterns
2. **CSS Variables**: Add new design tokens to `globals.css`
3. **Component Styles**: Create reusable component classes
4. **Pattern Styles**: Add design pattern utilities
5. **Utility Classes**: Add common utility classes
6. **Testing**: Verify styles work across different screen sizes
7. **Documentation**: Update this documentation with new additions

## Example Page

Visit `/example` to see all styling patterns and components in action. This page demonstrates:

- Typography hierarchy
- Color palette
- Button variants and states
- Card components
- Design patterns
- Form elements
- Alerts and badges
- Responsive behavior

The example page serves as both a showcase and a reference for implementing the design system throughout the application.
