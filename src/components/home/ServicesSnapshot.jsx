import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import ServiceCard from '../common/ServiceCard';
import services from '../../data/services';

// Benefit-driven short descriptions for homepage cards
const benefitDescs = {
  'residential-painting': 'Refresh and protect your home with clean, lasting finishes that hold up in Ontario weather.',
  'commercial-painting':  'Professional results with minimal disruption, on time, on budget, properly insured.',
  'farm-painting':        'Durable coatings for barns, silos, and farm structures built to outlast harsh Ontario winters.',
  'roof-coating':         'Stop leaks, cut cooling costs, and extend your roof life, at a fraction of replacement cost.',
};

// Attach benefit descriptions to service objects for this section
const enhancedServices = services.map((s) => ({
  ...s,
  shortDesc: benefitDescs[s.slug] ?? s.shortDesc,
}));

/**
 * Services snapshot, CRO-optimized: benefit-driven copy, trust label, dual CTA.
 */
export default function ServicesSnapshot() {
  return (
    <section className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-custom">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Specialized Painting &amp; Coating Solutions</p>
          <h2 id="services-heading" className="section-title mb-4">
            Expert Coatings for<br className="hidden md:block" /> Every Property Type
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-[0.9375rem] leading-relaxed">
            Whether it's a home in London, a commercial building, a working farm, or a flat roof , 
            we have the crew, equipment, and 35 years of experience to do it right.
          </p>
        </motion.div>

        {/* ── Service cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {enhancedServices.map((service, i) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
            >
              <ServiceCard service={service} className="h-full" />
            </motion.div>
          ))}
        </div>

        {/* ── CTAs ── */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/services" className="btn-outline-gold">
            Explore All Services <ArrowRight size={16} />
          </Link>
          <Link to="/contact" className="btn-primary">
            Get a Free Quote <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
