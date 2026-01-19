# De Kloe Yachts - Exclusive Dutch Yacht Brokerage

A premium yacht brokerage website connecting distinguished families with world-class Dutch yacht builders.

## Project Overview

This website showcases De Kloe Yachts' expertise in luxury yacht brokerage, featuring:
- 340 years of maritime heritage
- Exclusive access to elite Dutch shipyards
- Comprehensive yacht brokerage services
- Expert guidance for ultra-high-net-worth clients

## Technologies

This project is built with:
- **Vite** - Next generation frontend tooling
- **TypeScript** - Type-safe JavaScript
- **React** - UI component library
- **shadcn-ui** - High-quality UI components
- **Tailwind CSS** - Utility-first CSS framework

## Getting Started

### Prerequisites
- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Installation

```sh
# Clone the repository
git clone <YOUR_GIT_URL>

# Navigate to the project directory
cd yacht-broker-launch-main

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:5173` (or the next available port).

## Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

## Project Structure

```
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── home/      # Homepage sections
│   │   ├── layout/    # Layout components (Header, Footer)
│   │   ├── shared/    # Shared components
│   │   └── ui/        # shadcn-ui components
│   ├── pages/         # Page components
│   ├── utils/         # Utility functions (SEO, etc.)
│   └── lib/           # Library configurations
├── public/            # Static assets
└── index.html         # HTML entry point
```

## SEO Optimization

This website includes comprehensive SEO optimizations:
- Dynamic meta tags per page
- JSON-LD structured data (Schema.org)
- XML sitemap
- Optimized robots.txt
- Open Graph & Twitter Card support
- Image lazy loading

For detailed SEO documentation, see [SEO_GUIDE.md](./SEO_GUIDE.md)

## Pages

- `/` - Homepage
- `/about` - About De Kloe Yachts
- `/services` - Yacht brokerage services
- `/our-story` - Company heritage and story
- `/contact` - Contact form

## Deployment

### Build for Production

```sh
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Deployment Options

You can deploy to any static hosting service:

**Netlify:**
```sh
npm run build
# Deploy the dist/ folder
```

**Vercel:**
```sh
npm run build
# Deploy the dist/ folder
```

**GitHub Pages, Cloudflare Pages, etc.**
- Build the project with `npm run build`
- Deploy the contents of the `dist/` folder

## Custom Domain Setup

1. Build and deploy the website
2. Configure your DNS settings to point to your hosting provider
3. Update the canonical URLs in `index.html` and `src/utils/seo.ts` if needed

## Contributing

For development:
1. Create a feature branch
2. Make your changes
3. Run `npm run lint` to check code quality
4. Test locally with `npm run dev`
5. Build to verify: `npm run build`
6. Submit a pull request

## License

© 2026 De Kloe Yachts. All rights reserved.
