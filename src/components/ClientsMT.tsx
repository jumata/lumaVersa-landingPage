import { Typography } from '@material-tailwind/react';
import type { ClientLogo as ClientLogoType } from '../types';

export default function ClientsMT({
  eyebrow = 'POPULAR CLIENTS',
  headline = 'Trusted by over 10,000+ clients',
  logos,
}: {
  eyebrow?: string;
  headline?: string;
  logos: ClientLogoType[];
}) {
  return (
    <section aria-labelledby="clients-heading" className="py-12 md:py-16">
      <div className="container">
        <Typography
          id="clients-heading"
          as="p"
          className="text-center text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-500"
        >
          {eyebrow}
        </Typography>

        <Typography
          as="h2"
          className="mt-1 text-center text-2xl md:text-3xl font-bold text-brand-800"
        >
          {headline}
        </Typography>

        <ul
          className="
            mt-8 grid items-center
            grid-cols-2 sm:grid-cols-3 lg:grid-cols-6
            gap-x-6 gap-y-6 sm:gap-x-10 md:gap-x-12
          "
        >
          {logos.map((logo) => (
            <li key={logo.id} className="flex items-center justify-center">
              {logo.src ? (
                <a
                  className="group inline-flex items-center"
                  aria-label={logo.name}
                  href={logo.href || undefined}
                  target={logo.href ? '_blank' : undefined}
                  rel={logo.href ? 'noreferrer' : undefined}
                >
                  <img
                    src={logo.src}
                    width={logo.width ?? 160}
                    height={logo.height ?? 48}
                    loading="lazy"
                    decoding="async"
                    alt={logo.name}
                    // Estética: gris suave → color al hover. Performance: sin filtros costosos.
                    className="
                      h-8 md:h-10 w-auto
                      opacity-70 grayscale contrast-75
                      group-hover:opacity-100 group-hover:grayscale-0 group-hover:contrast-100
                      transition-[opacity,filter] duration-200 ease-out
                    "
                    sizes="(min-width: 1024px) 160px, (min-width: 640px) 20vw, 35vw"
                    fetchpriority="low"
                  />
                </a>
              ) : (
                // Fallback tipográfico si no hay archivo de logo:
                <span
                  className="
                    inline-flex items-center rounded bg-slate-100
                    px-3 py-2 text-slate-400 uppercase tracking-wide text-sm md:text-base
                  "
                >
                  {logo.name}
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
