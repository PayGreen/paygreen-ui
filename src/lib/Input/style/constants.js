const textColor = {
    default: props => props.theme.fontDefault,
    success: props => props.theme.color.state.success,
    warning: props => props.theme.fontDefault,
    danger: props => props.theme.color.state.danger
};

const inputPadding = {
    base: props => props.shadow ? 
        props.theme.space.sm : 0,
    larger: props => props.shadow ?
        props.theme.space.md : props.theme.space.sm,
};

const underlineAnimation = {
    before: {
        entering: '0', // useless property, must be specify to avoid "cut" in animation
        exiting: '100%',
        exited: '0',
    },
    after: {
        entering: '100%',
        exiting: '0',
        exited: '100%',
    }
};

export {
    textColor,
    inputPadding,
    underlineAnimation
};