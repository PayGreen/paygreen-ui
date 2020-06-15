import { css } from 'styled-components';
import { math } from 'polished';

const arrowSize = props => props.theme.arrow[props.fieldSize];

const arrowBase = css`
    &::after {
        content: '';
        position: absolute;
        border: solid ${arrowSize} transparent;
    }
`;

const arrowBlockStyle = {
    top: css`
    ${arrowBase}
        margin-top: ${arrowSize};
        &::after {
            border-bottom-color: ${props => props.theme.color.status[props.colorStatus].light};
            top:-${props => math (props.theme.arrow[props.fieldSize] + '*2')};
            right: ${arrowSize};
        }
    `,
    left: css`
    ${arrowBase}
        margin-left: ${arrowSize};
        &::after {
            border-right-color: ${props => props.theme.color.status[props.colorStatus].light};
            left: -${props => math (props.theme.arrow[props.fieldSize] + '*2')};
            top: 50%;
        }
    `,
    right: css`
    ${arrowBase}
        margin-right: ${arrowSize};
        &::after {
            border-left-color: ${props => props.theme.color.status[props.colorStatus].light};
            right: -${props => math (props.theme.arrow[props.fieldSize] + '*2')};
            top: 35%;
        }
    `,
};

export { arrowBlockStyle, arrowSize };
