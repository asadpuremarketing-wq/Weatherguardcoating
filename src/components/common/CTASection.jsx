import { Link } from 'react-router-dom';
import { Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { gtagReportCallConversion } from '../../lib/gtag';

const PHONE = '+12264481189';
const PHONE_HREF = 'tel:+12264481189';

/**
 * CRO-optimized CTA section, direct, action-oriented, both contact paths.
 */
export default function CTASection({
  dark = true,
  title = 'Get Your Free Quote Today',
  subtitle = "Honest pricing. An experienced team. A no-pressure estimate, delivered within 24 hours.",
  ctaLabel = 'Get Your Free Quote',
  ctaHref = '/contact',
  trustNote = 'Serving London and surrounding Ontario with over 35 years of experience.',
  className,
}) {
  return (
    <section
      className={cn('relative overflow-hidden section-padding', className)}
      style={
        dark
          ? { background: 'linear-gradient(135deg, #111113 0%, #1a1a1e 100%)' }
          : undefined
      }
    >
      {/* Light variant bg */}
      {!dark && (
        <div className="absolute inset-0 bg-gold/4 border-y border-gold/15 pointer-events-none" />
      )}

      {/* Dark variant: radial accent */}
      {dark && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.06) 0%, transparent 65%)' }}
        />
      )}

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Label */}
          <p className="section-label mb-4">Free Estimates with No Pressure</p>

          {/* Title */}
          <h2
            className={cn(
              'font-extrabold mb-4 leading-[1.1] tracking-tight text-[1.8rem] sm:text-[2.2rem] md:text-[2.8rem]',
              dark ? 'text-white' : 'text-charcoal'
            )}
          >
            {title}
          </h2>

          {/* Divider */}
          <div className="section-divider mb-6" />

          {/* Subtitle */}
          <p
            className={cn(
              'text-[1.05rem] mb-10 max-w-xl mx-auto leading-relaxed',
              dark ? 'text-gray-400' : 'text-gray-600'
            )}
          >
            {subtitle}
          </p>

          {/* CTA buttons, both paths equally prominent */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <Link
              to={ctaHref}
              className="btn-primary text-base px-10 py-4 w-full sm:w-auto"
              id="final-cta-quote"
            >
              {ctaLabel} <ArrowRight size={18} />
            </Link>
            <a
              href={PHONE_HREF}
              id="final-cta-call"
              onClick={() => gtagReportCallConversion(PHONE_HREF)}
              className={cn(
                'inline-flex items-center gap-2.5 font-bold text-base px-9 py-4 rounded-xl border-2 transition-all duration-200 w-full sm:w-auto justify-center',
                dark
                  ? 'border-white/25 text-white hover:bg-white/10 hover:border-white/40'
                  : 'border-charcoal/25 text-charcoal hover:bg-charcoal hover:text-white'
              )}
            >
              <Phone size={18} />
              Call Now: {PHONE}
            </a>
          </div>

          {/* Prefer to call micro-CTA */}
          <p className={cn('text-sm mb-8', dark ? 'text-gray-500' : 'text-gray-500')}>
            Prefer to talk first?{' '}
            <a href={PHONE_HREF} className="text-gold font-semibold hover:underline" onClick={() => gtagReportCallConversion(PHONE_HREF)}>
              Call us directly
            </a>{' '}
            we are ready to help.
          </p>

          {/* Trust pills */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-8">
            {['Free Estimates', 'No Obligation', 'Responds in 24hrs', 'Fully Insured'].map((t) => (
              <span
                key={t}
                className={cn('flex items-center gap-1.5 text-sm font-medium', dark ? 'text-gray-500' : 'text-gray-500')}
              >
                <span className="text-gold font-bold">✓</span> {t}
              </span>
            ))}
          </div>

          {/* Location trust note */}
          {trustNote && (
            <p className={cn('text-xs font-medium', dark ? 'text-gray-600' : 'text-gray-400')}>
              {trustNote}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
