export const isPWA = () => {
    if (typeof window !== 'undefined') {
        return (window.matchMedia('(display-mode: standalone)').matches || typeof window.navigator.standalone !== 'undefined')
    } else return false
}