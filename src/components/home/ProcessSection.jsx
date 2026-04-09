import { motion } from 'framer-motion';
import processSteps from '../../data/process';
import { Link } from 'react-router-dom';

// Short, reassuring step descriptions
const stepOverrides = {
  1: 'We visit your property, assess the scope, and give you a clear written estimate. No charge, no obligation.',
  2: 'Once you approve, we lock in a schedule that works around your life, no vague timelines.',
  3: "We pressure wash, scrape, sand, caulk, and prime every surface. This is what makes paint last.",
  4: 'Our experienced crew applies premium coatings with care, clean edges, full coverage, no shortcuts.',
  5: "We do a final walkthrough with you. Any touch-ups are handled on the spot. We don't leave until it's right.",
};

/**
 * Process section, CRO-optimized: support line, reassuring step copy, clear CTA.
 */
export default function ProcessSection() {
  return (
    <section
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #111113 0%, #1a1a1e 100%)' }}
      aria-labelledby="process-heading"
    >
      <div className="absolute inset-0 bg-hero-pattern opacity-100 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <p className="section-label mb-3">Simple, Honest, Professional</p>
          <h2 id="process-heading" className="section-title-light mb-4">
            Our Proven 5-Step Process
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto text-sm leading-relaxed">
            From first contact to final walkthrough, we keep things clear and professional , 
            so you always know what's happening and what to expect next.
          </p>
        </motion.div>

        {/* ── Steps ── */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-[2.15rem] left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px pointer-events-none"
            style={{ background: 'linear-gradient(to right, transparent, rgba(201,168,76,0.25) 20%, rgba(201,168,76,0.25) 80%, transparent)' }}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="flex flex-col items-center text-center group cursor-default"
              >
                {/* Icon circle */}
                <div className="relative mb-5">
                  <div className="w-[4.5rem] h-[4.5rem] rounded-full bg-gold flex items-center justify-center z-10 relative transition-all duration-300 group-hover:ring-4 group-hover:ring-gold/25"
                    style={{ boxShadow: '0 0 24px rgba(201,168,76,0.25)' }}
                  >
                    <span className="text-[1.7rem]">{step.icon}</span>
                  </div>
                  <div className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-charcoal-light rounded-full flex items-center justify-center border-2 border-gold z-20">
                    <span className="text-gold text-[10px] font-black">{step.step}</span>
                  </div>
                </div>

                <h3 className="text-white font-bold text-[0.9rem] mb-2 leading-snug group-hover:text-gold transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-xs leading-[1.75]">
                  {stepOverrides[step.step] ?? step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <Link to="/contact" className="btn-primary text-base px-9 py-4" id="process-cta">
            Request Your Free Estimate
          </Link>
          <p className="text-gray-600 text-xs mt-4 font-medium">
            No obligation · Responds within 24 hours · Serving London, ON and surrounding area
          </p>
        </motion.div>
      </div>
    </section>
  );
}
