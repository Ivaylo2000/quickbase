export type Theme = 'light' | 'dark'

const DARK_THEME_QUERY = '(prefers-color-scheme: dark)'
const THEME_STORAGE_KEY = 'preferred-theme'

function isTheme(value: string | null): value is Theme {
  return value === 'light' || value === 'dark'
}

export function getPreferredTheme(): Theme {
  const savedTheme = localStorage.getItem(THEME_STORAGE_KEY)

  if (isTheme(savedTheme)) {
    return savedTheme
  }

  return window.matchMedia(DARK_THEME_QUERY).matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
}

export function saveTheme(theme: Theme): void {
  localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}

export function initializeTheme(): void {
  applyTheme(getPreferredTheme())
}
