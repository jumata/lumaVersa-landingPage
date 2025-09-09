import type { ServiceTier } from '../types';
import { Check } from './Icons';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Chip } from '../ui/Chip';


const TierCard = ({ t }: { t: ServiceTier }) => {
  const highlight = t.highlighted;
  return (
    <Card className={`p-7 border border-slate-200 ${highlight ? 'bg-gradient-to-b from-brand-700 to-brand-600 text-white scale-[1.02]' : 'bg-white'}`}>
      <div>
        <h3 className="m-0 font-semibold tracking-wide">{t.name}</h3>
        <p className={`text-xs ${highlight ? 'text-white/90' : 'text-slate-500'}`}>Organize across all apps by hand</p>
      </div>


      <div className="flex items-baseline gap-1 my-2">
        <span className="text-4xl font-extrabold">{t.price}</span>
        <span className={`${highlight ? 'text-white/90' : 'text-slate-600'}`}>$</span>
        <span className="text-xs">&nbsp;{t.period}</span>
      </div>


      <ul className="grid gap-2 my-4">
        {t.features.map((f, i) => (
          <li key={i} className={`flex items-center gap-1.5 ${highlight ? '' : 'text-slate-800'}`}>
            <Chip className={highlight ? 'bg-white/20 text-white' : ''}><Check /></Chip>
            <span>{f}</span>
          </li>
        ))}
      </ul>


      <div>
        <Button className={highlight ? 'bg-white text-brand-700 hover:bg-white' : ''} asChild href={t.cta.href}>
          <span>{t.cta.label}</span>
        </Button>
      </div>
    </Card>
  );
};


export default function Services({ tiers }: { tiers: ServiceTier[] }) {
  return (
    <section id="servicios" className="py-16">
      <div className="container max-w-container">
        <h2 className="text-center text-brand-700 text-3xl sm:text-4xl font-extrabold tracking-wide mb-3">SERVICIOS</h2>
        <p className="text-center text-sm text-slate-500 max-w-[760px] mx-auto mb-12 font-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>


        <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
          {tiers.map(t => <TierCard key={t.id} t={t} />)}
        </div>
      </div>
    </section>
  );
}