import { Helmet } from 'react-helmet-async';

/**
 * BlogPosting / Article JSON-LD schema for blog posts.
 */
export default function ArticleSchema({ post }) {
  if (!post) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    url: `https://weatherguardcoating.ca/blog/${post.slug}`,
    image: post.image ? `https://weatherguardcoating.ca${post.image}` : `https://weatherguardcoating.ca/images/hero-video-thumbnail.jpg`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Weather Guard Coating',
      url: 'https://weatherguardcoating.ca',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Weather Guard Coating',
      url: 'https://weatherguardcoating.ca',
      logo: {
        '@type': 'ImageObject',
        url: 'https://weatherguardcoating.ca/favicon.svg',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://weatherguardcoating.ca/blog/${post.slug}`,
    },
    keywords: post.keywords || [],
    articleSection: 'Painting & Coating Tips',
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
}
