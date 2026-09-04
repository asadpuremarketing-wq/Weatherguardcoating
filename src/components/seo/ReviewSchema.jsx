import { Helmet } from 'react-helmet-async';

/**
 * Review JSON-LD schema for the Reviews page.
 * No aggregateRating here — we only publish per-review structured data for
 * reviews we can actually attribute, not a hardcoded overall score/count.
 */
export default function ReviewSchema({ reviews }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://weatherguardcoating.ca/#business',
    name: 'Weather Guard Coating',
    url: 'https://weatherguardcoating.ca',
    review: (reviews || []).slice(0, 5).map((r) => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: String(r.rating || 5),
        bestRating: '5',
      },
      author: {
        '@type': 'Person',
        name: r.name,
      },
      reviewBody: r.text,
      datePublished: r.date || '2024-01-01',
    })),
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
