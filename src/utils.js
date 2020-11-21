export const isPWA = () => {
    if (typeof window !== 'undefined') {
        return (window.matchMedia('(display-mode: standalone)').matches || typeof window.navigator.standalone !== 'undefined')
    } else return false
}

export function updateTheme() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.querySelector('html').classList.add('dark')
    } else {
        document.querySelector('html').classList.remove('dark')
    }
}