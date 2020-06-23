import { css } from 'styled-components';
import { mainColor } from './constants';

const hasBackgroundStyle = css`
    background-color: ${props =>
        props.hasBackground
            ? props.theme.wab[props.backgroundColor]
            : 'transparent'};
`;

const valueStyle = css`
    opacity: 0.5;
    background-color: ${props => mainColor[props.colorPallet]};
`;

const zeroValueStyle = css`
    opacity: 0.2;
    background-color: ${props => props.theme.wab.black00};
`;

export { hasBackgroundStyle, valueStyle, zeroValueStyle };
