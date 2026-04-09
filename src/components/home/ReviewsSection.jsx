import { Link } from 'react-router-dom';
import { Star, ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import ReviewCard from '../common/ReviewCard';
import VideoTestimonial from '../common/VideoTestimonial';
import reviews, { ratingStats } from '../../data/reviews';

const videoTestimonials = [
  {
    id: 1,
    name: 'James Calloway',
    location: 'St. Thomas, ON',
    rating: 5,
    excerpt: "I've hired a lot of contractors over the years. Weather Guard is in a different league entirely.",
    thumbnail: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=700&q=80',
    videoUrl: null,
  },
  {
    id: 2,
    name: 'Linda Bergstrom',
    location: 'Stratford, ON',
    rating: 5,
    excerpt: "From estimate to final walkthrough, they communicated every step. My house looks brand new.",
    thumbnail: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=700&q=80',
    videoUrl: null,
  },
];

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

          {/* ── Rating summary card ── */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lift px-10 py-6 mt-7 border border-gray-100"
          >
            {/* Score */}
            <div className="text-center">
              <div className="text-[3.5rem] font-extrabold text-charcoal leading-none tracking-tight">
                {ratingStats.average}
              </div>
              <div className="flex items-center gap-0.5 mt-2 justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={18} className="fill-gold text-gold" />
                ))}
              </div>
              <div className="text-xs text-gray-400 mt-1.5 font-semibold tracking-wide uppercase">
                {ratingStats.total} Google Reviews
              </div>
            </div>

            <div className="w-px h-16 bg-gray-200" />

            {/* Breakdown bars */}
            <div className="space-y-1.5">
              {ratingStats.breakdown.map((b) => (
                <div key={b.stars} className="flex items-center gap-2.5">
                  <span className="text-xs text-gray-500 w-3 text-right font-medium">{b.stars}</span>
                  <Star size={11} className="fill-gold text-gold shrink-0" />
                  <div className="w-28 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(b.count / ratingStats.total) * 100}%` }}
                      transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                    />
                  </div>
                  <span className="text-xs text-gray-400 font-medium w-5">{b.count}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Trust note under rating card */}
          <p className="text-xs text-gray-400 font-medium mt-3">
            ⭐ Top-rated by clients across London and surrounding Ontario
          </p>
        </div>

        {/* ── Video testimonials ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
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

        {/* ── Text review cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {reviews.slice(0, 3).map((r, i) => (
            <motion.div
              key={r.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <ReviewCard review={r} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/reviews" className="btn-outline-gold">
            Read All {ratingStats.total} Reviews <ArrowRight size={16} />
          </Link>
          <a
            href="https://g.page/r/weatherguardcoatings/review"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-gold transition-colors duration-200"
            id="google-reviews-cta"
          >
            <ExternalLink size={15} />
            See More Google Reviews
          </a>
        </div>
      </div>
    </section>
  );
}
