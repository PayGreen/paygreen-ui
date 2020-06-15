import { css } from 'styled-components';

const arrowSize = props => props.theme.arrow[props.fieldSize];

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        border-top: ${arrowSize} solid
            ${props => props.theme.color.status[props.colorStatus].light};
        border-right: ${arrowSize} solid transparent;
        border-left: ${arrowSize} solid transparent;
        transform-origin: top;
    }
`;

const arrowBlockStyle = {
    top: css`
    ${arrowBase}
        margin-top: ${arrowSize};
        &::after {
            transform: rotate(180deg);
            top: 0;
            right: ${arrowSize};
        }
    `,
    left: css`
    ${arrowBase}
        margin-left: ${arrowSize};
        &::after {
            transform: rotate(90deg);
            left: -${arrowSize};
            top: 50%;
        }
    `,
    right: css`
    ${arrowBase}
        margin-right: ${arrowSize};
        &::after {
            transform: rotate(-90deg);
            right: -${arrowSize};
            top: 50%;
        }
    `,
};

export { arrowBlockStyle, arrowSize };
