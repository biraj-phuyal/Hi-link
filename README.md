# HiLink

HiLink is a responsive travel and camping landing page built with Next.js, React, TypeScript, and Tailwind CSS. The project presents a polished product-style interface for an outdoor navigation app, with sections for hero content, campsite discovery, feature highlights, guided route previews, and mobile app download calls to action.

This project was built to demonstrate frontend implementation skills, component-based UI development, responsive layouts, and attention to visual detail.

## What This Project Shows

- Modern React development with reusable components
- Next.js App Router project structure
- TypeScript-based component props and project configuration
- Responsive layouts across mobile, tablet, and desktop breakpoints
- Tailwind CSS utility styling with custom design tokens
- Optimized image usage through `next/image`
- Clean section-based landing page architecture

## Features

- Responsive navigation bar and footer
- Hero section with product messaging, rating display, and action buttons
- Horizontal campsite showcase with custom background imagery
- Guided route preview section with location and travel details
- Feature grid highlighting offline maps, scheduling, augmented reality, and new locations
- App download section for iOS and Android
- Centralized content constants for navigation, features, footer links, and social links

## Tech Stack

- **Framework:** Next.js 15
- **UI Library:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Tooling:** ESLint, PostCSS, npm

## Project Structure

```text
Hi-link/
├── public/                 # Static assets and icons
├── src/
│   ├── app/                # App Router layout, page, and global styles
│   ├── components/         # Reusable UI sections and controls
│   └── constants/          # Navigation, feature, footer, and social data
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## Getting Started

Clone the repository and install dependencies:

```bash
npm install
```

Start the local development server:

```bash
npm run dev
```

Open the app in your browser:

```text
http://localhost:3000
```

## Available Scripts

```bash
npm run dev
```

Runs the development server with Turbopack.

```bash
npm run build
```

Creates a production build.

```bash
npm run start
```

Starts the production server after building.

```bash
npm run lint
```

Runs the configured lint command.
