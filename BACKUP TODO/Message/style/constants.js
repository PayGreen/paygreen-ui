const arrowBreakpoint = 'xl';
const arrowSize = props => props.theme.arrow[props.fieldSize];

const color = {
    bg: {
        original: {
            theme: props => props.theme.color[props.colorTheme].light,
            status: props => props.theme.status[props.colorStatus].light,
        },
        reverse: {
            theme: props => props.theme.color[props.colorTheme].main,
            status: props => props.theme.status[props.colorStatus].main,
        },
    },
    content: {
        original: {
            theme: props => props.theme.color[props.colorTheme].main,
            status: props => props.theme.status[props.colorStatus].main,
        },
        reverse: {
            theme: props => props.theme.wab.white00,
            status: props => props.theme.wab.white00,
        },
    },
};

export { arrowBreakpoint, arrowSize, color };
