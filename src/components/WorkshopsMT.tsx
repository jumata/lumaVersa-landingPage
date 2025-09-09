import { Card, CardBody, Avatar, Typography } from '@material-tailwind/react';
import type { Workshop } from '../types';


function Stars({ value }: { value: number }) {
    return (
        <div className="inline-flex gap-1 text-amber-500" aria-label={`${value} de 5`}>
            {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className={i < value ? 'opacity-100' : 'opacity-30'}>★</span>
            ))}
        </div>
    );
}


export default function WorkshopsMT({ items }: { items: Workshop[] }) {
    return (
        <section id="workshops" className="py-16">
            <div className="container max-w-container">
                <Typography variant="h3" className="mb-3 text-center font-extrabold tracking-wide text-brand-700">WORKSHOPS</Typography>
                <Typography className="mx-auto mb-12 max-w-[760px] text-center text-sm font-light text-slate-500">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </Typography>


                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((w) => (
                        <Card key={w.name} shadow={true} className="p-6">
                            <CardBody className="grid place-items-center gap-2 p-0">
                                <Avatar src={w.avatar} alt={w.name} size="lg" className="h-22 w-22" />
                                <Typography variant="h6">{w.name}</Typography>
                                <Typography variant="small" color="gray" className="text-slate-500">{w.role}</Typography>
                                <Typography variant="small" color="gray" className="text-center text-slate-500">{w.description}</Typography>
                                <Stars value={w.rating} />
                            </CardBody>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}