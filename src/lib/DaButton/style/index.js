import styled from 'styled-components';
import { math } from 'polished';
import { colorTypeOptions } from '../../../shared/constants';
import { enabled, disabled, templateStyle } from './base';

const DaButtonBase = styled.span`
    ${props => (props.isDisabled ? disabled : enabled)};
    ${props => templateStyle[props.buttonStyle]};

    display: inline-block;
    position: relative;
    z-index: ${props => props.theme.zindex.base};
    padding: ${props => props.theme.button.paddingHeight[props.buttonSize]}
        ${props => props.theme.button.paddingWidth[props.buttonSize]};
    margin: ${props => props.theme.button.shift};
    transition: all ${props => props.theme.transition.xs};
    text-align: center;
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.buttonSize]};
    border-radius: ${props =>
        math(props.theme.button.font[props.buttonSize] + '*2')};
    background-color: blue;

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            math(props.theme.button.font[props.buttonSize] + '- 0.1')};
    }

    &::before {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.layer};
        height: calc(${props =>
            math(props.theme.button.shift +'*2')} + 100%);
        width: calc(${props =>
            math(props.theme.button.shift +'*2')} + 100%);
        bottom: -${props => props.theme.button.shift};
        left: -${props => props.theme.button.shift};
        border-radius: ${props =>
            math(props.theme.button.font[props.buttonSize] + '*2')};
        opacity: ${props =>
            props.colorType === colorTypeOptions.reverse ? 0.6 : 0.5};
        transition: all ${props => props.theme.transition.xs},
            opacity ${props => props.theme.transition.sm} linear
                ${props => props.theme.transition.xs};
    }
`;

export { DaButtonBase };

