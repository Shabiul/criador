const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? ''
export const bp = (path: string) => `${BASE}${path}`
