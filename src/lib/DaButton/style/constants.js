import { buttonStyleOptions } from '../../../shared/constants';
import { math } from 'polished';

const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.status[props.colorStatus].main,
    white: props => props.theme.wab.white00,
    gradientBase: props => props.theme.color[props.colorTheme].gradientBase,
    gradientShade: props => props.theme.color[props.colorTheme].gradientShade,
    primary: props => props.theme.color.primary.main,
    secondary: props => props.theme.color.secondary.main,
};

const backgroundCalc = props =>
    props.buttonStyle === buttonStyleOptions.line
        ? math(
              props.theme.daButton.shift[props.buttonSize] +
                  '+' +
                  props.theme.line,
          )
        : props.theme.daButton.shift[props.buttonSize];

export { backgroundCalc, mainColor };
