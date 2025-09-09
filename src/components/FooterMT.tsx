import { Card, Typography, Button, Input } from '@material-tailwind/react';
import type { Footer as FooterType } from '../types';


export default function FooterMT({ newsletterTitle, logos, columns, contact, social, copyright }: FooterType) {
    return (
        <footer id="contacto" className="py-16">
            <div className="container grid max-w-container gap-8">
                <div className="flex flex-wrap items-center justify-between gap-6">
                    {logos.map((src, i) => (
                        <img key={i} src={src} alt="" className="h-[34px]" />
                    ))}
                </div>


                <Card shadow={true} className="grid items-center gap-4 bg-gradient-to-r from-brand-700 to-sky-500 p-5 text-white md:grid-cols-2">
                    <Typography variant="h6" className="m-0">{newsletterTitle}</Typography>
                    <form onSubmit={(e) => e.preventDefault()} className="flex w-full max-w-xl gap-2 md:justify-self-end">
                        <Input crossOrigin={undefined} color="white" label="Your Email" className="text-slate-900" />
                        <Button color="white" className="text-brand-700">Subscribe</Button>
                    </form>
                </Card>


                <Card shadow={true} className="p-6">
                    <div className="grid gap-6">
                        <div className="flex flex-wrap items-center justify-between gap-4">
                            <div>
                                <Typography variant="h6">CONSULTORÍA PARA SU NEGOCIO</Typography>
                                <Typography variant="small" color="gray">the quick fox jumps over the lazy dog</Typography>
                            </div>
                            <Button color="blue" onClick={() => (window.location.href = '#contacto')}>Contáctanos</Button>
                        </div>


                        <hr className="border-slate-200" />


                        <div className="grid gap-6 md:grid-cols-3">
                            <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
                                {columns.map((col) => (
                                    <div key={col.title}>
                                        <Typography variant="h6" className="mb-2">{col.title}</Typography>
                                        <ul className="grid gap-2 text-xs text-slate-600">
                                            {col.items.map((it) => (
                                                <li key={it.label}><a href={it.href}>{it.label}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>


                            <div>
                                <Typography variant="h6" className="mb-2">Get in Touch</Typography>
                                <ul className="grid gap-2 text-xs text-slate-600">
                                    <li className="flex items-center gap-2">{contact.phone}</li>
                                    <li className="flex items-center gap-2">{contact.address}</li>
                                    <li className="flex items-center gap-2">{contact.email}</li>
                                </ul>
                            </div>
                        </div>


                        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                            <span className="text-xs text-slate-500">{copyright}</span>
                            <div className="flex gap-2">
                                {social.map((s) => (
                                    <a key={s.platform} href={s.href} aria-label={s.platform} className="capitalize underline-offset-2 hover:underline">{s.platform}</a>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </div>
        </footer>
    );
}