# SEO Implementation Guide - De Kloe Yachts

## Overview
This document outlines the SEO optimizations implemented for the De Kloe Yachts website and provides guidelines for maintaining and improving SEO performance.

## Implemented Features

### 1. Dynamic Meta Tags (`src/utils/seo.ts`)

#### `useSEO` Hook
Dynamically updates page meta tags for each route:
- Page title
- Meta description
- Keywords
- Open Graph tags (Facebook, LinkedIn)
- Twitter Card tags
- Canonical URLs

**Usage Example:**
```tsx
import { useSEO } from '@/utils/seo';

const MyPage = () => {
  useSEO({
    title: 'My Page | De Kloe Yachts',
    description: 'Description of my page',
    keywords: 'keyword1, keyword2, keyword3',
    url: 'https://dekloeyachts.com/my-page',
  });

  return <div>Page content</div>;
};
```

#### `useStructuredData` Hook
Implements JSON-LD structured data for search engines:
- Organization schema
- LocalBusiness schema
- WebPage schema
- Service schema
- BreadcrumbList schema

**Usage Example:**
```tsx
import { useStructuredData } from '@/utils/seo';

useStructuredData([
  {
    type: 'WebPage',
    data: {
      '@id': 'https://dekloeyachts.com/page#webpage',
      url: 'https://dekloeyachts.com/page',
      name: 'Page Title',
      description: 'Page description',
    },
  },
]);
```

### 2. Sitemap (`public/sitemap.xml`)

XML sitemap for search engine crawlers listing all pages:
- Homepage (priority: 1.0)
- Services (priority: 0.9)
- About (priority: 0.8)
- Contact (priority: 0.8)
- Our Story (priority: 0.7)

**Update Frequency:**
- Update `lastmod` dates when making significant changes
- Add new pages to sitemap when created
- Submit updated sitemap to Google Search Console

### 3. Robots.txt (`public/robots.txt`)

Optimized robots.txt with:
- Allow all pages for crawling
- Sitemap reference
- Crawl-delay directive
- Ready for future disallow rules

### 4. SEO Image Component (`src/components/ui/SEOImage.tsx`)

Optimized image component with:
- Lazy loading by default
- Alt text enforcement
- Error handling with fallback
- Priority loading option for above-the-fold images

**Usage Example:**
```tsx
import { SEOImage } from '@/components/ui/SEOImage';

<SEOImage
  src="/path/to/image.jpg"
  alt="Descriptive alt text for accessibility and SEO"
  priority={false} // Set true for above-the-fold images
  className="w-full h-auto"
/>
```

### 5. Enhanced HTML Head (`index.html`)

Comprehensive meta tags including:
- Keywords meta tag
- Robots directives
- Geo tags (Netherlands)
- Language alternates (en, nl)
- Enhanced Open Graph tags with image dimensions
- DNS prefetch for performance
- Canonical URL

## Page-Specific SEO

### Homepage (`/`)
- **Title:** De Kloe Yachts | Exclusive Dutch Yacht Brokerage
- **Focus Keywords:** yacht brokerage, Dutch yachts, superyacht, luxury yachts
- **Structured Data:** Organization, LocalBusiness, WebPage

### About (`/about`)
- **Title:** About De Kloe Yachts | Expert Yacht Brokerage
- **Focus Keywords:** yacht broker, Dutch yacht builder, maritime heritage
- **Structured Data:** WebPage

### Services (`/services`)
- **Title:** Yacht Brokerage Services | De Kloe Yachts
- **Focus Keywords:** yacht purchase, builder selection, yacht design
- **Structured Data:** Service, WebPage

### Our Story (`/our-story`)
- **Title:** Our Story | De Kloe Yachts Heritage
- **Focus Keywords:** yacht heritage, maritime history, Dutch sailing
- **Type:** Article (for blog-like content)
- **Structured Data:** WebPage

