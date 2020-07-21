import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { borderColor, hoverStyle } from './base';
import { IconBase } from '../../Icon/style';

const borderNone = 'none';

const ClickableBlockBase = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    outline: transparent;
    ${props => borderColor[props.colorPallet]};
    border-top: ${props => (props.borderTop ? null : borderNone)};
    border-right: ${props => (props.borderRight ? null : borderNone)};
    border-left: ${props => (props.borderLeft ? null : borderNone)};
    border-bottom: ${props => (props.borderBottom ? null : borderNone)};
    transition: all ${props => props.theme.transition.xs};

    ${IconBase} {
        @media (${props => props.theme.query.max.md}) {
            ${props => (props.isHiddenOnMobile ? 'display:none' : null)}
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
