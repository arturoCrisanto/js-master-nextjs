# Event Hub - Your Gateway to Tech Events

A modern event discovery platform built with Next.js 16, React 19, and Tailwind CSS. Discover and explore hackathons, meetups, conferences, and tech events all in one place.

## Features

- 🎯 **Curated Events** - Browse through a collection of tech conferences, hackathons, and developer meetups
- 🎨 **Modern UI** - Beautiful, responsive design with Tailwind CSS and smooth animations
- 🔍 **Event Cards** - Detailed event information with dates, locations, and times
- ⚡ **3D Graphics** - Powered by OGL for immersive visual experiences
- 🚀 **Fast Performance** - Next.js 16 with optimized React 19 rendering
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0 with React DOM
- **Styling**: Tailwind CSS 4 with PostCSS
- **UI Components**:
  - Lucide React for icons
  - Class Variance Authority for component variants
- **Graphics**: OGL for 3D rendering
- **Language**: TypeScript 5
- **Linting**: ESLint 9

## Getting Started

### Prerequisites

- Node.js 20+
- npm or your preferred package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result. The page auto-updates as you edit files.

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the application for production
- `npm start` - Run the production build
- `npm run lint` - Run ESLint

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page with featured events
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── EventCard.tsx      # Event listing card component
│   ├── ExploreBtn.tsx     # Explore button component
│   ├── Navbar.tsx         # Navigation bar
│   ├── LightRays.tsx      # 3D light effects component
│   └── LightRays.css      # Light effects styles
├── lib/                   # Utility functions and constants
│   ├── constants.ts       # Event data and types
│   └── utils.ts           # Helper utilities
└── public/                # Static assets
    ├── icons/             # Icon files
    └── images/            # Event images
```

## License

This project is private.
