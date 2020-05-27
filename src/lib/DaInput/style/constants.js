const fieldTextColor = {
    default: props => props.theme.wab.grey60,
    success: props => props.theme.color.status.success.main,
    warning: props => props.theme.wab.grey60,
    danger: props => props.theme.color.status.danger.main
};

const inputPadding = {
    base: props => props.hasShadow ?
        props.theme.space.sm : 0,
    larger: props => props.hasShadow ?
        props.theme.space.md : props.theme.space.sm,
};

export {
    fieldTextColor,
    inputPadding,
};