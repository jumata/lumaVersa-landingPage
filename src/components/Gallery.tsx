import type { GalleryItem } from '../types';
import { Card } from '../ui/Card';


const OverlayCard: React.FC<{ item: GalleryItem; className?: string }> = ({ item, className }) => (
  <Card className={`overflow-hidden rounded-2xl ${className || ''}`}>
    <div className="relative">
      <img src={item.image} alt={item.title} className="w-full h-56 object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/60" />
      <div className="absolute left-4 right-4 bottom-4 text-white">
        <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-white/20 text-white">{item.category}</span>
        <p className="text-xs opacity-90 mt-2">{item.author} · {item.date}</p>
        <h3 className="mt-1 text-lg leading-tight">{item.title}</h3>
      </div>
    </div>
  </Card>
);


export default function Gallery({ items }: { items: GalleryItem[] }) {
  return (
    <section id="galeria" className="py-16">
      <div className="container max-w-container">
        <h2 className="text-center text-brand-700 text-3xl sm:text-4xl font-extrabold tracking-wide mb-3">GALERÍA</h2>
        <p className="text-center text-sm text-slate-500 max-w-[760px] mx-auto mb-12 font-light">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>


        <div className="grid gap-6 md:grid-cols-2">
          <OverlayCard item={items[0]} />
          <OverlayCard item={items[1]} />
          <OverlayCard item={items[2]} className="md:col-span-2 h-full" />
        </div>
      </div>
    </section>
  );
}