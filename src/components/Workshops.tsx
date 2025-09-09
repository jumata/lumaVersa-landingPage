import type { Workshop } from '../types';
import { Rating } from './Rating';
import { Card } from '../ui/Card';


export default function Workshops({ items }: { items: Workshop[] }) {
  return (
    <section id="workshops" className="py-16">
      <div className="container max-w-container">
        <h2 className="text-center text-brand-700 text-3xl sm:text-4xl font-extrabold tracking-wide mb-3">WORKSHOPS</h2>
        <p className="text-center text-sm text-slate-500 max-w-[760px] mx-auto mb-12 font-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>


        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(w => (
            <Card key={w.name} className="p-6">
              <div className="grid place-items-center gap-2">
                <img src={w.avatar} width="88" height="88" alt={`Foto de ${w.name}`} className="rounded-full object-cover" />
                <h3 className="m-0 font-semibold">{w.name}</h3>
                <span className="text-xs text-slate-500">{w.role}</span>
                <p className="text-xs text-slate-500 text-center">{w.description}</p>
                <Rating value={w.rating} />
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}