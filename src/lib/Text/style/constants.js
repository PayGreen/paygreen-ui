import { transparentize } from 'polished';

const fontColor = {
    main: {
        original: props => props.theme.wab[props.mainColor],
        reverse: props => transparentize(0.05, props.theme.wab.white00)
    },
    secondary: {
        original: props => props.theme.color[props.colorTheme]['main'],
        reverse: props => transparentize(0.05, props.theme.wab.white00)
    },
};

const backgroundColor = {
    none: 'transparent',
    grey1: props => transparentize(0.97, props.theme.wab.black00),
    grey2: props => transparentize(0.92, props.theme.wab.black00),
    theme: props => transparentize(0.9, props.theme.color[props.colorTheme]['main']),
};

export {
    fontColor,
    backgroundColor,
};