const color = {
    checked: {
        main: {
            theme: props =>
                props.theme.color[props.checkedColor.colorTheme].main,
            wab: props => props.theme.wab[props.checkedColor.colorWab],
            status: props =>
                props.theme.status[props.checkedColor.colorStatus].main,
        },
        bg: {
            theme: props =>
                props.theme.color[props.checkedColor.colorTheme].light,
            wab: props => props.theme.wab.grey10,
            status: props =>
                props.theme.status[props.checkedColor.colorStatus].light,
        },
    },
    notChecked: {
        main: {
            theme: props =>
                props.theme.color[props.notCheckedColor.colorTheme].main,
            wab: props => props.theme.wab[props.notCheckedColor.colorWab],
            status: props =>
                props.theme.status[props.notCheckedColor.colorStatus].main,
        },
        bg: {
            theme: props =>
                props.theme.color[props.notCheckedColor.colorTheme].light,
            wab: props => props.theme.wab.grey10,
            status: props =>
                props.theme.status[props.notCheckedColor.colorStatus].light,
        },
    },
};

export { color };
