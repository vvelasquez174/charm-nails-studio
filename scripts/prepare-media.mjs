// Genera los medios optimizados de /public/media a partir de los archivos fuente.
// Uso: node scripts/prepare-media.mjs
import sharp from 'sharp'
import ffmpeg from 'ffmpeg-static'
import { execFileSync } from 'node:child_process'

const out = (name) => `public/media/${name}`

const crops = [
  // Fotografía blanca: se eliminan las barras negras de la captura
  { src: 'scripts/src-white.jpg', name: 'unas-blanco', extract: { left: 0, top: 382, width: 720, height: 836 } },
  // Chrome dorado: foto interior del marco
  { src: 'scripts/src-gold.jpg', name: 'unas-chrome-dorado', extract: { left: 466, top: 175, width: 670, height: 870 } },
  // Chrome dorado: composición editorial completa
  { src: 'scripts/src-gold.jpg', name: 'unas-chrome-dorado-editorial' },
  // Chrome dorado: detalle mano superior
  { src: 'scripts/src-gold.jpg', name: 'unas-chrome-dorado-detalle', extract: { left: 690, top: 330, width: 450, height: 360 } },
  // Pedicure rojo
  { src: 'scripts/src-red.jpg', name: 'pedicure-rojo' },
  // Pedicure rojo: detalle
  { src: 'scripts/src-red.jpg', name: 'pedicure-rojo-detalle', extract: { left: 160, top: 380, width: 640, height: 560 } },
  // Blanco: detalle
  { src: 'scripts/src-white.jpg', name: 'unas-blanco-detalle', extract: { left: 180, top: 640, width: 460, height: 420 } },
]

for (const c of crops) {
  let img = sharp(c.src)
  if (c.extract) img = img.extract(c.extract)
  await img.clone().resize({ width: 1000, withoutEnlargement: true }).webp({ quality: 80 }).toFile(out(`${c.name}.webp`))
  await img.clone().resize({ width: 1000, withoutEnlargement: true }).jpeg({ quality: 82, mozjpeg: true }).toFile(out(`${c.name}.jpg`))
  console.log('ok', c.name)
}

// Video de fondo: sin audio, loop sin corte (crossfade del final al inicio) y póster.
// Se descarta el primer segundo (entrada en blanco del video original).
execFileSync(ffmpeg, [
  '-y', '-loglevel', 'error', '-i', 'scripts/source-video.mp4',
  '-filter_complex',
  '[0:v]split[a][b];[a]trim=2:8,setpts=PTS-STARTPTS[main];[b]trim=1:2,setpts=PTS-STARTPTS[head];[main][head]xfade=transition=fade:duration=1:offset=5,format=yuv420p[v]',
  '-map', '[v]', '-an', '-c:v', 'libx264', '-crf', '27', '-preset', 'slow', '-movflags', '+faststart',
  out('fondo-floral.mp4'),
])
execFileSync(ffmpeg, ['-y', '-loglevel', 'error', '-ss', '2', '-i', 'scripts/source-video.mp4', '-frames:v', '1', '-q:v', '4', 'scripts/poster.jpg'])
await sharp('scripts/poster.jpg').webp({ quality: 75 }).toFile(out('fondo-floral-poster.webp'))
await sharp('scripts/poster.jpg').jpeg({ quality: 78, mozjpeg: true }).toFile(out('fondo-floral-poster.jpg'))
// Imagen para compartir en redes (Open Graph)
await sharp('scripts/src-gold.jpg').resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 80, mozjpeg: true }).toFile(out('og-charm-nails.jpg'))
console.log('ok video + poster + og')
