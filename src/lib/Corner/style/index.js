import styled from 'styled-components';
import {
    backgroundStyle,
    colorStyle,
    positionStyle,
    squareStyle,
    bannerStyle,
} from './base';

const CornerBase = styled.div`
    position: absolute;
    z-index: ${props => props.theme.zindex.corner};
    top: 0;
    ${props => positionStyle[props.cornerPosition]};
    ${props => (props.hasChildren ? squareStyle : bannerStyle)};

    .corner {
        span {
            ${backgroundStyle};
            ${props => colorStyle[props.colorStyle]};
            font-weight: ${props => props.theme.font.weight.bold};
            white-space: nowrap;
        }
    }
`;

export { CornerBase };
