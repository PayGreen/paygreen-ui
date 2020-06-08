import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { borderColor, hoverColor } from './base';

const borderNone = 'none';

const ClickableBlockBase = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    
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

    ${props => borderColor[props.colorPallet]};
    border-top: ${props => (props.borderTop ? null : borderNone)};
    border-right: ${props => (props.borderRight ? null : borderNone)};
    border-left: ${props => (props.borderLeft ? null : borderNone)};
    border-bottom: ${props => (props.borderBottom ? null : borderNone)};
    transition: all ${props => props.theme.transition.xs};

    &:hover {
        ${props => hoverColor[props.colorPallet]};
    }
`;

export { ClickableBlockBase };
