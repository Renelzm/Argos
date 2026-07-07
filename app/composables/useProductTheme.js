// Static class strings only — Tailwind's scanner needs the literal text in source,
// it can't resolve classes built at runtime via string concatenation.
const PRODUCT_THEMES = {
  gobierno: {
    badge: 'bg-gobierno/10 text-gobierno dark:bg-gobierno/20',
    activeBorder: 'border-gobierno dark:border-gobierno',
    ring: 'focus-visible:ring-gobierno',
    cta: 'border-gobierno text-gobierno hover:bg-gobierno hover:text-white',
    chevron: 'text-gobierno dark:text-gobierno',
    surface: 'bg-gobierno/5 dark:bg-gobierno/10',
  },
  empresa: {
    badge: 'bg-empresa/10 text-empresa dark:bg-empresa/20',
    activeBorder: 'border-empresa dark:border-empresa',
    ring: 'focus-visible:ring-empresa',
    cta: 'border-empresa text-empresa hover:bg-empresa hover:text-white',
    chevron: 'text-empresa dark:text-empresa',
    surface: 'bg-empresa/5 dark:bg-empresa/10',
  },
}

export function useProductTheme(color) {
  return PRODUCT_THEMES[color] ?? PRODUCT_THEMES.gobierno
}
