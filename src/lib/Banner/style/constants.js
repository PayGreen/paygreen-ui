const color = {
    first: {
        none: props => props.theme.wab.white00,
        brand: props => props.theme.color.primary.gradientBase,
        theme: props => props.theme.color[props.colorTheme]['gradientBase']
    },
    second: {
        none: props => props.theme.wab.white00,
        brand: props => props.theme.color.secondary.gradientBase,
        theme: props => props.theme.color[props.colorTheme]['gradientShade']
    }
};

const waveScale = {
    top: -1,
    bottom: 1,
    left: 1,
    right: -1
};

export {
    color,
    waveScale
};