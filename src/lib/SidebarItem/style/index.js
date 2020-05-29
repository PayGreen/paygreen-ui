import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { activeStyle, hoverBase } from './base';

const SidebarItemBase = styled.div`
    position: relative;
    padding: ${props => props.theme.space.xs};
    margin: ${props => props.theme.line} 0;
    display: grid;
    grid-template-areas: 'icon link button';
    grid-template-columns: ${props => props.theme.iconSize.lg} 1fr auto;
    overflow: hidden;

    & > .icon {
        grid-area: icon;
        opacity: 0.4;
    }

    & > button.icon {
        grid-area: button;
        opacity: 1;
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size.sm};
        padding: ${props => props.theme.space.sm} 0;
        margin-left: ${props => props.theme.space.md};
    }

    ${props => (props.isActive ? activeStyle : hoverBase)};
`;

export { SidebarItemBase };
