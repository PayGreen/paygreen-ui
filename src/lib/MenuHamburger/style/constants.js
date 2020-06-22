const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.color.status[props.colorStatus].main,
    wab: props => props.theme.wab[props.colorWab],
};

export { mainColor };
