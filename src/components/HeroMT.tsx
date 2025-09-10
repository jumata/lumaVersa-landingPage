import { Typography, Card } from '@material-tailwind/react';
import type { Hero as HeroType } from '../types';


export default function HeroMT({ bgImage, titleLines, subtitle }: HeroType) {
    return (
        <section id="home">
            <div className="relative min-h-[72vh] grid place-items-center overflow-hidden border-b border-slate-200">
                <img src={bgImage} alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover" />
                <div className="container relative py-16">
                    <Card className="bg-white/70 p-[min(6vw,40px)]">
                        <Typography as="div" className="font-monoton font-thin leading-[0.82] tracking-[0.10em] text-center text-brand-600 font-light tracking-wide [font-size:clamp(36px,7vw,92px)]">
                            {titleLines.map((t, i) => (
                                <span key={i} className="block">{t}</span>
                            ))}
                        </Typography>
                        <Typography className="mt-4 text-center font-medium text-brand-700/90">
                            {subtitle.join(' · ')}
                        </Typography>
                    </Card>
                </div>
            </div>
        </section>
    );
}