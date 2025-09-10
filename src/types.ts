export type NavItem = { label: string; href: string };
export type Hero = { bgImage: string; titleLines: string[]; subtitle: string[] };
export type Workshop = { name: string; role: string; avatar: string; description: string; rating: number };
export type ServiceTier = {
  id: string; name: string; price: string; period: string; features: string[];
  highlighted?: boolean; cta: { label: string; href: string };
};
export type GalleryItem = { id: string; category: string; title: string; author: string; date: string; image: string };
export type FooterCol = { title: string; items: { label: string; href: string }[] };
export type Footer = {
  newsletterTitle: string; columns: FooterCol[];
  contact: { phone: string; address: string; email: string };
  social: { platform: string; href: string }[]; copyright: string;
};
export type SiteData = {
  brand: string; nav: NavItem[]; hero: Hero; workshops: Workshop[];
  services: { tiers: ServiceTier[] }; gallery: GalleryItem[]; about: About; footer: Footer;
};
export type Action = { label: string; href: string; variant?: 'primary' | 'secondary' | 'link' };
export type Feature = { icon: 'users' | 'target' | 'chart' | 'bulb' | string; title: string; text: string; emphasis?: boolean };
export type Story = { title: string; paragraphs: string[]; image: string; cta?: Action };
export type About = {
  title: string; lead?: string; paragraphs?: string[]; image?: string; stats?: { label: string; value: string }[]; ctas?: Action[]; badges?: { position: 'topLeft' | 'topRight' | 'bottomLeft' | 'bottomRight'; text: string }[]; layout?: 'image-right' | 'image-left'; features?: Feature[]; story?: Story;
};
export type ClientLogo = { id: string; name: string; src: string; width?: number; height?: number; href?: string };