import { Card, Typography } from '@material-tailwind/react';
import type { About as AboutType } from '../types';


export default function AboutMT({ title, paragraphs, image }: AboutType) {
    return (
        <section id="nosotros" className="py-16">
            <div className="container max-w-container">
                <Typography variant="h3" className="mb-10 text-center font-extrabold tracking-wide text-brand-700">{title}</Typography>
                <div className="grid grid-cols-1 items-start gap-8 md:grid-cols-2">
                    <div className="grid gap-4">
                        {paragraphs.map((p, i) => (
                            <Typography key={i} variant="small" color="gray" className="m-0 text-slate-500">{p}</Typography>
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <Card shadow={true} className="p-0">
                            <img src={image} alt="" className="max-w-md rounded-2xl" />
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
}