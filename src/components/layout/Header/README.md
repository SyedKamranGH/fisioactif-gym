# Header Component

A responsive header component designed for the Fisio Actif website, following SOLID principles and modern React best practices.

## Features

- **Two-tier design**: Top information bar and main navigation
- **Responsive design**: Mobile-first approach with hamburger menu
- **Custom components integration**: Uses existing Button and Input components
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **TypeScript ready**: Full type safety support

## Structure

### Top Information Bar

- Email contact with icon
- Working hours with clock icon
- Phone number with phone icon
- Dark background with white text

### Main Navigation Bar

- Circular logo (Fisio Actif)
- Navigation links with active state indication
- Search button (custom slanted design)
- Consulta button (custom slanted design)
- Mobile hamburger menu

## Usage

```jsx
import Header from "@/components/layout/Header";

function App() {
  return (
    <div>
      <Header />
      {/* Your page content */}
    </div>
  );
}
```

## Props

The Header component accepts no props and manages its own state internally.

## Mobile Responsiveness

- **Desktop (md+)**: Full navigation visible
- **Tablet (sm-md)**: Search and Consulta buttons visible
- **Mobile (<sm)**: Hamburger menu with collapsible navigation

## Styling

Uses Tailwind CSS classes and custom CSS variables defined in `globals.css`:

- Primary color: `#e31e3f` (red)
- Neutral colors: Various shades of gray
- Custom spacing and typography scales

## Dependencies

- `next/image` - Optimized image loading
- `lucide-react` - Icons
- `@radix-ui/themes` - Button component base
- Custom Button and Input components

## Accessibility

- Proper semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Focus management for mobile menu
- Screen reader friendly

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- Responsive design works on all screen sizes
