import { createContext, useState, useContext, useEffect } from 'react'

export const isPWA = () => {
    if (typeof window !== 'undefined') {
        return (window.matchMedia('(display-mode: standalone)').matches || typeof window.navigator.standalone !== 'undefined')
    } else return false
}

export const ThemeContext = createContext(null)

export function updateTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
    }
}

export const useTheme = (initial) => {
    const [theme, setUITheme] = useState(initial || 'os')
    const { toggleThemeColor } = useContext(ThemeContext)
    useEffect(()=>{
      setUITheme(localStorage.theme)
    }, [])
    function setTheme(event) {
      const themeChoice = event.target.value
      const OS_DEFAULT = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  
      if (themeChoice == 'os') {
        localStorage.removeItem('theme')
        setUITheme('os')
        toggleThemeColor(OS_DEFAULT)
      }
      else {
        localStorage.theme = themeChoice
        setUITheme(themeChoice)
        toggleThemeColor(themeChoice)
      }
      updateTheme()
    }
    return [theme, setTheme]
}