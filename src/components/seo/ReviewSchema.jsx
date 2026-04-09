import { Helmet } from 'react-helmet-async';

/**
 * AggregateRating + Review JSON-LD schema for the Reviews page.
 * Enables star ratings in Google search results.
 */
export default function ReviewSchema({ reviews, ratingStats }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Weather Guard Coating',
    url: 'https://weatherguardcoating.ca',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: ratingStats?.average || '4.9',
      reviewCount: ratingStats?.total || '127',
      bestRating: '5',
      worstRating: '1',
    },
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
