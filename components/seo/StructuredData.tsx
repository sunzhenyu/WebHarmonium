import Script from 'next/script';

interface StructuredDataProps {
  type: 'WebApplication' | 'HowTo' | 'FAQPage' | 'Article';
  data: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData;

  switch (type) {
    case 'WebApplication':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: data.name || 'Web Harmonium',
        description: data.description || 'Free online harmonium simulator',
        url: data.url || 'https://webharmonium.com',
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Any',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        featureList: data.features || [
          'Play harmonium with computer keyboard',
          'Transpose control',
          'Multiple octaves',
          'Volume control',
          'Reverb effects',
        ],
      };
      break;

    case 'HowTo':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'HowTo',
        name: data.name,
        description: data.description,
        step: data.steps,
      };
      break;

    case 'FAQPage':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: data.questions,
      };
      break;

    case 'Article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data.headline,
        description: data.description,
        author: {
          '@type': 'Organization',
          name: 'Web Harmonium',
        },
        datePublished: data.datePublished || new Date().toISOString(),
        dateModified: data.dateModified || new Date().toISOString(),
      };
      break;
  }

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
