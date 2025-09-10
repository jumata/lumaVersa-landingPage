import type { Hero as HeroType } from '../types';


export default function Hero({ bgImage, titleLines, subtitle }: HeroType) {
  return (
    <section id="home" aria-label="Hero">
      <div className="relative min-h-[72vh] grid place-items-center overflow-hidden border-b border-slate-200">
        <img src={bgImage} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
        <div className="container relative py-16">
          <div className="bg-white/70 rounded-xl shadow-elev p-[min(6vw,40px)]">
            <h1 className="font-monoton font-normal leading-[0.95] tracking-[0.06em] text-center text-brand-700 [font-size:clamp(40px,8vw,98px)]">
              {titleLines.map((t, i) => (
                <span key={i} className="block">{t}</span>
              ))}
            </h1>
            <p className="text-center text-brand-700/90 mt-4 font-medium">
              {subtitle.join(' · ')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}