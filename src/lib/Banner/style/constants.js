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

export {
    color
};