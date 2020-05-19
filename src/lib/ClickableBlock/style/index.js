import styled from 'styled-components';
import { transparentize } from 'polished';

const ClickableBlockBase = styled.div`
    display: inline-flex;
    align-items: center;

    padding: ${props => props.theme.space.xs};
    border-top: ${props =>
        props.borderTop ? props.theme.wab.grey10 + ' solid 1px' : 'none'};
    border-right: ${props =>
        props.borderRight ? props.theme.wab.grey10 + ' solid 1px' : 'none'};
    border-left: ${props =>
        props.borderLeft ? props.theme.wab.grey10 + ' solid 1px' : 'none'};
    border-bottom: ${props =>
        props.borderBottom ? props.theme.wab.grey10 + ' solid 1px' : 'none'};

    &:hover {
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.lg,
                props.theme.wab.grey10,
            )};};
        cursor : pointer;
    }

    transition: background-color ${props => props.theme.transition.sm};
`;

export { ClickableBlockBase };
