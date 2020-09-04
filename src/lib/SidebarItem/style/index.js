import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { sidebarItemHtmlTagOptions } from '../../../shared/constants';
import { activeStyle, buttonStyle, hoverBase } from './base';

const SidebarItemBase = styled.div`
    position: relative;
    padding: ${props =>
        props.theme.space.xs + ' ' + props.theme.space[props.paddingLateral]};
    margin: ${props => props.theme.line} 0;
    display: grid;
    grid-template-areas: 'icon link button';
    grid-template-columns: ${props => props.theme.icon.size.lg} 1fr auto;
    justify-items: start;
    overflow: hidden;

    & > .icon:first-of-type {
        grid-area: icon;
        opacity: 0.4;
    }

    & > .icon:last-of-type:not(first-of-type) {
        grid-area: button;
        opacity: 1;
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size.sm};
        padding: ${props => props.theme.space.sm} 0;
        margin-left: ${props => props.theme.space.md};
    }

    ${props =>
        props.as === sidebarItemHtmlTagOptions.button ? buttonStyle : null};

    ${props => (props.isActive ? activeStyle : hoverBase)};
`;

export { SidebarItemBase };
