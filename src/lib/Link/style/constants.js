const linkColor = {
    base: {
        original: props => props.theme.color[props.colorTheme]['main'],
        reverse: props => props.theme.color.white00
    },
    hover: {
        original: props => props.theme.color.white00,
        reverse: props => props.theme.color[props.colorTheme]['main']
    },
};

export { linkColor };