import { useEffect } from 'react';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}

export const useSEO = ({
  title = 'De Kloe Yachts | Exclusive Dutch Yacht Brokerage',
  description = 'De Kloe Yachts connects the world\'s most distinguished families with the finest Dutch yacht builders. Expert yacht brokerage with exclusive access to world-class shipyards.',
  keywords = 'yacht brokerage, Dutch yachts, superyacht, motor yacht, yacht builder, luxury yachts, yacht broker, Netherlands',
  image = 'https://dekloeyachts.com/og-image.png',
  url = 'https://dekloeyachts.com',
  type = 'website',
}: SEOProps = {}) => {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;

      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.content = content;
    };

    // Standard meta tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);

    // Open Graph
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:url', url, true);

    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;
  }, [title, description, keywords, image, url, type]);
};

export interface StructuredDataProps {
  type: 'Organization' | 'LocalBusiness' | 'Service' | 'WebPage' | 'BreadcrumbList';
  data: Record<string, any>;
}

export const useStructuredData = (schemas: StructuredDataProps[]) => {
  useEffect(() => {
    // Remove existing structured data
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach(script => script.remove());

    // Add new structured data
    schemas.forEach(({ type, data }) => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': type,
        ...data,
      });
      document.head.appendChild(script);
    });

    return () => {
      const scripts = document.querySelectorAll('script[type="application/ld+json"]');
      scripts.forEach(script => script.remove());
    };
  }, [schemas]);
};

// Organization structured data for De Kloe Yachts
export const organizationSchema: StructuredDataProps = {
  type: 'Organization',
  data: {
    name: 'De Kloe Yachts',
    url: 'https://dekloeyachts.com',
    logo: 'https://dekloeyachts.com/logo.png',
    description: 'Exclusive Dutch yacht brokerage connecting distinguished families with world-class shipbuilders.',
    foundingDate: '1685',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      availableLanguage: ['en', 'nl'],
    },
    sameAs: [
      // Add social media URLs when available
    ],
  },
};

// Local Business structured data
export const localBusinessSchema: StructuredDataProps = {
  type: 'LocalBusiness',
  data: {
    '@id': 'https://dekloeyachts.com/#localbusiness',
    name: 'De Kloe Yachts',
    image: 'https://dekloeyachts.com/og-image.png',
    description: 'Exclusive Dutch yacht brokerage specializing in luxury motor yachts and superyachts.',
    priceRange: '€€€€',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
  },
};
