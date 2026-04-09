import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import ReviewCard from '../components/common/ReviewCard';
import VideoTestimonial from '../components/common/VideoTestimonial';
import CTASection from '../components/common/CTASection';
import reviews, { ratingStats } from '../data/reviews';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import ReviewSchema from '../components/seo/ReviewSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

const videoTestimonials = [
  {
    id: 1,
    name: 'James Calloway',
    location: 'St. Thomas, ON',
    rating: 5,
    excerpt: "I've hired a lot of contractors over the years. Weather Guard is in a different league entirely.",
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
    videoUrl: null,
  },
  {
    id: 2,
    name: 'Linda Bergstrom',
    location: 'Stratford, ON',
    rating: 5,
    excerpt: "From estimate to final walkthrough, they communicated every step. My house looks brand new.",
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80',
    videoUrl: null,
  },
  {
    id: 3,
    name: 'Mark Hendricks',
    location: 'London, ON',
    rating: 5,
    excerpt: "The prep work alone was more thorough than any contractor we've ever hired. Incredible result.",
    thumbnail: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80',
    videoUrl: null,
  },
];

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | 4.9★ Painting Contractor London Ontario | Weather Guard Coating</title>
        <meta
          name="description"
          content="Read 127+ five-star reviews of Weather Guard Coating, London Ontario's trusted painting contractor. 4.9 stars from homeowners, businesses, and property owners across Southwestern Ontario."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/reviews`} />
        <meta property="og:title" content="Customer Reviews | 4.9★ Painting Contractor London Ontario" />
        <meta property="og:description" content="127+ five-star Google reviews for Weather Guard Coating. See what London Ontario homeowners say about us." />
        <meta property="og:url" content={`${BASE_URL}/reviews`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Reviews', url: `${BASE_URL}/reviews` },
        ]}
      />
      <ReviewSchema reviews={reviews} ratingStats={ratingStats} />

      <main id="main-content" className="pt-24">
        {/* Page header */}
        <section className="bg-charcoal py-20">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Testimonials</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                What Our Clients Say
              </h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Don't take our word for it. See what homeowners, businesses, and property owners across Ontario are saying.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Overall rating summary */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              {/* Big rating */}
              <div className="text-center">
                <div className="text-7xl font-extrabold text-charcoal">{ratingStats.average}</div>
                <div className="flex items-center gap-1 justify-center mb-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={22} className="fill-gold text-gold" />
                  ))}
                </div>
                <div className="text-gray-500 text-sm font-medium">{ratingStats.total} Google Reviews</div>
              </div>

              <div className="w-px h-24 bg-gray-200 hidden md:block" />

              {/* Breakdown bars */}
              <div className="space-y-2 w-full max-w-xs">
                {ratingStats.breakdown.map((b) => (
                  <div key={b.stars} className="flex items-center gap-3">
                    <span className="text-sm text-gray-500 w-3 text-right">{b.stars}</span>
                    <Star size={12} className="fill-gold text-gold shrink-0" />
                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(b.count / ratingStats.total) * 100}%` }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="h-full bg-gold rounded-full"
                      />
                    </div>
                    <span className="text-sm text-gray-500 w-6">{b.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video testimonials */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="section-title text-center mb-10">Video Testimonials</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {videoTestimonials.map((t, i) => (
                <motion.div
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  <VideoTestimonial testimonial={t} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* All text reviews */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="section-title text-center mb-10">Client Reviews</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <motion.div
                  key={r.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <ReviewCard review={r} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <CTASection title="Join 1,000+ Satisfied Clients" subtitle="Join the contractors who have trusted Weather Guard for over 35 years." />
      </main>
    </>
  );
}
