import { css } from 'styled-components';
import { math } from 'polished';

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        border-top-style: solid;
        border-top-color: ${props => props.theme.color.status[props.colorStatus].light};
        border-top-width: ${props =>
            math(
                props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
            )}
        border-right: ${props =>
            math(
                props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
            )} solid transparent;
        border-left: ${props =>
            math(
                props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
            )} solid transparent;
        transform-origin:top;
    }
`;

const arrowBlockStyle = {
    top: css`
    ${arrowBase}
        margin-top: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        &::after {

            transform: rotate(180deg);
            top: 0;
            right: ${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/1.5',
                )};
        }
    `,
    left: css`
    ${arrowBase}
        margin-left: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        &::after {
            transform: rotate(90deg);
            left: -${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
            top: 50%;
        }
    `,
    right: css`
    ${arrowBase}
        margin-right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        &::after {
            transform: rotate(-90deg);
            right: -${props =>
                math(
                    props.theme.daButton.buttonHeight[props.fieldSize] + '/2',
                )};
            top: 50%;
        }
    `,
};

export { arrowBlockStyle };
