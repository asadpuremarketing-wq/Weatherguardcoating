import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Shield, Clock } from 'lucide-react';
import HeroVideo from '../common/HeroVideo';
import LeadForm from '../common/LeadForm';

const trustChips = [
  { icon: Clock,        label: '35+ Years Experience' },
  { icon: Shield,       label: 'Fully Insured' },
  { icon: CheckCircle,  label: 'Free Estimates' },
  { icon: MapPin,       label: 'London + 160km' },
];

const reassuranceItems = [
  '35+ years of proven results across Ontario',
  'Fully licensed, insured, and WSIB compliant',
  'Trusted by homeowners, businesses & farms',
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] } },
};

/**
 * Homepage hero section, 2-col desktop, stacked mobile.
 * Left: headline + trust chips + video  |  Right: lead form
 */
export default function HeroSection() {
  return (
    <section
      className="relative bg-charcoal overflow-hidden flex items-center"
      aria-label="Hero"
    >
      {/* Background, gradient + subtle texture */}
      <div className="absolute inset-0 bg-dark-gradient" />
      <div className="absolute inset-0 bg-hero-pattern opacity-100" />

      {/* Decorative radial glow behind form */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
      />

      <div className="container-custom pt-20 pb-8 md:pt-28 md:pb-24 lg:py-36 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-start">

          {/* ── LEFT column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {/* Pre-headline */}
            <motion.p
              variants={itemVariants}
              className="text-gold/90 text-sm font-semibold mb-4 tracking-wide"
            >
              Trusted Residential, Commercial &amp; Farm Painting in London, Ontario
            </motion.p>

            {/* Trust chips */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-7">
              {trustChips.map(({ icon: Icon, label }) => (
                <span key={label} className="trust-chip">
                  <Icon size={13} className="text-gold shrink-0" />
                  {label}
                </span>
              ))}
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={itemVariants}
              className="font-extrabold text-white leading-[1.1] tracking-tight mb-4 text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem]"
            >
              Painting Done Right
              <br />
              <span className="gradient-text">by a Team</span>
              <br />
              You Can Trust.
            </motion.h1>

            {/* Subheading, conversion-focused */}
            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-[1.05rem] leading-[1.75] mb-7 max-w-md"
            >
              Honest estimates. An experienced, consistent crew. Results that hold up
              in Ontario's weather, backed by 35 years of doing this right.
            </motion.p>

            {/* Trust reassurance bullets */}
            <motion.ul variants={itemVariants} className="space-y-2 mb-9">
              {reassuranceItems.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-sm text-gray-300">
                  <span className="w-5 h-5 rounded-full bg-gold/15 flex items-center justify-center shrink-0">
                    <CheckCircle size={12} className="text-gold" />
                  </span>
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* Video — visible on all devices now */}
            <motion.div variants={itemVariants} className="mt-8 lg:mt-0">
              <HeroVideo />
            </motion.div>
          </motion.div>

          {/* RIGHT column — lead form. Extra bottom padding on mobile for CTA bar clearance */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="pb-24 lg:pb-0"
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
        <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 72L1440 72L1440 36C1200 72 960 0 720 36C480 72 240 0 0 36L0 72Z" fill="white" />
        </svg>
      </div>
    </section>
  );
}
