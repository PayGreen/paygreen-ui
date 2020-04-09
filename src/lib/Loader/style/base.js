import { css, keyframes } from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const borderSize = 3;

const turnAnimation = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const circleStyle = css`
    border-radius: 50%;
    border: solid ${borderSize}px transparent;
    animation-name: ${turnAnimation};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
`;

const activeStyle = css`
    ${responsiveSpaces('padding')};

    span {
        width: ${props => props.theme.loaderSize[props.loaderSize]};
        height: ${props => props.theme.loaderSize[props.loaderSize]};
    }
`;

const hiddenStyle = css`
    span {
        height: 0;
        width: 0;
        opacity: 0;
        border-width: 0;
    }
`;

export { borderSize, circleStyle, activeStyle, hiddenStyle };
