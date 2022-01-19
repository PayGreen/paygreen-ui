import { transparentize } from 'polished';

const lineColor = {
    theme: props =>
        transparentize(0.5, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.5, props.theme.color[props.colorTheme].main),
    status: props =>
        transparentize(0.5, props.theme.status[props.colorStatus].main),
};

export { lineColor };
