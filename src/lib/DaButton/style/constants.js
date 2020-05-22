const colorCollection = {
    main: props => props.theme.color[props.colorTheme].main,
    white: props => props.theme.wab.white00,
};

const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.color.status[props.colorStatus].main,
    white: props => props.theme.wab.white00,
};

const buttonColors = {
    text: {
        fill: {
            original: colorCollection.white,
            reverse: colorCollection.main,
        },
        line: {
            original: colorCollection.main,
            reverse: colorCollection.white,
        },
    },
    bg: {
        fill: {
            original: colorCollection.main,
            reverse: colorCollection.white,
        },
        line: {
            original: colorCollection.main,
            reverse: colorCollection.white,
        },
    },
};

export { buttonColors, mainColor };
