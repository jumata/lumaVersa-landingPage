import type { About as AboutType } from '../types';
import { Card } from '../ui/Card';


export default function About({ title, paragraphs, image }: AboutType) {
  return (
    <section id="nosotros" className="py-16">
      <div className="container max-w-container">
        <h2 className="text-center text-brand-700 text-3xl sm:text-4xl font-extrabold tracking-wide mb-10">{title}</h2>


        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 items-start">
          <div className="grid gap-4">
            {paragraphs.map((p, i) => (
              <p key={i} className="m-0 text-slate-500">{p}</p>
            ))}
          </div>
          <div className="flex justify-center">
            <Card className="p-0">
              <img src={image} alt="" className="rounded-2xl shadow-elev max-w-md" />
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}