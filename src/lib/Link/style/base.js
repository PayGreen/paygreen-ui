import { css } from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';

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
            mainColor[props.colorPallet]
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

export {
    underlineStyle,
};