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

export interface Product {
  title: string
  description: string
  color: string
  eyebrow?: string
  poweredBy?: string
  /** Imagen de portada mostrada en el panel de detalle. Opcional: si no existe, no se renderiza. */
  portrait?: string
  portraitAlt?: string
  to?: string
  images?: ProductImage[]
  features?: ProductFeature[]
  channels?: ProductChannel[]
}
