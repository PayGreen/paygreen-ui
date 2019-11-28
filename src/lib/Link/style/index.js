import styled from 'styled-components';
import { linkColor } from './constants';

const LinkBase = styled.span`
    display: inline-block;
    position: relative;
    font-weight: ${props => props.theme.font.weight.bold};
    color: ${props => linkColor.base[props.colorType]};
    transition: all ${props => props.theme.transition.xs};

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        z-index: ${props => props.theme.zindex.layer};
        height: ${props => props.theme.line};
        width: 100%;
        background-color: ${props => linkColor.base[props.colorType]};
        opacity: .3;
        transition: all ${props => props.theme.transition.xs};
    }

    a:hover &,
    a:active &,
    a:focus & {
        color: ${props => linkColor.hover[props.colorType]};

        &::after {
            height: 100%;
            opacity: 1;
        }
    }
`;

export { LinkBase };