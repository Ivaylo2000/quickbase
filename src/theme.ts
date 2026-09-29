export type Theme = 'light' | 'dark'

const DARK_THEME_QUERY = '(prefers-color-scheme: dark)'

export function getPreferredTheme(): Theme {
  return window.matchMedia(DARK_THEME_QUERY).matches ? 'dark' : 'light'
}

export function applyTheme(theme: Theme): void {
  document.documentElement.dataset.theme = theme
}

export function initializeTheme(): void {
  applyTheme(getPreferredTheme())
}
