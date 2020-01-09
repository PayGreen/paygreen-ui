import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { uppercaseStyle } from '../../Text/style/base';
import { hoverStyle } from './base';

const LinkBase = styled.span`
    display: inline-block;
    position: relative;
    /* Display underline style inside containers with background */
    z-index: 0;
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        props.theme.wab.white00 :
        mainColor[props.colorPallet]
    };
    font-weight: ${props => props.theme.font.weight.bold};
    transition: all ${props => props.theme.transition.xs};
    ${props => props.hasUppercase ? uppercaseStyle : null};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: ${props => props.theme.zindex.layer};
        height: ${props => props.hasUnderline ? props.theme.line : 0};
        width: 100%;
        background-color: ${props => props.colorType === colorTypeOptions.reverse ?
            props.theme.wab.white00 :
            mainColor[props.colorPallet]
        };
        opacity: .25;
        transition: all ${props => props.theme.transition.xs};
    }
    
    ${props => props.hasHover ? hoverStyle : null};
`;

export { LinkBase };