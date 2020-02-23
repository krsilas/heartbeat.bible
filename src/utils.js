export const darken = (color, factor=50, alpha=1) => {
    var red = parseInt(color[1] + color[2],16) - factor;
    var green = parseInt(color[3] + color[4],16) - factor;
    var blue = parseInt(color[5] + color[6], 16) - factor;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const lighten = (color, factor=50, alpha=1) => {
    factor*=-1;
    return darken(color, factor, alpha);
}

export const colors = {
    blue: `bg-blue-200 border-blue-300 text-blue-900 dark:bg-blue-900 dark:border-blue-800 dark:text-blue-400 active:bg-blue-300 dark:active:bg-blue-800`,
    red: `bg-red-200 border-red-300 text-red-900 dark:bg-red-900 dark:border-red-800 dark:text-red-400 active:bg-red-300 dark:active:bg-red-800`,
    green: `bg-green-200 border-green-300 text-green-900 dark:bg-green-900 dark:border-green-800 dark:text-green-400 active:bg-green-300 dark:active:bg-green-800`,
    yellow: `bg-yellow-200 border-yellow-300 text-yellow-900 dark:bg-yellow-900 dark:border-yellow-800 dark:text-yellow-400 active:bg-yellow-300 dark:active:bg-yellow-800`,
    orange: `bg-orange-200 border-orange-300 text-orange-900 dark:bg-orange-900 dark:border-orange-800 dark:text-orange-400 active:bg-orange-300 dark:active:bg-orange-800`,
    indigo: `bg-indigo-200 border-indigo-300 text-indigo-900 dark:bg-indigo-900 dark:border-indigo-800 dark:text-indigo-400 active:bg-indigo-300 dark:active:bg-indigo-800`,
    teal: `bg-teal-200 border-teal-300 text-teal-900 dark:bg-teal-900 dark:border-teal-800 dark:text-teal-400 active:bg-teal-300 dark:active:bg-teal-800`,
}

export const isPWA = () => {
    if (typeof window !== 'undefined') {
        return (window.matchMedia('(display-mode: standalone)').matches || typeof window.navigator.standalone !== 'undefined')
    } else return false
}