### Contact (`/contact`)
- **Title:** Contact De Kloe Yachts | Get in Touch
- **Focus Keywords:** contact yacht broker, yacht inquiry
- **Structured Data:** WebPage

## SEO Best Practices

### Content Guidelines
1. **Unique Titles:** Each page must have a unique, descriptive title (50-60 characters)
2. **Meta Descriptions:** Write compelling descriptions (150-160 characters)
3. **Keywords:** Target 3-5 relevant keywords per page
4. **Headers:** Use semantic HTML (h1, h2, h3) in logical hierarchy
5. **Alt Text:** All images must have descriptive alt text

### Technical SEO
1. **Mobile-First:** Ensure responsive design (already implemented with Tailwind)
2. **Page Speed:**
   - Lazy load images
   - Minimize JavaScript bundles
   - Use code splitting
3. **URL Structure:** Keep URLs clean and descriptive (already implemented)
4. **HTTPS:** Ensure SSL certificate is active in production
5. **Canonical URLs:** Prevent duplicate content issues

### Schema.org Structured Data
Always include relevant structured data:
- Organization (global)
- LocalBusiness (global)
- WebPage (all pages)
- Service (services page)
- Article (blog posts, stories)
- BreadcrumbList (navigation)

## Monitoring & Maintenance

### Google Search Console
1. Submit sitemap: `https://dekloeyachts.com/sitemap.xml`
2. Monitor crawl errors
3. Check mobile usability
4. Review search performance metrics

### Analytics Setup
Track key metrics:
- Organic search traffic
- Keyword rankings
- Page load times
- Bounce rates
- Conversion rates

### Regular Updates
- **Monthly:** Review and update meta descriptions
- **Quarterly:** Audit keywords and update content
- **Bi-annually:** Review structured data implementation
- **After major changes:** Update sitemap and resubmit

## Keyword Strategy

### Primary Keywords
- Yacht brokerage
- Dutch yacht builders
- Superyacht services
- Luxury yacht broker
- Motor yacht purchase

### Secondary Keywords
- Custom yacht builder Netherlands
- Yacht construction guidance
- Dutch shipyard access
- Yacht project management
- Ultra-high-net-worth yacht services

### Long-Tail Keywords
- How to buy a custom superyacht
- Best Dutch yacht builders
- Yacht brokerage services Netherlands
- Luxury motor yacht purchase guide

## Performance Optimization

### Core Web Vitals
Monitor and optimize:
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### Image Optimization
- Use WebP format when possible
- Compress images before upload
- Use SEOImage component for automatic optimization
- Set appropriate width/height attributes

### JavaScript Optimization
- Code splitting with React lazy loading
- Tree shaking for unused code
- Defer non-critical scripts

## Future Enhancements

### Planned Improvements
1. **Blog Section:** Add yacht industry insights for content marketing
2. **Rich Snippets:** Implement FAQ schema for common questions
3. **Video SEO:** Add VideoObject schema for yacht tours
4. **Multi-language:** Full i18n implementation for Dutch and English
5. **Local SEO:** Enhanced location-based optimization

### Advanced Features
- Progressive Web App (PWA) capabilities
- AMP (Accelerated Mobile Pages) for key content
- Voice search optimization
- E-A-T (Expertise, Authoritativeness, Trustworthiness) improvements

## Resources

### SEO Tools
- [Google Search Console](https://search.google.com/search-console)
- [Google Analytics](https://analytics.google.com)
- [Schema.org](https://schema.org)
- [PageSpeed Insights](https://pagespeed.web.dev)

### Validation Tools
- [Structured Data Testing Tool](https://search.google.com/test/rich-results)
- [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)
- [XML Sitemap Validator](https://www.xml-sitemaps.com/validate-xml-sitemap.html)

## Contact
For questions about SEO implementation, refer to this guide or consult with your development team.

---

**Last Updated:** January 19, 2026
**Version:** 1.0
