import { Card, CardBody, Avatar, Typography, Button } from '@material-tailwind/react';
import type { Workshop } from '../types';

function Stars({ value }: { value: number }) {
  return (
    <div className="mt-1 inline-flex items-center gap-1 text-amber-500" aria-label={`${value} de 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < value ? 'opacity-100' : 'opacity-30'}>★</span>
      ))}
    </div>
  );
}

export default function WorkshopsMT({ items }: { items: Workshop[] }) {
  return (
    <section id="workshops" className="relative py-20 bg-slate-50/50">
      <div className="container max-w-container">
        <Typography
          variant="h3"
          className="mb-2 text-center font-extrabold tracking-wide text-brand-700"
        >
          WORKSHOPS
        </Typography>

        <Typography className="mx-auto mb-12 max-w-[760px] text-center text-sm font-light text-slate-600">
          Conoce a quienes lideran nuestros talleres: experiencia real, aprendizaje práctico y un enfoque 100% aplicado.
        </Typography>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((w) => (
            <Card
              key={w.name}
              shadow={false}
              className="group overflow-hidden rounded-2xl border border-slate-100 bg-white p-8 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <CardBody className="grid place-items-center gap-3 p-0 text-center">
                <Avatar
                  src={w.avatar}
                  alt={w.name}
                  variant="circular"
                  className="h-28 w-28 ring-2 ring-brand-100 shadow-md transition-transform duration-300 group-hover:scale-105"
                />
                <Typography variant="h6" className="m-0 text-slate-800">
                  {w.name}
                </Typography>

                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                  {w.role}
                </span>

                <Typography variant="small" className="max-w-[30ch] leading-relaxed text-slate-600">
                  {w.description}
                </Typography>

                <Stars value={w.rating} />

                <Button size="sm" className="mt-2 bg-brand-600 normal-case hover:bg-brand-700">
                  Ver más
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
