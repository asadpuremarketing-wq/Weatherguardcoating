import { Play, Star } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Video testimonial card, thumbnail with animated play overlay.
 */
export default function VideoTestimonial({ testimonial }) {
  const { name, location, rating, thumbnail, videoUrl, excerpt } = testimonial;
  const [playing, setPlaying] = useState(false);

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-all duration-300 overflow-hidden">
      {/* ── Video area ── */}
      <div
        className="relative aspect-video bg-gray-100 overflow-hidden cursor-pointer group"
        onClick={() => setPlaying(true)}
        role="button"
        aria-label={`Play video testimonial from ${name}`}
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
      >
        <img
          src={thumbnail}
          alt={`${name} testimonial`}
          className="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            whileHover={{ scale: 1.12 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="w-[68px] h-[68px] bg-white rounded-full flex items-center justify-center shadow-dark ring-4 ring-white/20"
          >
            <Play className="text-charcoal ml-1.5" size={26} fill="currentColor" />
          </motion.div>
        </div>

        {/* Quote pill at bottom */}
        <div className="absolute bottom-3 left-3 right-3">
          <p className="text-white text-xs font-medium leading-snug line-clamp-2 drop-shadow-md">
            "{excerpt}"
          </p>
        </div>

        {/* Playing state */}
        {playing && videoUrl && (
          <iframe
            className="absolute inset-0 w-full h-full"
            src={`${videoUrl}?autoplay=1`}
            title={`Video testimonial, ${name}`}
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        )}
      </div>

      {/* ── Card body ── */}
      <div className="p-5">
        {/* Stars */}
        <div className="flex items-center gap-0.5 mb-3">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} size={14} className={i < rating ? 'fill-gold text-gold' : 'text-gray-200 fill-gray-200'} />
          ))}
        </div>

        {/* Name + location */}
        <p className="font-bold text-charcoal text-sm">{name}</p>
        <p className="text-gray-400 text-xs font-medium mt-0.5">{location}</p>
      </div>
    </div>
  );
}
