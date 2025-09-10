# LumaVersa – Landing Page

Landing page moderna construida con **React + TypeScript + Vite**, **Tailwind CSS** y **Material Tailwind**.

> 🎨 **Diseño**: El diseño base fue realizado en **Figma** y sirvió como guía de implementación.  
> Figma: https://www.figma.com/design/7oDXDMZK9LjfbFTpx2HWtf/Untitled?node-id=0-1&m=dev&t=O5H8s6CpYApIyIFU-1
 
<img width="520" height="309" alt="image" src="https://github.com/user-attachments/assets/423c1624-b945-40d4-8ba6-7e33b0ce57fc" />
<img width="511" height="363" alt="image" src="https://github.com/user-attachments/assets/c37bc555-437e-46a6-b4d8-101354cde6e3" />

---

## ✨ Características

- Secciones: **Hero**, **Workshops**, **Services (pricing)**, **Gallery**, **About**, **Clients**, **Footer**
- Estilos con **Tailwind** y componentes de **Material Tailwind**
- Tipografía **Monoton** aplicada al título del Hero
- Contenido consumido desde un **site config** (JSON) mediante `siteRepository`
- Sección de **clientes** con logos optimizados (lazy load, dimensiones intrínsecas, sin CLS)
- Accesibilidad: *skip link* “Saltar al contenido”; colores y contrastes
- Buenas prácticas de performance (scroll control, imágenes con `loading="lazy"`, `decoding="async"`)

---

## 🧱 Stack

- **React 18** + **TypeScript**
- **Vite**
- **Tailwind CSS** + **@material-tailwind/react**
- Gestión de contenido simple via **`public/site.json`** (o equivalente) a través de `siteRepository`

---

## 🚀 Empezar

> Requisitos: **Node.js 18+** y **npm** (o pnpm/yarn).

```bash
# 1) Instalar dependencias
npm install

# 2) Ambiente de desarrollo
npm run dev
# -> abre http://localhost:5173

# 3) Build de producción
npm run build

# 4) Previsualización del build
npm run preview
