import { Card, Typography, Button } from '@material-tailwind/react';
import type { About as AboutType, Action, Feature } from '../types';

/** --- Iconos simples inline (sin dependencias nuevas) --- */
function FeatureIcon({ name, className = '' }: { name: string; className?: string }) {
  const common = 'h-9 w-9';
  const path = {
    users: <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0M21 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />,
    target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><path d="M22 12h-2M4 12H2M12 2v2M12 20v2"/></>,
    chart: <><path d="M3 3v18h18" /><rect x="7" y="8" width="3" height="7" /><rect x="12" y="5" width="3" height="10" /><rect x="17" y="11" width="3" height="4" /></>,
    bulb: <><path d="M9 18h6" /><path d="M10 22h4" /><path d="M2 12A10 10 0 1 1 22 12" /><path d="M15 13a3 3 0 1 0-6 0c0 1-1 2-1 3h8c0-1-1-2-1-3z" /></>,
  }[name as keyof any] ?? <circle cx="12" cy="12" r="10" />;
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      className={`${common} ${className}`} aria-hidden="true">
      {path}
    </svg>
  );
}

/** Botón de acción dinámico */
function Cta({ a }: { a: Action }) {
  const v = a.variant ?? 'primary';
  const go = () => (window.location.href = a.href);
  if (v === 'secondary') {
    return (
      <Button variant="outlined" color="blue"
        className="border-brand-200 text-brand-700 normal-case hover:bg-brand-50"
        onClick={go}>
        {a.label}
      </Button>
    );
  }
  if (v === 'link') {
    return <Button variant="text" className="text-brand-700 normal-case" onClick={go}>{a.label}</Button>;
  }
  return <Button className="bg-brand-600 normal-case hover:bg-brand-700" onClick={go}>{a.label}</Button>;
}

/** Card de feature con esquina recortada */
function FeatureCard({ f }: { f: Feature }) {
  const emph = !!f.emphasis;
  return (
    <div
      className={[
        'relative rounded-xl p-6 shadow-sm ring-1',
        emph
          ? 'bg-brand-600 text-white ring-brand-600/30'
          : 'bg-slate-50 text-slate-800 ring-slate-200',
        // notch superior-derecha:
        "after:content-[''] after:absolute after:-top-0 after:-right-0 after:h-12 after:w-12 after:bg-white after:[clip-path:polygon(0_0,100%_0,100%_100%)]",
      ].join(' ')}
    >
      <div className={['mb-3 inline-flex rounded-lg p-2', emph ? 'bg-white/15 text-white' : 'bg-brand-50 text-brand-700'].join(' ')}>
        <FeatureIcon name={f.icon} />
      </div>
      <h4 className={['text-lg font-semibold', emph ? 'text-white' : 'text-slate-900'].join(' ')}>{f.title}</h4>
      <p className={['mt-1 text-sm leading-relaxed', emph ? 'text-white/90' : 'text-slate-600'].join(' ')}>
        {f.text}
      </p>
    </div>
  );
}

export default function AboutMT(data: AboutType) {
  const {
    title,
    lead,
    paragraphs = [],
    // back-compat
    image,
    // NUEVO
    features = [],
    story,
  } = data;

  return (
    <section id="nosotros" className="relative py-20">
      <div className="container max-w-container">
        <Typography variant="h3" className="mb-6 text-center font-extrabold tracking-wide text-brand-700">
          {title}
        </Typography>

        <div className="grid gap-10 md:grid-cols-12">
          {/* Columna izquierda: encabezado + features */}
          <div className="md:col-span-7">
            {lead && (
              <Typography variant="lead" className="mb-3 text-slate-700">
                {lead}
              </Typography>
            )}
            {paragraphs.length > 0 && (
              <Typography variant="paragraph" className="mb-6 max-w-[64ch] text-slate-600">
                {paragraphs.join(' ')}
              </Typography>
            )}

            {/* Grid 2x2 de features (similar al diseño de referencia) */}
            {features.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2">
                {features.slice(0, 4).map((f, i) => (
                  <FeatureCard key={i} f={f} />
                ))}
              </div>
            )}
          </div>

          {/* Columna derecha: historia con imagen y CTA */}
          <div className="md:col-span-5">
            <Card shadow={false} className="rounded-2xl border border-sky-200 bg-white p-0 shadow-sm">
              {(story?.image ?? image) && (
                <img
                  src={story?.image ?? image!}
                  alt=""
                  className="h-56 w-full rounded-t-2xl object-cover md:h-64"
                />
              )}

              <div className="space-y-3 p-6">
                <Typography variant="h6" className="text-slate-900">
                  {story?.title ?? 'Nuestra historia y resultados'}
                </Typography>

                {(story?.paragraphs ?? paragraphs).slice(0, 2).map((p, i) => (
                  <Typography key={i} variant="small" className="text-slate-600">
                    {p}
                  </Typography>
                ))}

                {story?.cta && (
                  <div className="pt-2">
                    <Cta a={story.cta} />
                  </div>
                )}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
