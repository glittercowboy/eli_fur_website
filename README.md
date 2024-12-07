# Eli & Fur Official Website

A sophisticated, dual-natured website for electronic music duo Eli & Fur, featuring a unique split-personality design that showcases both their club and studio personas.

## Features

- Split-personality design (Club vs Studio modes)
- Complex animations and transitions
- Audio integration and visualization
- High-performance 3D graphics
- Mobile-first responsive design

## Technology Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Three.js (3D graphics)
- Web Audio API
- Prismic CMS
- Zustand (state management)

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm 9.0.0 or later

### Installation

1. Clone the repository
```bash
git clone [repository-url]
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build

To create a production build:
```bash
npm run build
```

To start the production server:
```bash
npm start
```

## Project Structure

```
src/
├── app/                 # Next.js app directory
├── components/         
│   ├── ui/             # Reusable UI components
│   ├── layout/         # Layout components
│   ├── audio/          # Audio-related components
│   └── three/          # Three.js components
├── lib/
│   ├── prismic/        # Prismic CMS integration
│   ├── audio/          # Audio processing utilities
│   └── animations/     # Animation utilities
├── styles/             # Global styles
├── hooks/              # Custom React hooks
├── contexts/           # React contexts
├── types/              # TypeScript types
└── utils/              # Utility functions
```

## Development Standards

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper error boundaries
- Write meaningful component and function names
- Document complex logic with comments

### Performance

- Implement code splitting
- Optimize asset loading
- Use proper caching strategies
- Monitor and optimize Core Web Vitals

### Testing

- Write unit tests for utilities
- Create integration tests for key features
- Implement visual regression testing
- Monitor performance metrics

## License

All rights reserved © Eli & Fur
