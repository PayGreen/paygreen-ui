import { transparentize } from 'polished';
import { fontSizeOptions } from '../../../shared/constants';

const lineColor = {
    theme: props =>
        transparentize(0.5, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.5, props.theme.color[props.colorTheme].main),
    status: props =>
        transparentize(0.5, props.theme.status[props.colorStatus].main),
};

const minimizeFont = {
    md: fontSizeOptions.base,
    lg: fontSizeOptions.md,
    xl: fontSizeOptions.lg,
};

export { lineColor, minimizeFont };
