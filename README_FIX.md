# Pasos para arreglar Tailwind (v3 + Vite)

1. Desinstala el plugin de Vite para Tailwind v4 (no es compatible con Tailwind v3):

```bash
npm remove @tailwindcss/vite
```

2. Instala dependencias de Tailwind v3:

```bash
npm i -D tailwindcss@^3 postcss autoprefixer
```

3. Copia estos archivos en la raíz del proyecto (reemplazando si existen):
- `vite.config.ts`
- `postcss.config.js`
- `tailwind.config.js`
- `index.html` (se eliminó el `<link href="/src/style.css">`)

4. Asegúrate de que `src/index.css` contenga:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5. Ejecuta el proyecto:

```bash
npm run dev
```
