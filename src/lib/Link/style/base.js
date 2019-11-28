import { css } from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { colors } from './constants';

const underlineStyle = css`
    display: inline-block;
    position: relative;

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: ${props => props.theme.zindex.layer};
        height: ${props => props.theme.line};
        width: 100%;
        background-color: ${props => props.colorType === colorTypeOptions.reverse ?
            colors.secondary :
            colors.main[props.colorPallet]
        };
        opacity: .3;
        transition: all ${props => props.theme.transition.xs};
    }

    a:hover &,
    a:active &,
    a:focus & {
        color: ${props => props.colorType === colorTypeOptions.reverse ?
            colors.main[props.colorPallet] :
            colors.secondary
        };

        &::after {
            height: 100%;
            opacity: 1;
        }
    }
`;

export { underlineStyle };