const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.color.status[props.colorStatus].main,
    gradientBase: props => props.theme.color[props.colorTheme].gradientBase,
    gradientShade: props => props.theme.color[props.colorTheme].gradientShade,
};

const lightColor = {
    theme: props => props.theme.color[props.colorTheme].light,
    status: props => props.theme.color.status[props.colorStatus].light,
};

export { lightColor, mainColor };
