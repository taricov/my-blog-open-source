'use client'

import { ThemeProvider } from 'next-themes'

export function DarkThemeProvider({ children }:any) {
  return <ThemeProvider>{children}</ThemeProvider>
}