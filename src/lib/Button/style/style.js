import styled, {css} from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';

const ButtonBase = styled.a`
    display: inline-block;
    position: relative;
    outline: none;
    text-align: center;
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.button.font[props.size]};
    letter-spacing: ${props => props.theme.button.letterSpacing[props.size]};
    padding: ${props => props.theme.button.paddingHeight[props.size]} ${props => props.theme.button.paddingWidth[props.size]};
    margin: ${props => props.theme.button.margin};
    transition: all ${props => props.theme.transition.xs};

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.button};
        height: 100%;
        width: 100%;
        border-radius: ${props => props.theme.radius.sm};
        opacity: ${props => props.colorType === colorTypeOptions.reverse ? 0.6 : 0.5};
        transition:
            all ${props => props.theme.transition.xs},
            opacity ${props => props.theme.transition.sm} linear ${props => props.theme.transition.xs};
    }

    &::before {
        top: ${props => props.theme.button.shift};
        left: ${props => props.theme.button.shift};
    }

    &::after {
        bottom: ${props => props.theme.button.shift};
        right: ${props => props.theme.button.shift};
    }
`;

const hover = css`
    &:hover,
    &:active,
    &:focus {
        &::before,
        &::after {
            opacity: 1;
        }

        &::before {
            top: 0;
            left: 0;
        }

        &::after {
            bottom: 0;
            right: 0;
        }
    }
`;

const disabled = css`
    cursor: not-allowed;
`;

export {
    ButtonBase, 
    hover,
    disabled
};