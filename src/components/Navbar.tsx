import { useEffect, useState } from 'react';
import type { NavItem } from '../types';
import { ArrowRight } from './Icons';
import { Button } from '../ui/Button';


type Props = { brand: string; items: NavItem[] };


export default function Navbar({ brand, items }: Props) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);


  return (
    <header className={`sticky top-0 z-50 ${scrolled ? 'bg-white/80 backdrop-blur border-b border-slate-200' : 'bg-transparent'}`}>
      <div className="container max-w-container flex items-center gap-4 py-3">
        <a href="#" className="font-extrabold tracking-wider text-brand-700" aria-label="LumaVersa Home">
          {brand}
        </a>


        <nav className="ml-auto">
          <ul className="flex items-center gap-2 m-0 p-0">
            {items.map(it => (
              <li key={it.href}><Button asChild href={it.href} variant="ghost">{it.label}</Button></li>
            ))}
            <li><Button asChild href="#login" variant="ghost">login</Button></li>
            <li>
              <Button asChild href="#contacto">
                <span>Contáctanos <ArrowRight /></span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}