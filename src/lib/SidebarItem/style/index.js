import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import {
    main,
    sub,
    align
} from './base';

const SidebarItemBase = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: 0 ${props => props.theme.space.sm};
    display: grid;
    grid-template-areas: "icon link";
    grid-template-columns: auto 1fr;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    & > .icon {
        grid-area: icon;
        opacity: .4;
        margin-right: ${props => props.theme.space.md};
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size[props.textSize]};
        color: ${props => props.theme.color[props.colorWab]};
    }

    ${props => props.isMain ? main : sub};
    ${props => align[props.align]};
`;

export { SidebarItemBase };