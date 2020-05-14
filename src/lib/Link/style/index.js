import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { linkUppercase, hoverStyle, underlineStyle } from './base';

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
    padding-top: ${props => props.theme.space[props.paddingTop]};
    padding-bottom: ${props => props.theme.space[props.paddingBottom]};
    padding-left: ${props => props.theme.space[props.paddingLeft]};
    padding-right: ${props => props.theme.space[props.paddingRight]};
    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left:0;
        z-index: ${props => props.theme.zindex.layer};
        width: 100%;
    }
    transition: all ${props => props.theme.transition.xs};

    ${props => props.hasUppercase ? linkUppercase : null};
    ${props => props.hasUnderline ? underlineStyle : null};
    ${props => props.hasHover ? hoverStyle[props.hoverStyle] : null};
`;

export { LinkBase };