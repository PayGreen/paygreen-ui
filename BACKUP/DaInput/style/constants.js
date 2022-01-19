import { math } from 'polished';

const iconShift = props =>
    math(
        '(' +
            props.theme.daButton.buttonHeight[props.fieldSize] +
            ' - ' +
            props.theme.icon.size[props.fieldSize] +
            ')/2',
    );

export { iconShift };
