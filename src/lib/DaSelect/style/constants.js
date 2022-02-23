import { math } from 'polished';

const arrow = {
    width: props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/7'),
    height: props =>
        math(props.theme.daButton.buttonHeight[props.fieldSize] + '/6'),
    space: {
        basic: props =>
            math(
                props.theme.space.sm +
                    '+' +
                    props.theme.daButton.buttonHeight[props.fieldSize] +
                    '/3.5',
            ),
        rounded: props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize]),
    },
};

export { arrow };
