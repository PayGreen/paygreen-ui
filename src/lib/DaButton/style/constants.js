const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.color.status[props.colorStatus].main,
    white: props => props.theme.wab.white00,
    gradientBase: props => props.theme.color[props.colorTheme].gradientBase,
    gradientShade: props => props.theme.color[props.colorTheme].gradientShade,
    primary: props => props.theme.color.primary.main,
    secondary: props => props.theme.color.secondary.main,
};

export { mainColor };
