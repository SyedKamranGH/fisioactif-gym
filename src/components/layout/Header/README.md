# Refactored Header Components

A fully responsive header component system following SOLID principles with maximum reusability and clean code architecture.

## 🏗️ Architecture Overview

The header is split into smaller, focused components following the Single Responsibility Principle:

### Component Structure

```
Header/
├── index.jsx              # Main Header component (orchestrator)
├── TopInfoBar.jsx         # Contact information bar
├── Logo.jsx              # Logo component
├── NavigationLinks.jsx   # Navigation menu items
├── ActionButtons.jsx     # Search and Consulta buttons
├── MobileMenu.jsx        # Mobile navigation menu
├── Header.module.css     # CSS modules for styling
└── README.md            # This documentation
```

## 🎯 SOLID Principles Implementation

### 1. Single Responsibility Principle (SRP)

- **TopInfoBar**: Only handles contact information display
- **Logo**: Only handles logo rendering
- **NavigationLinks**: Only handles navigation menu items
- **ActionButtons**: Only handles search and consulta buttons
- **MobileMenu**: Only handles mobile navigation

### 2. Open/Closed Principle (OCP)

- Components accept props for customization
- Easy to extend without modifying existing code
- CSS modules allow styling extensions

### 3. Liskov Substitution Principle (LSP)

- All components can be replaced with compatible implementations
- Props interfaces are consistent and predictable

### 4. Interface Segregation Principle (ISP)

- Components only receive props they actually use
- Clean, focused interfaces for each component

### 5. Dependency Inversion Principle (DIP)

- Components depend on abstractions (props) not concrete implementations
- Easy to test and mock

## 📱 Responsive Design

### Desktop (md+)

- Full navigation visible
- Search and Consulta buttons visible
- Logo properly positioned
- Slanted navigation bar

### Tablet (sm-md)

- Reduced spacing between components
- Search and Consulta buttons visible
- Navigation links hidden on smaller tablets

### Mobile (<sm)

- Hamburger menu icon
- Vertical mobile menu with:
  - Logo at the top
  - Navigation items as sidebar
  - Search icon and Consulta button at bottom

## 🎨 Styling Approach

### CSS Modules

- `Header.module.css` contains all header-specific styles
- Scoped styles prevent conflicts
- Responsive breakpoints defined in CSS
- Tailwind classes for utility styling

### Global CSS Variables

- Uses existing design system colors
- Consistent spacing and typography
- Maintains brand consistency

## 🔧 Component APIs

### TopInfoBar

```jsx
<TopInfoBar />
```

- No props required
- Displays contact information
- Fully responsive

### Logo

```jsx
<Logo className="custom-class" />
```

- Optional className prop
- Configurable size and styling

### NavigationLinks

```jsx
<NavigationLinks 
  items={navigationItems} 
  className="custom-styles" 
/>
```

- `items`: Array of navigation items
- `className`: Optional custom styling

### ActionButtons

```jsx
<ActionButtons 
  onSearchClick={handleSearch}
  onConsultaClick={handleConsulta}
  className="custom-styles"
/>
```

- `onSearchClick`: Search button handler
- `onConsultaClick`: Consulta button handler
- `className`: Optional custom styling

### MobileMenu

```jsx
<MobileMenu
  isOpen={isMobileMenuOpen}
  navigationItems={items}
  onItemClick={handleItemClick}
  onSearchClick={handleSearch}
  onConsultaClick={handleConsulta}
/>
```

- `isOpen`: Controls menu visibility
- `navigationItems`: Array of navigation items
- `onItemClick`: Handler for menu item clicks
- `onSearchClick`: Search button handler
- `onConsultaClick`: Consulta button handler

## 🚀 Usage

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

## 🧪 Testing

Each component can be tested independently:

- Mock props easily
- Test individual functionality
- Isolated component behavior
- Easy to write unit tests

## 🔄 Maintenance

- Easy to modify individual components
- Clear separation of concerns
- Reusable across different pages
- Consistent styling approach
- Scalable architecture

## 📊 Performance

- Code splitting at component level
- Lazy loading capabilities
- Minimal re-renders
- Optimized CSS modules
- Clean dependency tree
