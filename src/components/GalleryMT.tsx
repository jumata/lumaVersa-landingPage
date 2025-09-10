import { Card, Typography } from '@material-tailwind/react';
import type { GalleryItem } from '../types';
import { useEffect, useRef, useState, useCallback } from 'react';

const OverlayCard: React.FC<{ item: GalleryItem; className?: string }> = ({ item, className }) => (
  <Card shadow={false} className={`group overflow-hidden rounded-2xl ${className || ''}`}>
    <div className="relative">
      <img
        src={item.image}
        alt={item.title}
        className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03] md:h-80"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/0 to-black/70" />
      <div className="absolute bottom-4 left-4 right-4 text-white">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold backdrop-blur-sm">
          {item.category}
        </span>
        <Typography variant="small" className="mt-2 opacity-90">
          {item.author} · {item.date}
        </Typography>
        <Typography variant="h6" className="mt-1 leading-tight drop-shadow-sm">
          {item.title}
        </Typography>
      </div>
    </div>
  </Card>
);

export default function GalleryMT({ items }: { items: GalleryItem[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const scrollTo = useCallback((i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const slides = Array.from(track.children) as HTMLElement[];
    const el = slides[i];
    if (!el) return;
    // desplaza el carril horizontalmente y NO la página
    const left = el.offsetLeft - (track.clientWidth - el.clientWidth) / 2;
    track.scrollTo({ left, behavior: 'smooth' });
  }, []);


  const next = () => setIndex((i) => (i + 1) % items.length);
  const prev = () => setIndex((i) => (i - 1 + items.length) % items.length);

  // Sincroniza el scroll cuando cambia el índice
  useEffect(() => {
    scrollTo(index);
  }, [index, scrollTo]);

  // Detecta el slide centrado al hacer scroll manual
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const onScroll = () => {
      const slides = Array.from(track.children) as HTMLElement[];
      const center = track.scrollLeft + track.clientWidth / 2;
      let nearest = 0;
      let min = Infinity;
      slides.forEach((el, i) => {
        const mid = el.offsetLeft + el.clientWidth / 2;
        const d = Math.abs(mid - center);
        if (d < min) {
          min = d;
          nearest = i;
        }
      });
      setIndex(nearest);
    };
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, []);

  // Autoplay (6s)
  useEffect(() => {
    if (items.length < 2) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % items.length), 6000);
    return () => clearInterval(id);
  }, [items.length]);

  return (
    <section id="galeria" className="py-20">
      <div className="container max-w-container">
        <Typography variant="h3" className="mb-2 text-center font-extrabold tracking-wide text-brand-700">
          GALERÍA
        </Typography>
        <Typography className="mx-auto mb-10 max-w-[760px] text-center text-sm font-light text-slate-600">
          Explora las últimas notas y recursos visuales de nuestros talleres.
        </Typography>

        <div className="relative">
          {/* Fades laterales */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-12 bg-gradient-to-r from-white to-transparent md:w-16" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-12 bg-gradient-to-l from-white to-transparent md:w-16" />

          {/* Track / Slides */} 
          <div
          ref={trackRef}
          className="flex snap-x snap-mandatory gap-6 overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth px-1"
          >  
            {items.map((it) => (
              <div key={it.title} className="snap-center shrink-0 basis-[88%] md:basis-[60%]">
                <OverlayCard item={it} className="h-full shadow-elev" />
              </div>
            ))}
          </div>

          {/* Controles */}
          <button
            onClick={prev}
            aria-label="Anterior"
            className="absolute left-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-700 shadow-md ring-1 ring-slate-200 backdrop-blur hover:bg-white md:left-3"
          >
            ‹
          </button>
          <button
            onClick={next}
            aria-label="Siguiente"
            className="absolute right-2 top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/90 px-3 py-2 text-slate-700 shadow-md ring-1 ring-slate-200 backdrop-blur hover:bg-white md:right-3"
          >
            ›
          </button>
        </div>

        {/* Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Ir al slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? 'w-6 bg-brand-600' : 'w-2 bg-slate-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
