import { Helmet } from 'react-helmet-async';

const BUSINESS = {
  name: 'Weather Guard Coating',
  phone: '+12264481189',
  phoneDisplay: '(226) 448-1189',
  email: 'WeatherGuardcoating@gmail.com',
  address: {
    street: '611 Wonderland Rd N unit 225',
    city: 'London',
    region: 'ON',
    postalCode: 'N6H 5N7',
    country: 'CA',
  },
  url: 'https://weatherguardcoating.ca',
  lat: 42.9849,
  lng: -81.2453,
  priceRange: '$$',
  rating: '4.9',
  reviewCount: '127',
  foundingYear: '1989',
  areaServed: [
    'London, Ontario',
    'Kitchener, Ontario',
    'Waterloo, Ontario',
    'Cambridge, Ontario',
    'Stratford, Ontario',
    'St. Thomas, Ontario',
    'Woodstock, Ontario',
    'Strathroy, Ontario',
    'Sarnia, Ontario',
    'Tillsonburg, Ontario',
    'Ingersoll, Ontario',
    'Aylmer, Ontario',
    'Brantford, Ontario',
    'Goderich, Ontario',
  ],
  openingHours: ['Mo-Fr 07:00-17:00', 'Sa 08:00-14:00'],
};

/**
 * LocalBusiness + PaintingContractor JSON-LD schema.
 * Add to App.jsx (renders once, site-wide).
 */
export default function LocalBusinessSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
    '@id': `${BUSINESS.url}/#business`,
    name: BUSINESS.name,
    url: BUSINESS.url,
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    description:
      'Weather Guard Coating is a trusted painting contractor in London, Ontario with 35+ years of experience. We offer residential painting, commercial painting, farm & agricultural painting, and roof coating services across Southwestern Ontario.',
    foundingDate: BUSINESS.foundingYear,
    priceRange: BUSINESS.priceRange,
    logo: `${BUSINESS.url}/favicon.svg`,
    image: `${BUSINESS.url}/images/hero-video-thumbnail.jpg`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS.address.street,
      addressLocality: BUSINESS.address.city,
      addressRegion: BUSINESS.address.region,
      postalCode: BUSINESS.address.postalCode,
      addressCountry: BUSINESS.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: BUSINESS.lat,
      longitude: BUSINESS.lng,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '07:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Saturday'],
        opens: '08:00',
        closes: '14:00',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
      bestRating: '5',
      worstRating: '1',
    },
    areaServed: BUSINESS.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting & Coating Services',
      itemListElement: [
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Residential Painting', url: `${BUSINESS.url}/services/residential-painting` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial Painting', url: `${BUSINESS.url}/services/commercial-painting` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Farm & Agricultural Painting', url: `${BUSINESS.url}/services/farm-painting` } },
        { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Coating', url: `${BUSINESS.url}/services/roof-coating` } },
      ],
    },
    sameAs: [
      'https://www.google.com/maps/place/Weather+Guard+Coating',
    ],
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
