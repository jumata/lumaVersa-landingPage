import { Card, CardBody, Typography, Button, Chip } from '@material-tailwind/react';
import type { ServiceTier } from '../types';

const TierCard = ({ t }: { t: ServiceTier }) => {
    const highlight = t.highlighted;
    return (
        <Card shadow={true} className={`border border-slate-200 p-7 ${highlight ? 'bg-gradient-to-b from-brand-700 to-brand-600 text-white scale-[1.02]' : 'bg-white'}`}>
            <CardBody className="p-0">
                <Typography variant="h6" className="m-0 tracking-wide">{t.name}</Typography>
                <Typography variant="small" className={`${highlight ? 'text-white/90' : 'text-slate-500'}`}>
                    Organize across all apps by hand
                </Typography>


                <div className="my-2 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold">{t.price}</span>
                    <span className={`${highlight ? 'text-white/90' : 'text-slate-600'}`}>$</span>
                    <span className="text-xs">&nbsp;{t.period}</span>
                </div>


                <ul className="my-4 grid gap-2">
                    {t.features.map((f, i) => (
                        <li key={i} className={`flex items-center gap-1.5 ${highlight ? '' : 'text-slate-800'}`}>
                            <Chip variant={highlight ? 'filled' : 'ghost'} color={highlight ? 'white' : 'blue-gray'} value="" className={`${highlight ? 'bg-white/20 text-white' : 'bg-brand-50 text-brand-700'} h-6 min-w-6 px-2`} />
                            <span>{f}</span>
                        </li>
                    ))}
                </ul>


                <Button color={highlight ? 'white' : 'blue'} className={highlight ? 'text-brand-700' : ''} onClick={() => (window.location.href = t.cta.href)}>
                    {t.cta.label}
                </Button>
            </CardBody>
        </Card>
    );
};


export default function ServicesMT({ tiers }: { tiers: ServiceTier[] }) {
    return (
        <section id="servicios" className="py-16">
            <div className="container max-w-container">
                <Typography variant="h3" className="mb-3 text-center font-extrabold tracking-wide text-brand-700">SERVICIOS</Typography>
                <Typography className="mx-auto mb-12 max-w-[760px] text-center text-sm font-light text-slate-500">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </Typography>


                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {tiers.map((t) => (
                        <TierCard key={t.id} t={t} />
                    ))}
                </div>
            </div>
        </section>
    );
}