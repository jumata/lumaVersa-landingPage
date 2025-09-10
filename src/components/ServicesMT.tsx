import { Card, CardBody, Typography, Button } from '@material-tailwind/react';
import type { ServiceTier } from '../types';
import { useMemo, useState } from 'react';

/* Icono simple: check */
const Check = ({ className = '' }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M20 6L9 17l-5-5" />
  </svg>
);

/* Tarjeta de plan */
const TierCard = ({ t, yearly }: { t: ServiceTier; yearly: boolean }) => {
  const highlight = !!t.highlighted;

  // price viene mensual como string -> calculamos anual con -20%
  const { displayPrice, periodText, perMonthHint } = useMemo(() => {
    const base = parseFloat(t.price || '0') || 0;
    if (!yearly) {
      return {
        displayPrice: base,
        periodText: '/mes',
        perMonthHint: null as null | string,
      };
    }
    const yearlyTotal = base * 12 * 0.8; // -20%
    return {
      displayPrice: yearlyTotal,
      periodText: '/año',
      perMonthHint: `equiv. $${(yearlyTotal / 12).toFixed(2)}/mes`,
    };
  }, [t.price, yearly]);

  return (
    <Card
      shadow={false}
      className={[
        'relative rounded-2xl border p-8 transition-all',
        highlight
          ? 'scale-[1.03] border-brand-500/20 bg-gradient-to-b from-brand-700 to-brand-600 text-white shadow-xl ring-1 ring-brand-500/30'
          : 'border-slate-200 bg-white hover:shadow-lg',
      ].join(' ')}
    >
      {highlight && (
        <span className="absolute -top-3 right-4 rounded-full bg-white/20 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
          Más popular
        </span>
      )}

      <CardBody className="p-0">
        <Typography variant="h6" className="m-0 tracking-wide">
          {t.name}
        </Typography>
        <Typography
          variant="small"
          className={highlight ? 'text-white/90' : 'text-slate-500'}
        >
          Organize across all apps by hand
        </Typography>

        {/* Precio */}
        <div className="my-5">
          <div className="flex items-end gap-1">
            <span className="text-xl font-semibold leading-none">$</span>
            <span className="text-5xl font-extrabold leading-none tracking-tight">
              {displayPrice.toFixed(displayPrice % 1 === 0 ? 0 : 2)}
            </span>
            <span className={['mb-1 text-xs', highlight ? 'text-white/80' : 'text-slate-600'].join(' ')}>
              {periodText}
            </span>
          </div>
          {perMonthHint && (
            <div className={['mt-1 text-xs', highlight ? 'text-white/80' : 'text-slate-500'].join(' ')}>
              {perMonthHint}
            </div>
          )}
        </div>

        {/* Features */}
        <ul className="my-4 grid gap-3">
          {t.features.map((f, i) => (
            <li key={i} className="flex items-start gap-2">
              <span
                className={[
                  'grid h-6 w-6 place-items-center rounded-md',
                  highlight ? 'bg-white/20 text-white' : 'bg-emerald-100 text-emerald-700',
                ].join(' ')}
              >
                <Check className="h-4 w-4" />
              </span>
              <span className={highlight ? 'text-white/95' : 'text-slate-700'}>{f}</span>
            </li>
          ))}
        </ul>

        <Button
          color={highlight ? 'white' : 'blue'}
          className={highlight ? 'text-brand-700' : 'bg-brand-600 normal-case hover:bg-brand-700'}
          onClick={() => (window.location.href = t.cta.href)}
        >
          {t.cta.label}
        </Button>
      </CardBody>
    </Card>
  );
};

export default function ServicesMT({ tiers }: { tiers: ServiceTier[] }) {
  const [yearly, setYearly] = useState(false);

  // intentamos centrar la destacada si existe
  const ordered = useMemo(() => {
    const idx = tiers.findIndex((t) => t.highlighted);
    if (idx === -1 || tiers.length !== 3) return tiers;
    const copy = [...tiers];
    const [pop] = copy.splice(idx, 1);
    copy.splice(1, 0, pop);
    return copy;
  }, [tiers]);

  return (
    <section id="servicios" className="py-20 bg-slate-50/50">
      <div className="container max-w-container">
        <Typography variant="h3" className="mb-2 text-center font-extrabold tracking-wide text-brand-700">
          SERVICIOS
        </Typography>
        <Typography className="mx-auto mb-8 max-w-[760px] text-center text-sm font-light text-slate-600">
          Elige el plan que mejor se adapta a tu equipo.
        </Typography>

        {/* Toggle Mensual/Anual */}
        <div className="mb-8 flex justify-center">
          <div className="inline-flex items-center rounded-full bg-slate-100 p-1 text-sm">
            <button
              onClick={() => setYearly(false)}
              className={[
                'rounded-full px-4 py-1.5 transition',
                !yearly ? 'bg-white shadow text-slate-900' : 'text-slate-600',
              ].join(' ')}
            >
              Mensual
            </button>
            <button
              onClick={() => setYearly(true)}
              className={[
                'rounded-full px-4 py-1.5 transition',
                yearly ? 'bg-white shadow text-slate-900' : 'text-slate-600',
              ].join(' ')}
            >
              Anual <span className="ml-1 font-semibold text-emerald-600">-20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {ordered.map((t) => (
            <TierCard key={t.id} t={t} yearly={yearly} />
          ))}
        </div>
      </div>
    </section>
  );
}
