import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Premium service card — image top, content bottom, hover lift + image zoom.
 */
export default function ServiceCard({ service, className }) {
  const { slug, title, shortDesc, icon, image, features } = service;

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 16px 44px rgba(0,0,0,0.13)' }}
      transition={{ duration: 0.22, ease: 'easeOut' }}
      className={cn(
        'bg-white rounded-2xl border border-gray-100 overflow-hidden cursor-pointer group',
        'shadow-card transition-shadow duration-300',
        className
      )}
    >
      {/* ── Image ── */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-108"
          loading="lazy"
          style={{ '--tw-scale-x': '1.08', '--tw-scale-y': '1.08' }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/65 via-charcoal/15 to-transparent" />
        {/* Icon badge */}
        <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur shadow-xs rounded-xl px-3 py-2 text-xl leading-none">
          {icon}
        </div>
        {/* Arrow indicator */}
        <div className="absolute bottom-3.5 right-3.5 w-8 h-8 bg-gold rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-250 translate-x-2 group-hover:translate-x-0 shadow-btn">
          <ArrowRight size={14} className="text-white" />
        </div>
      </div>

      {/* ── Content ── */}
      <div className="p-6">
        <h3 className="font-extrabold text-charcoal text-[1.1rem] mb-2 group-hover:text-gold transition-colors duration-200 leading-snug">
          {title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed mb-4">{shortDesc}</p>

        {/* Features */}
        {features && (
          <ul className="mb-5 space-y-1.5">
            {features.slice(0, 3).map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                <span className="w-4 h-4 bg-gold/10 rounded-full flex items-center justify-center text-gold text-[9px] font-bold shrink-0">✓</span>
                {f}
              </li>
            ))}
          </ul>
        )}

        <Link
          to={`/services/${slug}`}
          className="inline-flex items-center gap-1.5 text-gold font-bold text-sm group/link"
          aria-label={`Learn more about ${title}`}
        >
          Learn More
          <ArrowRight size={14} className="transition-transform duration-200 group-hover/link:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
}
