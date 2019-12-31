import { css } from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { colors } from './constants';

const underlineStyle = css`
    display: inline-block;
    position: relative;
    /* Display hover style inside containers with background */
    z-index: 0;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: ${props => props.theme.zindex.layer};
        height: ${props => props.theme.line};
        width: 100%;
        background-color: ${props => props.colorType === colorTypeOptions.reverse ?
            props.theme.wab.white00 :
            colors[props.colorPallet]
        };
        opacity: .25;
        transition: all ${props => props.theme.transition.xs};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &::after {
            height: 100%;
        }
    }
`;

const uppercaseStyle = css`
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    letter-spacing: ${props => props.theme.font.spacing};
`;

export {
    underlineStyle,
    uppercaseStyle
};