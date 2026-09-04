import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import ReviewCard from '../components/common/ReviewCard';
import CTASection from '../components/common/CTASection';
import reviews, { GOOGLE_REVIEWS_URL } from '../data/reviews';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import ReviewSchema from '../components/seo/ReviewSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

export default function Reviews() {
  return (
    <>
      <Helmet>
        <title>Customer Reviews | Weather Guard Coating</title>
        <meta
          name="description"
          content="Read verified Google reviews from Weather Guard Coating clients across London, Ontario."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/reviews`} />
        <meta property="og:title" content="Customer Reviews | Painting Contractor London Ontario" />
        <meta property="og:description" content="Verified Google reviews for Weather Guard Coating. See what London Ontario homeowners say about us." />
        <meta property="og:url" content={`${BASE_URL}/reviews`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Reviews', url: `${BASE_URL}/reviews` },
        ]}
      />
      <ReviewSchema reviews={reviews} />

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

        {/* Verified on Google */}
        <section className="py-12 bg-white border-b border-gray-100">
          <div className="container-custom flex justify-center">
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-surface rounded-2xl shadow-lift px-7 py-4 border border-gray-100 hover:border-gold/40 transition-colors duration-200 group"
            >
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={20} className="fill-gold text-gold" />
                ))}
              </div>
              <span className="text-sm font-semibold text-charcoal group-hover:text-gold-ink transition-colors">
                Verified reviews on Google
              </span>
              <ExternalLink size={15} className="text-gray-400 group-hover:text-gold transition-colors" />
            </a>
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
