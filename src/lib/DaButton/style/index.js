import styled from 'styled-components';
import { math } from 'polished';
import {
    buttonStyleOptions,
    colorTypeOptions,
} from '../../../shared/constants';
import {
    enabled,
    disabled,
    originalStyle,
    reverseStyle,
    iconStyleBase,
} from './base';

const Fond = styled.div`
    height: 300px;
    background-color: black;
`;

const DaButtonBase = styled.span`
    display: inline-flex;
    position: relative;
    align-items: center;
    z-index: ${props => props.theme.zindex.base};
    padding: ${props =>
            math(props.theme.button.paddingHeight[props.buttonSize] + '* 0.6')}
        ${props => props.theme.button.paddingWidth[props.buttonSize]};
    margin: ${props => props.theme.button.shift};
    transition: all ${props => props.theme.transition.xs};
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.buttonSize]};
    border-radius: ${props =>
        math(props.theme.button.font[props.buttonSize] + '*2')};
    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            math(props.theme.button.font[props.buttonSize] + '- 0.1')};
    }

    &::before {
        content: '';
        position: absolute;
        transform: scale(0);
        z-index: ${props => props.theme.zindex.layer};
        height: calc(${props => math(props.theme.button.shift + '*2')} + 100%);
        width: calc(${props => math(props.theme.button.shift + '*2')} + 100%);
        bottom: -${props => props.theme.button.shift};
        left: -${props => props.theme.button.shift};
        border-radius: ${props =>
            math(props.theme.button.font[props.buttonSize] + '*2')};
        opacity: ${props =>
            props.buttonStyle === buttonStyleOptions.fill ? 0.3 : 0.2};
        transition: all ${props => props.theme.transition.sm};
    }

    ${props =>
        props.colorType === colorTypeOptions.reverse
            ? reverseStyle[props.buttonStyle]
            : originalStyle[props.buttonStyle][props.gradient]};
    ${props => (props.isDisabled ? disabled : enabled)};
    ${props => (props.icon ? iconStyleBase : null)};
`;

export { DaButtonBase, Fond };
