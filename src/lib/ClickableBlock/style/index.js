import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { borderColor, hoverStyle } from './base';

const ClickableBlockBase = styled.div`
    cursor: pointer;
    outline: none;
    display: inline-flex;
    align-items: center;
    ${props => borderColor[props.colorPallet]};
    border-top: ${props => (props.borderTop ? null : 'none')};
    border-right: ${props => (props.borderRight ? null : 'none')};
    border-left: ${props => (props.borderLeft ? null : 'none')};
    border-bottom: ${props => (props.borderBottom ? null : 'none')};
    transition: all ${props => props.theme.transition.xs};

    .arrow {
        @media ${props => props.theme.screen.max.md} {
            display: ${props => (props.isHiddenOnMobile ? 'none' : null)};
        }
    }

    ${props =>
        directionalProperty(
            'padding',
            props.theme.space[props.paddingTop],
            props.theme.space[props.paddingLateral],
            props.theme.space[props.paddingBottom],
            props.theme.space[props.paddingLateral],
        )};

    ${props =>
        directionalProperty(
            'margin',
            props.theme.space[props.marginTop],
            props.theme.space[props.marginLateral],
            props.theme.space[props.marginBottom],
            props.theme.space[props.marginLateral],
        )};

    &:hover,
    &:focus,
    &:active {
        ${props => hoverStyle[props.colorPallet]};
    }
`;

export { ClickableBlockBase };
