import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock, Star, Wrench } from 'lucide-react';

const whyItems = [
  {
    icon: Clock,
    title: '35+ Years of Excellence',
    desc: 'Founded in 1989, we have more experience than most contractors in the region. Our reputation has been built one satisfied customer at a time.',
  },
  {
    icon: Shield,
    title: 'Fully Licensed & Insured',
    desc: "WSIB compliant, $5M commercial general liability insurance. You're completely protected on every project we touch.",
  },
  {
    icon: Users,
    title: 'Consistent, Trained Crew',
    desc: "The same experienced professionals on every job, not day-labour or subcontractors. Our crew is trained to Weather Guard standards.",
  },
  {
    icon: Award,
    title: 'Premium Materials Only',
    desc: "We use Sherwin-Williams and Benjamin Moore exclusively. No cut-rate products, only coatings built to last in Ontario's climate.",
  },
  {
    icon: Wrench,
    title: 'Prep-First Philosophy',
    desc: 'A perfect finish starts with perfect preparation. We wash, scrape, sand, caulk, and prime every surface before a brush touches it.',
  },
  {
    icon: Star,
    title: 'Backed by 127 Reviews',
    desc: 'A 4.9-star average across 127 Google Reviews. Real clients, real results, see what people are saying.',
  },
];

/**
 * Why Us section, dark background with premium trust cards.
 */
export default function WhyUs() {
  return (
    <section
      className="section-padding"
      style={{ background: 'linear-gradient(160deg, #0e0e10 0%, #16161a 100%)' }}
      aria-labelledby="whyus-heading"
    >
      <div className="container-custom">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-14"
        >
          <p className="section-label mb-3">Why Weather Guard</p>
          <h2 id="whyus-heading" className="section-title-light mb-4">
            The Standard Other<br className="hidden md:block" /> Contractors Don't Meet
          </h2>
          <div className="section-divider mb-5" />
          <p className="text-gray-500 max-w-lg mx-auto text-sm leading-relaxed">
            We built Weather Guard Coatings in London, Ontario because we saw homeowners and
            business owners being let down. Here's what we do differently.
          </p>
        </motion.div>

        {/* ── Grid of cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyItems.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -4 }}
              className="group relative rounded-2xl p-7 border border-white/6 transition-all duration-300 cursor-default overflow-hidden"
              style={{ background: 'rgba(255,255,255,0.04)' }}
            >
              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-2xl border border-gold/0 group-hover:border-gold/25 transition-all duration-300 pointer-events-none" />

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                style={{ background: 'rgba(201,168,76,0.12)' }}
              >
                <Icon className="text-gold" size={22} strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-white font-bold text-[1rem] mb-2.5 leading-snug group-hover:text-gold/90 transition-colors duration-200">
                {title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 text-sm leading-[1.75]">{desc}</p>
            </motion.div>
          ))}

          </div>

          {/* ── CTA ── */}
          <div className="text-center mt-14">
            <a href="/contact" className="btn-primary text-base px-9 py-4 inline-flex">
              Get a Free Quote, No Obligation
            </a>
            <p className="text-gray-600 text-xs mt-4">
              Prefer to talk first?{' '}
              <a href="tel:+15195550192" className="text-gold font-semibold hover:underline">
                Call (519) 555-0192
              </a>{' '}
             , we're happy to answer your questions.
            </p>
          </div>
        </div>
    </section>
  );
}
