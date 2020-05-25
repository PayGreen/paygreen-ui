import styled from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { opacity, linkUppercase, hoverStyle } from './base';

const LinkBase = styled.span`
    display: inline-block;
    position: relative;
    /* Display underline style inside containers with background */
    z-index: 0;
    color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : mainColor[props.colorPallet]};
    font-weight: ${props => props.theme.font.weight.bold};
    padding-top: ${props => props.theme.space[props.paddingTop]};
    padding-bottom: ${props => props.theme.space[props.paddingBottom]};
    padding-left: ${props => props.theme.space[props.paddingLeft]};
    padding-right: ${props => props.theme.space[props.paddingRight]};
    transition: all ${props => props.theme.transition.xs};

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: ${props => props.theme.zindex.layer};
        width: 100%;
        height: ${props => (props.hasUnderline ? props.theme.line : '100%')};
        opacity: ${props => (props.hasUnderline ? opacity : 0)};
        background-color: ${props =>
            props.colorType === colorTypeOptions.reverse
                ? props.theme.wab.white00
                : mainColor[props.colorPallet]};
        transition: all ${props => props.theme.transition.xs};
    }

    ${props => (props.hasUppercase ? linkUppercase : null)};
    ${props => (props.hasHover ? hoverStyle : null)};
`;

export { LinkBase };
