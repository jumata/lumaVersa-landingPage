import { useEffect, useState } from 'react';
import { ThemeProvider } from '@material-tailwind/react';
import Navbar from './components/NavbarMT';
import Hero from './components/HeroMT';
import Workshops from './components/WorkshopsMT';
import Services from './components/ServicesMT';
import Gallery from './components/GalleryMT';
import About from './components/AboutMT';
import Footer from './components/FooterMT';
import { siteRepository } from './services/cms';
import type { SiteData } from './types';


export default function App() {
  const [data, setData] = useState<SiteData | null>(null);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    siteRepository.getSite().then(setData).catch(e => setError(e?.message ?? 'Error'));
  }, []);


  if (error) return <div className="container py-10">{error}</div>;
  if (!data) return <div className="container py-20 text-center">Cargando…</div>;


  return (
    <ThemeProvider>
      <a href="#home" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:bg-black focus:text-white focus:px-3 focus:py-2 rounded">Saltar al contenido</a>
      <Navbar brand={data.brand} items={data.nav} />
      <Hero {...data.hero} />
      <Workshops items={data.workshops} />
      <Services tiers={data.services.tiers} />
      <Gallery items={data.gallery} />
      <About {...data.about} />
      <Footer {...data.footer} />
    </ThemeProvider>
  );
}