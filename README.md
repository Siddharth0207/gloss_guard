# Guard - React Project with Tailwind CSS and Framer Motion

This is a modern React application built with TypeScript, Tailwind CSS, and Framer Motion for smooth animations.

## Project Structure

```
guard/
├── node_modules/         # Contains all installed dependencies
├── public/              # Static files that will be served as-is
│   ├── index.html      # Main HTML template
│   └── manifest.json   # Web app manifest for PWA support
├── src/                # Source code directory
│   ├── App.tsx        # Main application component
│   ├── index.css      # Global styles and Tailwind imports
│   └── index.tsx      # Application entry point
├── package.json       # Project dependencies and scripts
├── package-lock.json  # Lock file for exact dependency versions
├── postcss.config.js  # PostCSS configuration for Tailwind
├── tailwind.config.js # Tailwind CSS configuration
└── tsconfig.json      # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:

```bash
git clone <your-repository-url>
cd guard
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Key Features

### Tailwind CSS

- Utility-first CSS framework
- Responsive design out of the box
- Customizable through `tailwind.config.js`
- PurgeCSS for production builds

### Framer Motion

- Smooth animations and transitions
- Gesture support
- Variants for complex animations
- Server-side rendering support

### TypeScript

- Type safety
- Better IDE support
- Improved code maintainability
- Enhanced development experience

## Development

### Adding New Components

1. Create a new `.tsx` file in the `src` directory
2. Import necessary dependencies
3. Use Tailwind classes for styling
4. Add animations using Framer Motion when needed

Example component:

```tsx
import React from "react";
import { motion } from "framer-motion";

const MyComponent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="p-4 bg-white rounded-lg shadow-lg"
    >
      Hello World
    </motion.div>
  );
};

export default MyComponent;
```

### Styling with Tailwind

- Use utility classes directly in your components
- Customize the theme in `tailwind.config.js`
- Add custom styles in `src/index.css`

### Adding Animations

- Use Framer Motion components (`motion.div`, `motion.button`, etc.)
- Define animation variants for complex sequences
- Use gesture props for interactive animations

## Building for Production

```bash
npm run build
```

This will create an optimized production build in the `build` directory.

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
