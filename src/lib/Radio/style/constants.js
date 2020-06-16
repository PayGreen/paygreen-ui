import { math } from 'polished';

const radioCircleSize = props =>
    math(
        props.theme.form.radioButtonSize[props.fieldSize] +
            '-' +
            props.theme.form.radioButtonSpace[props.fieldSize],
    );

const radioSize = props => props.theme.form.radioButtonSize[props.fieldSize];

// needed to center small radio circle in radio button
const ratioSize = props =>
    math(props.theme.form.radioButtonSpace[props.fieldSize] + '/2');

export { radioCircleSize, radioSize, ratioSize };
