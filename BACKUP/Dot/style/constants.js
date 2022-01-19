import { transparentize } from 'polished';

const color = {
    theme: props =>
        transparentize(0.7, props.theme.color[props.colorTheme].main),
    wab: props => props.theme.wab[props.colorWab],
    status: props =>
        transparentize(0.7, props.theme.status[props.colorStatus].main),
};

export { color };
