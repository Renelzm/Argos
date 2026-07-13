export interface ProductImage {
  src: string
  alt?: string
  aspect?: 'square' | 'video'
  fit?: 'cover' | 'contain'
}

export interface ProductFeature {
  icon: string
  title: string
  description: string
  chipClass: string
}

export interface ProductChannel {
  icon: string
  label: string
  color: string
  chipClass: string
}

export interface ProductShowcase {
  label: string
  url: string
  image?: string
  imageAlt?: string
}

export interface Product {
  title: string
  description: string
  color: string
  eyebrow?: string
  poweredBy?: string
  /** Imagen de portada mostrada en el panel de detalle. Opcional: si no existe, no se renderiza. */
  portrait?: string
  portraitAlt?: string
  /** Miniatura del botón en la lista lateral. Independiente de `portrait`/`images`; si no se define, cae a `images[0]` y luego a `portrait`. */
  thumbnail?: string
  thumbnailAlt?: string
  to?: string
  images?: ProductImage[]
  features?: ProductFeature[]
  channels?: ProductChannel[]
  showcases?: ProductShowcase[]
}
