import { Card, Typography } from '@material-tailwind/react';
import type { GalleryItem } from '../types';


const OverlayCard: React.FC<{ item: GalleryItem; className?: string }> = ({ item, className }) => (
    <Card shadow={true} className={`overflow-hidden rounded-2xl ${className || ''}`}>
        <div className="relative">
            <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
            <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/20 px-2.5 py-1 text-xs font-semibold text-white">{item.category}</span>
                <Typography variant="small" className="mt-2 opacity-90">{item.author} · {item.date}</Typography>
                <Typography variant="h6" className="mt-1 leading-tight">{item.title}</Typography>
            </div>
        </div>
    </Card>
);


export default function GalleryMT({ items }: { items: GalleryItem[] }) {
    return (
        <section id="galeria" className="py-16">
            <div className="container max-w-container">
                <Typography variant="h3" className="mb-3 text-center font-extrabold tracking-wide text-brand-700">GALERÍA</Typography>
                <Typography className="mx-auto mb-12 max-w-[760px] text-center text-sm font-light text-slate-500">
                    Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics
                </Typography>


                <div className="grid gap-6 md:grid-cols-2">
                    <OverlayCard item={items[0]} />
                    <OverlayCard item={items[1]} />
                    <OverlayCard item={items[2]} className="md:col-span-2 h-full" />
                </div>
            </div>
        </section>
    );
}