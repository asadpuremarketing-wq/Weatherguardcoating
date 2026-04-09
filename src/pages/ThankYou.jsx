import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, Phone, ArrowRight, Star, Clock, BookOpen, Award } from 'lucide-react';

const PHONE = '(519) 555-0192';
const PHONE_HREF = 'tel:+15195550192';

const nextSteps = [
  {
    step: '1',
    icon: Clock,
    title: "We'll Call You Within 24 Hours",
    desc: 'A real team member, not an automated system, will reach out to discuss your project and schedule your free on-site estimate.',
  },
  {
    step: '2',
    icon: CheckCircle,
    title: 'Free On-Site Estimate',
    desc: "We'll visit your property, review the scope, and give you a clear, detailed written quote. No pressure, no obligation.",
  },
  {
    step: '3',
    icon: Award,
    title: 'You Decide, No Commitment',
    desc: "There's no high-pressure follow-up. Take your time reviewing the quote. We earn your business, we don't pressure it.",
  },
];

const exploreLinks = [
  { label: 'Read Client Reviews', href: '/reviews', icon: Star },
  { label: 'View Our Portfolio', href: '/portfolio', icon: BookOpen },
  { label: 'Explore Our Services', href: '/services', icon: ArrowRight },
];

export default function ThankYou() {
  return (
    <>
      <Helmet>
        <title>Request Received | Weather Guard Coatings</title>
        <meta name="robots" content="noindex" />
      </Helmet>

      <main id="main-content" className="pt-24 min-h-screen bg-surface">
        <section className="section-padding">
          <div className="container-custom max-w-3xl text-center">

            {/* ── Success icon ── */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.65, delay: 0.1 }}
              className="flex justify-center mb-6"
            >
              <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center">
                <CheckCircle className="text-green-600" size={48} />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="section-label mx-auto mb-3">Request Received</p>
              <h1 className="text-3xl md:text-4xl font-extrabold text-charcoal mb-4 tracking-tight">
                Thanks, your request has been sent.
              </h1>
              <p className="text-gray-500 text-lg mb-3 leading-relaxed">
                We'll get back to you within 24 hours to discuss your project and schedule your free estimate.
              </p>
              <p className="text-gray-400 text-sm mb-10">
                Need help right away? Call us now and someone will be happy to answer your questions.
              </p>

              {/* ── Prominent phone CTA ── */}
              <div className="flex justify-center mb-12">
                <a
                  href={PHONE_HREF}
                  className="btn-primary text-lg px-10 py-4"
                  id="thankyou-call-cta"
                >
                  <Phone size={20} />
                  Call Us Now: {PHONE}
                </a>
              </div>

              {/* ── What happens next ── */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12 text-left">
                {nextSteps.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.45 + i * 0.1 }}
                    className="bg-white rounded-2xl border border-gray-100 p-6 text-center"
                    style={{ boxShadow: '0 2px 12px rgba(0,0,0,0.07)' }}
                  >
                    <div className="w-12 h-12 bg-gold/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <step.icon className="text-gold" size={22} />
                    </div>
                    <h3 className="font-bold text-charcoal text-sm mb-2 leading-snug">{step.title}</h3>
                    <p className="text-gray-500 text-xs leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* ── Social proof blurb ── */}
              <div
                className="rounded-2xl p-7 mb-10 text-left"
                style={{ background: 'linear-gradient(135deg, #111113 0%, #1a1a1e 100%)' }}
              >
                <div className="flex items-center gap-0.5 mb-3 justify-center">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} className="fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-white font-semibold text-base text-center mb-2">
                  "Best painting contractor we've ever used. Punctual, professional, and the results were incredible."
                </p>
                <p className="text-gray-400 text-sm text-center">Mark H., London, ON</p>
              </div>

              {/* ── Explore links ── */}
              <div className="mb-10">
                <p className="text-gray-400 text-sm font-medium mb-5">While you wait, explore more:</p>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {exploreLinks.map(({ label, href, icon: Icon }) => (
                    <Link
                      key={href}
                      to={href}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-charcoal border border-gray-200 rounded-xl px-5 py-2.5 hover:border-gold hover:text-gold transition-all duration-200 bg-white"
                    >
                      <Icon size={15} />
                      {label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* ── Back home ── */}
              <Link to="/" className="btn-secondary">
                Back to Home <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
