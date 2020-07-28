const color = {
    main: {
        base: {
            theme: props => props.theme.wab[props.colorWab],
            wab: props => props.theme.wab[props.colorWab],
            status: props => props.theme.status.danger.main,
        },
        checked: {
            theme: props => props.theme.color[props.colorTheme].main,
            wab: props => props.theme.status[props.colorStatus].main,
            status: props => props.theme.status[props.colorStatus].main,
        },
    },
    bg: {
        base: {
            theme: props => props.theme.wab.grey10,
            wab: props => props.theme.wab.grey10,
            status: props => props.theme.status.danger.light,
        },
        checked: {
            theme: props => props.theme.color[props.colorTheme].light,
            wab: props => props.theme.status[props.colorStatus].light,
            status: props => props.theme.status[props.colorStatus].light,
        },
    },
};

export { color };
