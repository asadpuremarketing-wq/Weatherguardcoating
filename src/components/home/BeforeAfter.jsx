import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import BeforeAfterCard from '../common/BeforeAfterCard';
import portfolioItems from '../../data/portfolio';

// Enrich portfolio items with a short result line for the homepage showcase
const featuredItems = portfolioItems.slice(0, 4).map((item) => ({
  ...item,
  resultLine:
    item.id === 1 ? 'Peeling exterior transformed, looks brand new, protected for years.' :
    item.id === 2 ? '3-floor repaint done over 2 weekends. Zero business disruption.' :
    item.id === 3 ? 'Full barn & silo coating built to survive Ontario winters.' :
                    'Persistent leaks solved. Cooling costs reduced. 18,000 sq ft done right.',
}));

/**
 * Before/After showcase, CRO-optimized: intro line, result lines, "View More Projects" CTA.
 */
export default function BeforeAfter() {
  return (
    <section className="section-padding bg-surface" aria-labelledby="ba-heading">
      <div className="container-custom">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Real Project Results</p>
          <h2 id="ba-heading" className="section-title mb-4">
            Real Transformations , <br className="hidden md:block" /> Before &amp; After
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-500 max-w-xl mx-auto text-[0.9375rem] leading-relaxed">
            See how the right prep, materials, and workmanship change the final result.
            Every project below is a real job completed by our team across Southwestern Ontario.
          </p>
        </motion.div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-12">
          {featuredItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <BeforeAfterCard item={item} />
            </motion.div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/portfolio" className="btn-primary">
            View More Projects <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-outline-gold">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
