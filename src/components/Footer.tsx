import type { Footer as FooterType } from '../types';
import { ArrowRight, Mail, Phone, Pin } from './Icons';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';


export default function Footer({ newsletterTitle, logos, columns, contact, social, copyright }: FooterType) {
  return (
    <footer id="contacto" className="py-16">
      <div className="container max-w-container grid gap-8">


        <div className="flex flex-wrap items-center justify-between gap-6">
          {logos.map((src, i) => <img key={i} src={src} alt="" className="h-[34px]" />)}
        </div>


        <Card className="grid gap-4 md:grid-cols-2 items-center bg-gradient-to-r from-brand-700 to-sky-500 text-white p-5">
          <h3 className="m-0 text-xl">{newsletterTitle}</h3>
          <form onSubmit={(e) => e.preventDefault()} className="md:justify-self-end flex w-full max-w-xl gap-2">
            <input aria-label="Email" type="email" required placeholder="Your Email"
              className="flex-1 rounded-xl px-4 py-2 text-slate-900 border-0" />
            <Button className="bg-white text-brand-700 hover:bg-white">Subscribe <ArrowRight /></Button>
          </form>
        </Card>


        <Card className="p-6">
          <div className="grid gap-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div>
                <h3 className="m-0 font-semibold">CONSULTORÍA PARA SU NEGOCIO</h3>
                <p className="text-xs text-slate-500">the quick fox jumps over the lazy dog</p>
              </div>
              <Button asChild href="#contacto"><span>Contáctanos <ArrowRight /></span></Button>
            </div>


            <hr className="border-slate-200" />


            <div className="grid md:grid-cols-3 gap-6">
              <div className="grid gap-6 md:col-span-2 md:grid-cols-2">
                {columns.map(col => (
                  <div key={col.title}>
                    <h4 className="mb-2 font-semibold">{col.title}</h4>
                    <ul className="grid gap-2 text-xs text-slate-600">
                      {col.items.map(it => <li key={it.label}><a href={it.href}>{it.label}</a></li>)}
                    </ul>
                  </div>
                ))}
              </div>


              <div>
                <h4 className="mb-2 font-semibold">Get in Touch</h4>
                <ul className="grid gap-2 text-xs text-slate-600">
                  <li className="flex items-center gap-2"><Phone />{contact.phone}</li>
                  <li className="flex items-center gap-2"><Pin />{contact.address}</li>
                  <li className="flex items-center gap-2"><Mail />{contact.email}</li>
                </ul>
              </div>
            </div>


            <div className="flex items-center justify-between flex-wrap gap-3 pt-2">
              <span className="text-xs text-slate-500">{copyright}</span>
              <div className="flex gap-2">
                {social.map(s => (
                  <a key={s.platform} href={s.href} aria-label={s.platform} className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold bg-brand-50 text-brand-700 capitalize">{s.platform}</a>
                ))}
              </div>
            </div>
          </div>
        </Card>


      </div>
    </footer>
  );
}