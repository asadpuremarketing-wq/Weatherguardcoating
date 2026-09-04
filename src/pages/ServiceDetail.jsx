import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { servicesBySlug } from '../data/services';
import LeadForm from '../components/common/LeadForm';
import ReviewCard from '../components/common/ReviewCard';
import BeforeAfterCard from '../components/common/BeforeAfterCard';
import Carousel from '../components/common/Carousel';
import CTASection from '../components/common/CTASection';
import reviews, { GOOGLE_REVIEWS_URL } from '../data/reviews';
import portfolioItems from '../data/portfolio';
import { CheckCircle, ChevronDown, Shield, Award, Star, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import ServiceSchema from '../components/seo/ServiceSchema';
import FAQSchema from '../components/seo/FAQSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

// Maps a service id to the matching portfolio category / review keyword
const CATEGORY_MAP = {
  residential: 'residential',
  commercial: 'commercial',
  farm: 'farm',
  'roof-coating': 'roof',
};

// Only real, on-site project photos live under /images — anything hosted
// elsewhere (stock placeholders) is excluded so this page never shows fake work.
const isRealPhoto = (src) => typeof src === 'string' && src.startsWith('/images');

const credentialItems = [
  { icon: Shield, label: 'Fully Insured', sub: '$5M liability + WSIB compliant' },
  { icon: Award, label: '3-Year Warranty', sub: 'On every completed project' },
  { icon: Star, label: 'Google Verified', sub: 'Real client reviews, see them below' },
];

/**
 * Individual Service Page Template.
 * Reusable layout for all service types.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesBySlug[slug];

  if (!service) return <Navigate to="/services" replace />;

  const categoryKey = CATEGORY_MAP[service.id] ?? service.id;

  // Real (non-stock) before/after projects for this specific service category
  const relatedProjects = portfolioItems.filter(
    (p) => p.category === categoryKey && isRealPhoto(p.before) && isRealPhoto(p.after)
  );

  // Reviews that actually mention this service — no filler or fallback content
  const relatedReviews = reviews.filter((r) =>
    r.service.toLowerCase().includes(categoryKey)
  );
  const reviewColumns = Math.max(1, Math.min(relatedReviews.length, 3));

  return (
    <>
      <Helmet>
        <title>{service.title} London ON | Weather Guard Coating</title>
        <meta
          name="description"
          content={`${service.shortDesc} Serving London, ON. Free estimates, fully insured.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/services/${service.slug}`} />
        <meta property="og:title" content={`${service.title} London ON | Weather Guard Coating`} />
        <meta property="og:description" content={service.shortDesc} />
        <meta property="og:url" content={`${BASE_URL}/services/${service.slug}`} />
        <meta property="og:image" content={`${BASE_URL}${service.image}`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Services', url: `${BASE_URL}/services` },
          { name: service.title, url: `${BASE_URL}/services/${service.slug}` },
        ]}
      />
      <ServiceSchema service={service} />
      <FAQSchema faqs={service.faqs} />

      <main id="main-content" className="pt-24">
        {/* ── Hero ── */}
        <section className="relative bg-charcoal py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${service.image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/40 pointer-events-none" />
          <div className="container-custom relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">
                  Our Services
                </p>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                  {service.title}
                </h1>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">{service.fullDesc}</p>

                {/* Rating strip */}
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mb-5 group"
                >
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={16} className="fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-gold transition-colors">
                    Verified reviews on Google
                  </span>
                </a>

                {/* Trust chips */}
                <div className="flex flex-wrap gap-2">
                  {['Free Estimate', 'Fully Insured', '35+ Years Exp', 'London ON'].map((chip) => (
                    <span key={chip} className="trust-chip text-xs">{chip}</span>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <LeadForm compact />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── Credentials strip ── */}
        <section className="bg-white border-b border-gray-100">
          <div className="container-custom">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
              {credentialItems.map(({ icon: Icon, label, sub }) => (
                <div key={label} className="flex items-center gap-4 py-6 px-4 sm:justify-center">
                  <div className="w-11 h-11 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Icon className="text-gold" size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm">{label}</div>
                    <div className="text-gray-400 text-xs">{sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── What we do — features ── */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-5xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <p className="section-label mb-2">What's Included</p>
                <h2 className="section-title mb-5">Our {service.title} Process</h2>
                <ul className="space-y-3">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className="w-6 h-6 bg-gold/15 rounded-full flex items-center justify-center shrink-0">
                        <CheckCircle size={14} className="text-gold" />
                      </span>
                      <span className="text-charcoal text-sm font-medium">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary mt-6 inline-flex">
                  Get My Free Estimate
                </Link>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-card-hover">
                <img
                  src={service.image}
                  alt={service.imageAlt || service.title}
                  className="w-full h-72 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Real project results (only real, on-site photos — no stock) ── */}
        {relatedProjects.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom max-w-5xl">
              <div className="text-center mb-10">
                <p className="section-label mb-2">Real Work, Real Results</p>
                <h2 className="section-title mb-3">
                  A Recent {service.title} Project
                </h2>
                <p className="text-gray-500 text-sm max-w-lg mx-auto">
                  An actual before &amp; after from our own crew, drag to compare.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-7 max-w-3xl mx-auto">
                {relatedProjects.map((item) => (
                  <BeforeAfterCard key={item.id} item={item} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link
                  to={`/portfolio?category=${categoryKey}`}
                  className="btn-outline-gold inline-flex"
                >
                  View More {service.title} Projects <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── Reviews (only real reviews mentioning this service) ── */}
        {relatedReviews.length > 0 && (
          <section className="section-padding bg-gray-50">
            <div className="container-custom">
              <div className="text-center mb-10">
                <p className="section-label mb-2">What Clients Say</p>
                <h2 className="section-title mb-3">
                  {service.title} Clients on Google
                </h2>
              </div>
              <Carousel
                items={relatedReviews}
                perView={{ base: 1, md: Math.min(reviewColumns, 2), lg: reviewColumns }}
                className="max-w-5xl mx-auto mb-4"
                renderItem={(r) => <ReviewCard review={r} className="h-full" />}
              />
              <div className="text-center mt-6">
                <Link to="/reviews" className="text-gold-ink font-semibold text-sm hover:underline">
                  See more reviews →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ── */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-3xl">
            <h2 className="section-title mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-3">
              {service.faqs.map((faq) => (
                <FAQItem key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        <CTASection title={`Ready for Professional ${service.title}?`} />
      </main>
    </>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="card p-0 overflow-hidden">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-charcoal text-sm hover:bg-gray-50 transition-colors"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        {q}
        <ChevronDown size={16} className={`shrink-0 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="px-5 pb-4 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-3">
          {a}
        </div>
      )}
    </div>
  );
}
