# Product Configurator

A modern, dark-themed product configurator with a 70% canvas and 30% configuration panel layout.

## Features

- **Split Layout**: 70% canvas area for product visualization, 30% configuration panel
- **Dark Theme**: Elegant dark interface with golden-yellow accent colors
- **Interactive Elements**:
  - Top navigation tabs (Adornment, Form & Fit, Experience)
  - Feature selection buttons (Gems, Cuts, Color, Crown, Cascade)
  - Filter buttons (Precious, Semi-Precious, Organic, Man-Made)
  - 3x3 content grid for option selection

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

### Build

Create a production build:

```bash
npm run build
```

### Preview

Preview the production build:

```bash
npm run preview
```

## Project Structure

```
configurator/
├── src/
│   ├── components/
│   │   ├── Configurator.jsx
│   │   ├── Canvas.jsx
│   │   └── ConfigurationPanel.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## Customization

You can customize the configurator by:

- Modifying the feature buttons, filters, and tabs in `ConfigurationPanel.jsx`
- Adding content to the canvas area in `Canvas.jsx`
- Adjusting colors and styling in the CSS files
- Populating the grid items with actual product options


