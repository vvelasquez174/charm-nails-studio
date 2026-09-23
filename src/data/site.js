// ─────────────────────────────────────────────────────────────
// Contenido editable de la landing de Charm Nails Studio.
// Cambia textos, fotos y enlaces aquí; los componentes solo leen estos datos.
// ─────────────────────────────────────────────────────────────

export const business = {
  name: 'Charm Nails Studio',
  tagline: 'Realza tu estilo, siéntete Charm.',
  phoneDisplay: '81 3217 9602',
  phoneE164: '+528132179602',
  whatsappNumber: '528132179602',
  address: {
    street: 'Loma Grande 2709',
    neighborhood: 'Lomas de San Francisco',
    city: 'Monterrey',
    state: 'Nuevo León',
    postalCode: '64710',
  },
  // PENDIENTE: agregar cuando el negocio los confirme. Si quedan vacíos no se muestran.
  hours: null, // ej. 'Lunes a sábado · 10:00 a 19:00'
  social: {
    instagram: '', // ej. 'https://instagram.com/charmnailsstudio'
    facebook: '',
  },
  // PENDIENTE: ruta al logo en alta resolución (ej. '/media/logo-charm.svg').
  // Mientras sea null se usa el logotipo tipográfico.
  logoSrc: null,
}

export const promo = {
  name: 'Nivelación',
  headline: 'Nivelación + Color Gel',
  price: '$400',
  includes: [
    'Uñas niveladas',
    'Fuertes y uniformes',
    'Color gel',
    'Uno o dos tonos a elegir',
    'Acabado brillante y duradero',
  ],
}

export const bookingMessage =
  'Hola, Charm Nails Studio. Me interesa la promoción de nivelación de $400 y quisiera agendar una cita. ¿Qué horarios tienen disponibles?'

export const whatsappUrl = (message = bookingMessage) =>
  `https://wa.me/${business.whatsappNumber}?text=${encodeURIComponent(message)}`

export const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.city}, ${business.address.state}, C.P. ${business.address.postalCode}`

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`
export const mapsEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(fullAddress)}&z=16&output=embed`

export const navigationLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Galería', href: '#galeria' },
  { label: 'Promoción', href: '#promocion' },
  { label: 'Ubicación', href: '#ubicacion' },
]

// Íconos: nombres de lucide-react (ver Icon en src/components/ui.jsx)
export const services = [
  {
    number: '01',
    title: 'Nivelación',
    description: 'Uñas niveladas, fuertes y uniformes.',
    icon: 'Layers',
    badge: 'Promo $400 con color gel',
  },
  {
    number: '02',
    title: 'Color gel',
    description: 'Color elegante y acabado brillante.',
    icon: 'Palette',
  },
  {
    number: '03',
    title: 'Diseños',
    description: 'Detalles personalizados para complementar tu estilo.',
    icon: 'Brush',
  },
  {
    number: '04',
    title: 'Manicure',
    description: 'Cuidado y preparación de tus uñas.',
    icon: 'Hand',
  },
]

export const experienceSteps = [
  { number: '01', title: 'Agenda', description: 'Reserva tu cita por WhatsApp.' },
  { number: '02', title: 'Relájate', description: 'Disfruta tu sesión en un ambiente pensado para ti.' },
  { number: '03', title: 'Siéntete Charm', description: 'Sal con unas uñas elegantes y cuidadas.' },
]

export const benefits = [
  { title: 'Uñas fuertes y uniformes', icon: 'ShieldCheck' },
  { title: 'Acabado brillante', icon: 'Sparkles' },
  { title: 'Diseños elegantes', icon: 'Gem' },
  { title: 'Atención personalizada', icon: 'HeartHandshake' },
  { title: 'Ambiente agradable', icon: 'Flower2' },
  { title: 'Ubicación en Monterrey', icon: 'MapPin' },
]

// Reseñas REALES de clientas (con su permiso). Solo estas se publican.
// Formato: { name: 'Ana G.', service: 'Nivelación + color gel', text: '…', rating: 5 }
export const reviews = []

// PENDIENTE: enlace para dejar reseña en Google (perfil de Google Business). Si está vacío no se muestra.
export const reviewLink = ''

// Textos de EJEMPLO solo para previsualizar el diseño en `npm run dev`.
// Nunca se muestran en el sitio publicado.
export const sampleReviews = [
  { name: 'Clienta de ejemplo', service: 'Nivelación + color gel', text: 'Aquí va el comentario de una clienta sobre su experiencia en Charm Nails Studio.', rating: 5 },
  { name: 'Clienta de ejemplo', service: 'Diseños', text: 'Reseña breve que describa el servicio, la atención y el resultado de sus uñas.', rating: 5 },
  { name: 'Clienta de ejemplo', service: 'Manicure', text: 'Una o dos líneas bastan: lo que más le gustó y si volvería a agendar.', rating: 5 },
]

// Fondo animado (video vertical provisto por el negocio)
export const backgroundVideo = {
  src: '/media/fondo-floral.mp4',
  poster: '/media/fondo-floral-poster.jpg',
}

// Fotos del hero, la promoción, los beneficios y el CTA final
export const featureImages = {
  hero: { src: '/media/unas-chrome-dorado', alt: 'Manicure con efecto chrome dorado sobre uñas cortas y cuadradas' },
  promotion: { src: '/media/unas-blanco', alt: 'Uñas en color gel blanco con forma cuadrada y acabado brillante' },
  benefits: { src: '/media/pedicure-rojo', alt: 'Pedicure en color rojo intenso con acabado brillante' },
  finalCta: { src: '/media/modelo-verde-esmeralda', alt: 'Mujer sonriente mostrando sus uñas en color verde esmeralda' },
}

// Galería: por ahora todos los espacios están vacíos (`placeholder: true`).
// Para agregar una foto: colócala en /public/media como nombre.jpg y nombre.webp y cambia el espacio por
//   { src: '/media/nombre', alt: 'Descripción de la foto', ratio: '4/5' }
// (`src` va sin extensión; `ratio` es la proporción ancho/alto de la foto).
// Fotos ya disponibles en /public/media: unas-chrome-dorado-editorial, unas-blanco, pedicure-rojo,
// unas-chrome-dorado-detalle, pedicure-rojo-detalle, unas-blanco-detalle, modelo-verde-manos.
export const galleryImages = [
  { placeholder: true, ratio: '4/5' },
  { placeholder: true, ratio: '1/1' },
  { placeholder: true, ratio: '4/5' },
  { placeholder: true, ratio: '1/1' },
  { placeholder: true, ratio: '4/5' },
  { placeholder: true, ratio: '1/1' },
  { placeholder: true, ratio: '4/5' },
  { placeholder: true, ratio: '1/1' },
  { placeholder: true, ratio: '4/5' },
]
