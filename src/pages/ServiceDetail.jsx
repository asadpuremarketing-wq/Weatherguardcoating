import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { servicesBySlug } from '../data/services';
import LeadForm from '../components/common/LeadForm';
import ReviewCard from '../components/common/ReviewCard';
import CTASection from '../components/common/CTASection';
import reviews from '../data/reviews';
import { CheckCircle, X, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';
import ServiceSchema from '../components/seo/ServiceSchema';
import FAQSchema from '../components/seo/FAQSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

/**
 * Individual Service Page Template.
 * Reusable layout for all service types.
 */
export default function ServiceDetail() {
  const { slug } = useParams();
  const service = servicesBySlug[slug];

  if (!service) return <Navigate to="/services" replace />;

  const relatedReviews = reviews.filter(
    (r) => r.service.toLowerCase().includes(service.id) || r.service.toLowerCase().includes('residential')
  ).slice(0, 2);

  return (
    <>
      <Helmet>
        <title>{service.title} in London, Ontario | Weather Guard Coating</title>
        <meta
          name="description"
          content={`${service.shortDesc} Serving London, Ontario and surrounding areas for 35+ years. Fully insured, WSIB compliant. Free estimate, call (226) 448-1189.`}
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/services/${service.slug}`} />
        <meta property="og:title" content={`${service.title} in London, Ontario | Weather Guard Coating`} />
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
        {/* Hero */}
        <section className="relative bg-charcoal py-20 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: `url(${service.image})` }}
          />
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

        {/* Problems targeted */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="section-title mb-8 text-center">Sound Familiar?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.problems.map((p) => (
                <div key={p} className="flex items-start gap-3 bg-red-50 border border-red-100 rounded-xl px-4 py-3">
                  <X size={16} className="text-red-500 mt-0.5 shrink-0" />
                  <p className="text-gray-700 text-sm">{p}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-green-50 border border-green-100 rounded-xl p-5 text-center">
              <p className="text-green-800 font-semibold text-base">
                We solve every one of these issues, guaranteed.
              </p>
            </div>
          </div>
        </section>

        {/* What we do — features */}
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
                  alt={service.title}
                  className="w-full h-72 object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Reviews */}
        {relatedReviews.length > 0 && (
          <section className="section-padding bg-white">
            <div className="container-custom max-w-4xl">
              <h2 className="section-title mb-8 text-center">What Our Clients Say</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedReviews.map((r) => (
                  <ReviewCard key={r.id} review={r} />
                ))}
              </div>
              <div className="text-center mt-6">
                <Link to="/reviews" className="text-gold font-semibold text-sm hover:underline">
                  Read all 127 reviews →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        <section className="section-padding bg-gray-50">
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
