import { motion } from 'framer-motion';
import { Shield, Award, Users, Clock, Star, Wrench } from 'lucide-react';
import Carousel from '../common/Carousel';

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
    title: 'Backed by Verified Reviews',
    desc: 'Real clients sharing real results on Google, see what people are saying about working with us.',
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

        {/* ── Carousel of cards ── */}
        <Carousel
          items={whyItems}
          keyFor={(item) => item.title}
          perView={{ base: 1, md: 2, lg: 3 }}
          dark
          className="mb-2"
          renderItem={({ icon: Icon, title, desc }, i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.07 }}
              whileHover={{ y: -4 }}
              className="glass-card-premium group relative rounded-2xl p-7 cursor-default overflow-hidden h-full"
            >
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
          )}
        />

        {/* ── CTA ── */}
        <div className="text-center mt-12">
          <a href="/contact" className="btn-primary text-base px-9 py-4 inline-flex">
            Get a Free Quote, No Obligation
          </a>
          <p className="text-gray-600 text-xs mt-4">
            Prefer to talk first?{' '}
            <a href="tel:+12264481189" className="text-gold font-semibold hover:underline">
              Call (226) 448-1189
            </a>{' '}
            , we're happy to answer your questions.
          </p>
        </div>
      </div>
    </section>
  );
}
