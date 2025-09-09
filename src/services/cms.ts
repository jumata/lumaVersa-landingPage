import type { SiteData } from '../types';


export interface SiteRepository { getSite(): Promise<SiteData>; }


class StaticSiteRepository implements SiteRepository {
  private cache?: SiteData;
  async getSite(): Promise<SiteData> {
    if (this.cache) return this.cache;
    const res = await fetch('/site.json');
    if (!res.ok) throw new Error('No se pudo cargar el contenido');
    this.cache = await res.json();
    return this.cache;
  }
}


export const siteRepository: SiteRepository = new StaticSiteRepository();