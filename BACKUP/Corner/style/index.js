import styled from 'styled-components';
import { PopinBase } from '../../Popin/style';
import { colorStyle } from './constants';
import {
    backgroundStyle,
    positionStyle,
    centeredPopinStyle,
    cornerStyle,
} from './base';

const CornerBase = styled.div`
    position: absolute;
    top: 0;
    ${props => positionStyle[props.position]};
    ${props => cornerStyle[props.cornerStyle]};

    .corner {
        .cornerContent {
            ${backgroundStyle};
            color: ${props => colorStyle[props.colorStyle]};
            position: relative;
            z-index: ${props => props.theme.zindex.corner};
            display: flex;
            justify-content: center;
            align-items: center;
            line-height: ${props => props.theme.font.lineHeight.base};
            font-weight: ${props => props.theme.font.weight.bold};
            white-space: nowrap;

            .icon svg {
                fill: ${props => colorStyle[props.colorStyle]};
            }
        }
    }

    ${PopinBase} {
        opacity: 0;
        pointer-events: none;
        ${props => positionStyle[props.position]};
        ${props =>
            props.hasCenteredPopin ? centeredPopinStyle[props.position] : null};

        &::before {
            /* add transparent zone above Popin to improve hover behaviour */
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
