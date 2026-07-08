// Resuelve rutas de /public contra app.baseURL (ej. '/Argos/' en GH Pages, '/' en dominio propio)
export function useAsset(path?: string) {
  if (!path) return ''
  const { app } = useRuntimeConfig()
  const base = app.baseURL.endsWith('/') ? app.baseURL.slice(0, -1) : app.baseURL
  const clean = path.startsWith('/') ? path : `/${path}`
  return `${base}${clean}`
}
