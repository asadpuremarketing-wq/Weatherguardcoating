import { Play } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Hero video component with thumbnail and play button.
 */
export default function HeroVideo() {
  const [playing, setPlaying] = useState(false);
  const YOUTUBE_ID = 'aTl1iJdEjWY'; // Weather Guard Coating, main hero video (landscape)

  if (playing) {
    return (
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-dark ring-1 ring-white/10">
        <iframe
          className="w-full h-full"
          src={`https://www.youtube.com/embed/${YOUTUBE_ID}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
          title="Weather Guard Coatings, See Our Work"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
    );
  }

  return (
    <div
      className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-dark cursor-pointer group ring-1 ring-white/10"
      onClick={() => setPlaying(true)}
      role="button"
      aria-label="Play company video"
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && setPlaying(true)}
    >
      {/* Thumbnail */}
      <img
        src="/images/hero-video-thumbnail.jpg"
        alt="Weather Guard Coatings team at work"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient overlay, heavier at bottom for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/35 to-transparent" />

      {/* Centered play button */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 300 }}
          className="w-[72px] h-[72px] bg-gold rounded-full flex items-center justify-center shadow-glow-gold ring-4 ring-white/20"
        >
          <Play className="text-white ml-2" size={30} fill="white" />
        </motion.div>
        <p className="text-white font-semibold text-sm drop-shadow-md">
          See Our Work in Action
        </p>
      </div>

      {/* Duration badge */}
      <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
        <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
        Watch · 2 min
      </div>

      {/* Top-right: play pulse ring animation */}
      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-2.5 h-2.5 bg-gold rounded-full animate-pulse-soft" />
      </div>
    </div>
  );
}
