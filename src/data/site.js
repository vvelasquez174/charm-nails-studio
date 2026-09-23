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

// Fondo animado (video vertical provisto por el negocio)
export const backgroundVideo = {
  src: '/media/fondo-floral.mp4',
  poster: '/media/fondo-floral-poster.jpg',
}

// Fotos del hero y de la promoción
export const featureImages = {
  hero: { src: '/media/unas-chrome-dorado', alt: 'Manicure con efecto chrome dorado sobre uñas cortas y cuadradas' },
  promotion: { src: '/media/unas-blanco', alt: 'Uñas en color gel blanco con forma cuadrada y acabado brillante' },
  benefits: { src: '/media/pedicure-rojo', alt: 'Pedicure en color rojo intenso con acabado brillante' },
}

// Galería: `src` sin extensión → se sirven .webp con respaldo .jpg.
// Para sustituir, agrega la foto a /public/media y cambia `src` y `alt`.
// Los elementos con `placeholder: true` son espacios reservados para fotos reales.
export const galleryImages = [
  { src: '/media/unas-chrome-dorado-editorial', alt: 'Manicure chrome dorado en tonos nude', ratio: '4/3' },
  { src: '/media/unas-blanco', alt: 'Uñas blancas en gel con forma cuadrada', ratio: '720/836' },
  { src: '/media/pedicure-rojo', alt: 'Pedicure rojo con brillo intenso', ratio: '1/1' },
  { src: '/media/unas-chrome-dorado-detalle', alt: 'Detalle de uñas con efecto chrome dorado', ratio: '5/4' },
  { src: '/media/pedicure-rojo-detalle', alt: 'Detalle de pedicure en rojo', ratio: '8/7' },
  { src: '/media/unas-blanco-detalle', alt: 'Detalle de uñas blancas con acabado brillante', ratio: '46/42' },
  { placeholder: true, label: 'Uñas rosas', ratio: '1/1' },
  { placeholder: true, label: 'Nail art', ratio: '1/1' },
  { placeholder: true, label: 'Nude elegante', ratio: '1/1' },
]
