import { Link } from 'react-router-dom';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewCard from '../common/ReviewCard';
import Carousel from '../common/Carousel';
import reviews, { GOOGLE_REVIEWS_URL } from '../../data/reviews';

/**
 * Reviews section — CRO-optimized: better intro copy, trust note, Google CTA.
 */
export default function ReviewsSection() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="reviews-heading">
      <div className="container-custom">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          <p className="section-label mb-3">What Clients Say</p>
          <h2 id="reviews-heading" className="section-title mb-3">
            Trusted by Homeowners &amp; Businesses<br className="hidden md:block" /> Across Ontario
          </h2>
          <p className="text-gray-400 text-[0.9375rem] max-w-lg mx-auto leading-relaxed">
            Real homeowners, businesses, and property owners across London and surrounding Ontario sharing their experience.
          </p>

          {/* ── Google reviews link card ── */}
          <motion.a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-3 bg-white rounded-2xl shadow-lift px-7 py-4 mt-7 border border-gray-100 hover:border-gold/40 transition-colors duration-200 group"
          >
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} className="fill-gold text-gold" />
              ))}
            </div>
            <span className="text-sm font-semibold text-charcoal group-hover:text-gold-ink transition-colors">
              See our verified reviews on Google
            </span>
            <ExternalLink size={15} className="text-gray-400 group-hover:text-gold transition-colors" />
          </motion.a>
        </div>

        {/* ── Text review cards ── */}
        <Carousel
          items={reviews.slice(0, 6)}
          perView={{ base: 1, md: 2, lg: 3 }}
          className="mb-4"
          renderItem={(r, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="h-full"
            >
              <ReviewCard review={r} className="h-full" />
            </motion.div>
          )}
        />

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/reviews" className="btn-outline-gold">
            Read More Reviews <ArrowRight size={16} />
          </Link>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold-ink transition-colors duration-200"
            id="google-reviews-cta"
          >
            <ExternalLink size={15} />
            See More on Google
          </a>
        </div>
      </div>
    </section>
  );
}
