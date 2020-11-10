import { transparentize } from 'polished';
import { fontSizeOptions } from '../../../shared/constants';
import { minimizeFont as titleMinimizeFont } from '../../Title/style/constants';

const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    wab: props => props.theme.wab[props.colorWab],
    status: props => props.theme.status[props.colorStatus].main,
};

const backgroundColor = {
    theme: props =>
        transparentize(0.9, props.theme.color[props.colorTheme].main),
    wab: props => transparentize(0.97, props.theme.wab.black00),
    status: props =>
        transparentize(0.9, props.theme.status[props.colorStatus].main),
};

const minimizeFont = {
    xxs: fontSizeOptions.tiny,
    xs: fontSizeOptions.xxs,
    sm: fontSizeOptions.xs,
    base: fontSizeOptions.sm,
    ...titleMinimizeFont,
};

export { mainColor, backgroundColor, minimizeFont };
