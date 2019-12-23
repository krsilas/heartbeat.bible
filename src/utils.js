export const darken = (color, factor=50, alpha=1) => {
    var red = parseInt(color[1] + color[2],16) - factor;
    var green = parseInt(color[3] + color[4],16) - factor;
    var blue = parseInt(color[5] + color[6], 16) - factor;
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`
}

export const lighten= (color, factor=50, alpha=1) => {
    factor*=-1;
    return darken(color, factor, alpha);
}