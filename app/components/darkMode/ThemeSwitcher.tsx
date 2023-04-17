"use client";
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }


  return (
    <div>
      <button className="fixed dark:text-slate-200 bottom-5 left-5 bg-red-500" onClick={() => theme === "dark" ? setTheme("light") : setTheme("dark")}>

{
  theme === "light" ? "light" : "dark"


  }

      </button>
    </div>
  )
}