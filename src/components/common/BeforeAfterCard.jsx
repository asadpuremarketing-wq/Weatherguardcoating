import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * Before/After image comparison slider, drag to reveal.
 * Improved with better labels, border, and shadow framing.
 */
export default function BeforeAfterCard({ item }) {
  const { title, before, after, location, description, category, resultLine } = item;
  const [sliderPos, setSliderPos] = useState(48);
  const [isDragging, setIsDragging] = useState(false);

  const calcPos = useCallback((clientX, rect) => {
    const x = clientX - rect.left;
    return Math.max(6, Math.min(94, (x / rect.width) * 100));
  }, []);

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setSliderPos(calcPos(e.clientX, e.currentTarget.getBoundingClientRect()));
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
    setSliderPos(calcPos(e.touches[0].clientX, e.currentTarget.getBoundingClientRect()));
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-card hover:shadow-card-hover transition-shadow duration-300 overflow-hidden group">
      {/* ── Comparison area ── */}
      <div
        className="relative aspect-[4/3] overflow-hidden cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        aria-label={`Before and after comparison for ${title}`}
      >
        {/* After image (base) */}
        <img
          src={after}
          alt={`After, ${title}`}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          loading="lazy"
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPos}%` }}
        >
          <img
            src={before}
            alt={`Before, ${title}`}
            className="absolute inset-0 object-cover"
            style={{ width: `${10000 / sliderPos}%`, maxWidth: 'none', height: '100%' }}
            draggable={false}
            loading="lazy"
          />
        </div>

        {/* ── Slider line + handle ── */}
        <div
          className="absolute top-0 bottom-0 w-[3px] bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
          style={{ left: `${sliderPos}%` }}
        >
          {/* Handle */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-dark flex items-center justify-center border-2 border-gold/30"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="flex items-center gap-0.5 text-charcoal">
              <span className="text-[11px] font-black">◀</span>
              <span className="text-[11px] font-black">▶</span>
            </div>
          </motion.div>
        </div>

        {/* ── BEFORE badge ── */}
        <div className="absolute top-3 left-3 bg-charcoal/85 backdrop-blur-sm text-white text-[11px] font-black px-3 py-1.5 rounded-full tracking-widest border border-white/10">
          BEFORE
        </div>

        {/* ── AFTER badge ── */}
        <div className="absolute top-3 right-3 bg-gold text-white text-[11px] font-black px-3 py-1.5 rounded-full tracking-widest shadow-btn">
          AFTER
        </div>

        {/* Drag hint, shown initially, fades once dragged */}
        {sliderPos === 48 && (
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur-sm text-white text-[10px] font-semibold px-3 py-1 rounded-full flex items-center gap-1.5 whitespace-nowrap pointer-events-none">
            <span>←</span> Drag to compare <span>→</span>
          </div>
        )}
      </div>

      {/* ── Card info ── */}
      <div className="p-5 border-t border-gray-100">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="font-bold text-charcoal text-sm leading-snug">{title}</h3>
          {category && (
            <span className="badge-dark shrink-0 capitalize text-[10px]">{category}</span>
          )}
        </div>
        <p className="text-gray-400 text-xs font-medium mb-1.5">{location}</p>
        {resultLine ? (
          <p className="text-emerald-700 text-xs font-semibold leading-snug">&#10003; {resultLine}</p>
        ) : description ? (
          <p className="text-gray-500 text-xs leading-relaxed">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
