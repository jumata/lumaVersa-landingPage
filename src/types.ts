export type NavItem = { label: string; href: string };
export type Hero = { bgImage: string; titleLines: string[]; subtitle: string[] };
export type Workshop = { name: string; role: string; avatar: string; description: string; rating: number };
export type ServiceTier = {
id: string; name: string; price: string; period: string; features: string[];
highlighted?: boolean; cta: { label: string; href: string };
};
export type GalleryItem = { id: string; category: string; title: string; author: string; date: string; image: string };
export type About = { title: string; paragraphs: string[]; image: string };
export type FooterCol = { title: string; items: { label: string; href: string }[] };
export type Footer = {
newsletterTitle: string; logos: string[]; columns: FooterCol[];
contact: { phone: string; address: string; email: string };
social: { platform: string; href: string }[]; copyright: string;
};
export type SiteData = {
brand: string; nav: NavItem[]; hero: Hero; workshops: Workshop[];
services: { tiers: ServiceTier[] }; gallery: GalleryItem[]; about: About; footer: Footer;
};