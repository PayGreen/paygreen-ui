import styled from 'styled-components';
import { transparentize } from 'polished';

const borderNone = 'none';

const ClickableBlockBase = styled.div`
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding: ${props => props.theme.space.xs};
    border: solid ${props => props.theme.line + props.theme.wab.grey10};
    border-top: ${props => (props.borderTop ? null : borderNone)};
    border-right: ${props => (props.borderRight ? null : borderNone)};
    border-left: ${props => (props.borderLeft ? null : borderNone)};
    border-bottom: ${props => (props.borderBottom ? null : borderNone)};
    transition: all ${props => props.theme.transition.xs};

    &:hover {
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xxl,
                props.theme.wab.grey10,
            )};
    }
`;

export { ClickableBlockBase };
