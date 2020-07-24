import styled from 'styled-components';
import { PopinBase } from '../../Popin/style';
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

    ${PopinBase} {
        opacity: 0;
        pointer-events: none;
        left: inherit;
        ${props => positionStyle[props.cornerPosition]};

        &::before {
            content: '';
            position: absolute;
            width: 100%;
            height: ${props => props.theme.space.lg};
            margin-top: -${props => props.theme.space.lg};
        }
    }

    &:hover {
        ${PopinBase} {
            opacity: 1;
            pointer-events: inherit;
        }
    }
`;

export { CornerBase };
