const textColor = {
    default: props => props.theme.fontDefault,
    success: props => props.theme.color.state.success,
    warning: props => props.theme.fontDefault,
    danger: props => props.theme.color.state.danger
};

export {
    textColor
};