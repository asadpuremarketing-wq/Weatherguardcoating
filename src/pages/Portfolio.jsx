import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import portfolioItems, { portfolioCategories } from '../data/portfolio';
import CTASection from '../components/common/CTASection';
import { X, MapPin, Calendar } from 'lucide-react';
import { cn } from '../lib/utils';
import BreadcrumbSchema from '../components/seo/BreadcrumbSchema';

const BASE_URL = 'https://weatherguardcoating.ca';

/**
 * Portfolio page with filterable image grid and modal.
 */
export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalItem, setModalItem] = useState(null);

  const filtered = activeFilter === 'all'
    ? portfolioItems
    : portfolioItems.filter((p) => p.category === activeFilter);

  return (
    <>
      <Helmet>
        <title>Painting Portfolio | London Ontario Projects | Weather Guard Coating</title>
        <meta
          name="description"
          content="Browse before & after photos of residential, commercial, farm, and roof coating projects completed by Weather Guard Coating across London and Southwestern Ontario."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${BASE_URL}/portfolio`} />
        <meta property="og:title" content="Painting Portfolio | London Ontario Projects | Weather Guard Coating" />
        <meta property="og:description" content="Real before & after photos of painting projects across London, Ontario and Southwestern Ontario." />
        <meta property="og:url" content={`${BASE_URL}/portfolio`} />
        <meta property="og:type" content="website" />
      </Helmet>

      <BreadcrumbSchema
        items={[
          { name: 'Home', url: BASE_URL },
          { name: 'Portfolio', url: `${BASE_URL}/portfolio` },
        ]}
      />

      <main id="main-content" className="pt-24">
        {/* Page header */}
        <section className="bg-charcoal py-20">
          <div className="container-custom text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <p className="text-gold font-semibold text-sm uppercase tracking-widest mb-3">Our Work</p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Project Portfolio</h1>
              <p className="text-gray-400 text-lg max-w-xl mx-auto">
                Real projects. Real transformations. Browse work completed across Southwestern Ontario.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filter tabs */}
        <section className="bg-white border-b border-gray-100 sticky top-16 z-30">
          <div className="container-custom py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {portfolioCategories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveFilter(cat.id)}
                  className={cn(
                    'px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200',
                    activeFilter === cat.id
                      ? 'bg-gold text-white shadow-md'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  )}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <AnimatePresence>
                {filtered.map((item) => (
                  <motion.div
                    key={item.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.35 }}
                    className="card p-0 overflow-hidden cursor-pointer group"
                    onClick={() => setModalItem(item)}
                  >
                    {/* After image */}
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.after}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/30 transition-all duration-300 flex items-center justify-center">
                        <span className="text-white font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity bg-charcoal/60 px-4 py-2 rounded-full">
                          View Before &amp; After
                        </span>
                      </div>
                      {/* Category tag */}
                      <div className="absolute top-3 left-3 bg-gold text-white text-xs font-bold px-2.5 py-1 rounded-full capitalize">
                        {item.category}
                      </div>
                    </div>
                    {/* Info */}
                    <div className="p-4">
                      <h3 className="font-bold text-charcoal text-sm mb-1.5 group-hover:text-gold transition-colors">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3 text-gray-400 text-xs">
                        <span className="flex items-center gap-1"><MapPin size={11} />{item.location}</span>
                        <span className="flex items-center gap-1"><Calendar size={11} />{item.year}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <CTASection title="Like What You See?" subtitle="Get your own stunning transformation. Free estimates." />

        {/* Modal */}
        <AnimatePresence>
          {modalItem && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-charcoal/90 flex items-center justify-center p-4"
              onClick={() => setModalItem(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="bg-white rounded-2xl overflow-hidden max-w-3xl w-full shadow-dark"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Before/After images */}
                <div className="grid grid-cols-2 gap-0.5">
                  <div className="relative">
                    <img src={modalItem.before} alt="Before" className="w-full h-56 object-cover" />
                    <div className="absolute top-2 left-2 bg-charcoal/80 text-white text-xs font-bold px-2 py-1 rounded">BEFORE</div>
                  </div>
                  <div className="relative">
                    <img src={modalItem.after} alt="After" className="w-full h-56 object-cover" />
                    <div className="absolute top-2 right-2 bg-gold text-white text-xs font-bold px-2 py-1 rounded">AFTER</div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-charcoal mb-2">{modalItem.title}</h3>
                  <div className="flex items-center gap-4 text-gray-400 text-sm mb-3">
                    <span className="flex items-center gap-1"><MapPin size={13} />{modalItem.location}</span>
                    <span className="flex items-center gap-1"><Calendar size={13} />{modalItem.year}</span>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">{modalItem.description}</p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {modalItem.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full capitalize">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => setModalItem(null)}
                  className="absolute top-4 right-4 bg-white shadow-md rounded-full p-2 hover:bg-gray-100 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  );
}
