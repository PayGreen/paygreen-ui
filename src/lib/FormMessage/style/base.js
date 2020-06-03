import { css } from 'styled-components';
import { math } from 'polished';

const fieldSizeRatio = props =>
    math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2');

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        border-top: ${fieldSizeRatio} solid
            ${props => props.theme.color.status[props.colorStatus].light};
        border-right: ${fieldSizeRatio} solid transparent;
        border-left: ${fieldSizeRatio} solid transparent;
        transform-origin: top;
    }
`;

const arrowBlockStyle = {
    top: css`
    ${arrowBase}
        margin-top: ${fieldSizeRatio};
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
        margin-left: ${fieldSizeRatio};
        &::after {
            transform: rotate(90deg);
            left: -${fieldSizeRatio};
            top: 50%;
        }
    `,
    right: css`
    ${arrowBase}
        margin-right: ${fieldSizeRatio};
        &::after {
            transform: rotate(-90deg);
            right: -${fieldSizeRatio};
            top: 50%;
        }
    `,
};

export { arrowBlockStyle, fieldSizeRatio };
