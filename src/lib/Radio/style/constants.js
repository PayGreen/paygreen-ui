import { math } from 'polished';

const radioCircleSize = {
    sm: props =>
        math(props.theme.form.radioButtonSize[props.fieldSize] + '- 8px'),
    md: props =>
        math(props.theme.form.radioButtonSize[props.fieldSize] + '- 10px'),
    lg: props =>
        math(props.theme.form.radioButtonSize[props.fieldSize] + '- 10px'),
};

const radioSize = props => props.theme.form.radioButtonSize[props.fieldSize];

const ratioSize = {
    // needed to center small radio circle in radio button
    sm: math('8px' + '/2'),
    md: math('10px' + '/2'),
    lg: math('10px' + '/2'),
};

export { radioCircleSize, radioSize, ratioSize };
