import { Helmet } from 'react-helmet-async';

/**
 * Service JSON-LD schema for individual service pages.
 */
export default function ServiceSchema({ service }) {
  if (!service) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.title,
    description: service.fullDesc,
    url: `https://weatherguardcoating.ca/services/${service.slug}`,
    image: `https://weatherguardcoating.ca${service.image}`,
    provider: {
      '@type': 'LocalBusiness',
      name: 'Weather Guard Coating',
      url: 'https://weatherguardcoating.ca',
      telephone: '+12264481189',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '611 Wonderland Rd N unit 225',
        addressLocality: 'London',
        addressRegion: 'ON',
        postalCode: 'N6H 5N7',
        addressCountry: 'CA',
      },
    },
    areaServed: {
      '@type': 'State',
      name: 'Ontario, Canada',
    },
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'CAD',
      description: 'Free estimate, no obligation',
    },
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
