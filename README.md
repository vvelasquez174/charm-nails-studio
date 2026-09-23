# Charm Nails Studio · Landing page

React + Vite + Tailwind CSS v4 + Framer Motion + Lucide.

```bash
npm install
npm run dev      # desarrollo en http://localhost:5173
npm run build    # genera /dist
npm start        # sirve /dist en $PORT (lo usa Railway)
```

## Dónde se edita el contenido

Todo el texto, los enlaces y las fotos viven en `src/data/site.js`:

| Qué | Variable |
| --- | --- |
| Teléfono, dirección, horarios, redes, logo | `business` |
| Promoción ($400) | `promo` |
| Mensaje precargado de WhatsApp | `bookingMessage` |
| Menú | `navigationLinks` |
| Servicios | `services` |
| Pasos "Tu momento Charm" | `experienceSteps` |
| Beneficios | `benefits` |
| Galería | `galleryImages` |
| Fotos del hero, la promoción y los beneficios | `featureImages` |

## Pendientes (no se inventaron)

- **Horarios**: `business.hours` → mientras sea `null` se muestra "Consulta disponibilidad por WhatsApp".
- **Instagram / Facebook**: `business.social` → solo aparecen en el footer cuando tienen URL.
- **Logo en alta resolución**: `business.logoSrc` → mientras sea `null` se usa el logotipo tipográfico con la flor.
- **Fotos de la galería**: los 9 espacios están vacíos (`placeholder: true`). Para cambiarlos:
  coloca `mi-foto.jpg` y `mi-foto.webp` en `public/media/` y reemplaza el elemento por
  `{ src: '/media/mi-foto', alt: 'Descripción', ratio: '4/5' }`.
- **Dominio**: descomentar `<link rel="canonical">` en `index.html` y usar URLs absolutas en `og:image` / JSON-LD.

## Medios

`npm run media` (instala temporalmente sharp y ffmpeg-static) regenera `public/media/` a partir de los originales en `scripts/`
(recortes, WebP, y el video de fondo en loop sin corte y sin audio).

## Despliegue (Railway)

Railway detecta Node, ejecuta `npm run build` y luego `npm start`. Cada push a `main` redespliega.
