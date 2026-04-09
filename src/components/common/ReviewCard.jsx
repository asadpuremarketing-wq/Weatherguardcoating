import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

/**
 * Premium review card — Google-style with hover lift.
 */
export default function ReviewCard({ review, className }) {
  const { name, location, rating, date, text, service, avatar, source } = review;

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'bg-white rounded-2xl border border-gray-100 p-7 flex flex-col gap-4',
        'shadow-card hover:shadow-card-hover transition-shadow duration-300',
        className
      )}
    >
      {/* ── Header ── */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          {/* Avatar */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-charcoal to-charcoal-muted flex items-center justify-center text-white font-bold text-sm shrink-0 shadow-xs">
            {avatar}
          </div>
          <div>
            <p className="font-bold text-charcoal text-sm leading-tight">{name}</p>
            <p className="text-gray-400 text-xs mt-0.5 font-medium">{location}</p>
          </div>
        </div>
        {/* Source badge */}
        <span className="text-[11px] text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full font-semibold shrink-0 tracking-wide">
          {source}
        </span>
      </div>

      {/* ── Stars + date ── */}
      <div className="flex items-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={14}
            className={i < rating ? 'fill-gold text-gold' : 'text-gray-200 fill-gray-200'}
          />
        ))}
        <span className="text-xs text-gray-400 ml-2 font-medium">{date}</span>
      </div>

      {/* ── Quote text ── */}
      <div className="relative flex-1">
        <Quote className="w-7 h-7 absolute -top-1 -left-1 pointer-events-none" style={{ color: 'rgba(201,168,76,0.18)' }} />
        <p className="text-gray-600 text-[0.875rem] leading-[1.75] pl-5 line-clamp-4">
          {text}
        </p>
      </div>

      {/* ── Service tag ── */}
      {service && (
        <div className="pt-3 border-t border-gray-100 mt-auto">
          <span className="badge-dark">
            {service}
          </span>
        </div>
      )}
    </motion.div>
  );
}
