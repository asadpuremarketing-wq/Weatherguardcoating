import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '../../lib/utils';

/**
 * Premium, accessible carousel — glass-morphism nav arrows + dot pagination.
 * `perView` controls how many slides show per breakpoint via Tailwind basis classes.
 */
export default function Carousel({
  items,
  renderItem,
  keyFor = (item, i) => item.id ?? i,
  perView = { base: 1, md: 2, lg: 3 },
  dark = false,
  className,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    loop: false,
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback((api) => {
    setSelectedIndex(api.selectedScrollSnap());
    setCanPrev(api.canScrollPrev());
    setCanNext(api.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect(emblaApi);
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => emblaApi.off('select', onSelect);
  }, [emblaApi, onSelect]);

  const basisClass = cn(
    perView.base === 1 && 'flex-[0_0_100%]',
    perView.md === 2 && 'md:flex-[0_0_50%]',
    perView.md === 1 && 'md:flex-[0_0_100%]',
    perView.lg === 3 && 'lg:flex-[0_0_33.3333%]',
    perView.lg === 4 && 'lg:flex-[0_0_25%]',
    perView.lg === 2 && 'lg:flex-[0_0_50%]'
  );

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden -mx-3 px-3" ref={emblaRef}>
        <div className="flex -ml-5">
          {items.map((item, i) => (
            <div key={keyFor(item, i)} className={cn('pl-5 min-w-0', basisClass)}>
              {renderItem(item, i)}
            </div>
          ))}
        </div>
      </div>

      {/* ── Nav arrows (glass morphism) ── */}
      {scrollSnaps.length > 1 && (
        <>
          <button
            type="button"
            aria-label="Previous slide"
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            disabled={!canPrev}
            className={cn(
              'hidden sm:flex absolute top-1/2 -translate-y-1/2 -left-5 z-10 w-11 h-11 items-center justify-center rounded-full',
              'backdrop-blur-md border transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none',
              dark
                ? 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                : 'bg-white/70 border-white/60 text-charcoal shadow-lift hover:bg-white/90'
            )}
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            onClick={() => emblaApi && emblaApi.scrollNext()}
            disabled={!canNext}
            className={cn(
              'hidden sm:flex absolute top-1/2 -translate-y-1/2 -right-5 z-10 w-11 h-11 items-center justify-center rounded-full',
              'backdrop-blur-md border transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none',
              dark
                ? 'bg-white/10 border-white/15 text-white hover:bg-white/20'
                : 'bg-white/70 border-white/60 text-charcoal shadow-lift hover:bg-white/90'
            )}
          >
            <ChevronRight size={20} />
          </button>
        </>
      )}

      {/* ── Dot pagination ── */}
      {scrollSnaps.length > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          {scrollSnaps.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => emblaApi && emblaApi.scrollTo(i)}
              className={cn(
                'h-2 rounded-full transition-all duration-300',
                i === selectedIndex
                  ? 'w-7 bg-gold'
                  : dark
                    ? 'w-2 bg-white/20 hover:bg-white/35'
                    : 'w-2 bg-gray-200 hover:bg-gray-300'
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}
