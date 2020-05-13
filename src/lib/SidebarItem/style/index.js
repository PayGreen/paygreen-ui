import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { activeStyle, hoverBase } from './base';

const SidebarItemBase = styled.div`
    position: relative;
    padding: ${props => props.theme.space.sm};
    display: grid;
    grid-template-areas: 'icon link';
    grid-template-columns: ${props => props.theme.iconSize.xl} 1fr;
    transition: all ${props => props.theme.transition.sm};

    & > .icon {
        grid-area: icon;
        opacity: 0.4;
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size[props.textSize]};
        padding: ${props => props.theme.space.sm} 0;
        margin-left: ${props => props.theme.space.md};
    }

    ${props => (props.isActive ? activeStyle : hoverBase)};
`;

export { SidebarItemBase };
