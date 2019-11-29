import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { IconLabelBase } from '../../IconLabel/style';
import { TextBase } from '../../Text/style';
import {
    hoverBase,
    hoverEmphasis
} from './base';

const MenuItemBase = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: ${props => props.theme.space.sm};
    display: grid;
    grid-template-areas: "icon link iconLabel" "empty text text";
    grid-template-columns: auto 1fr auto;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    ${props => props.hoverBase ? hoverBase : null};
    ${props => props.hoverEmphasis ? hoverEmphasis : null};

    .icon {
        grid-area: icon;
        opacity: .4;
        margin-right: ${props => props.theme.space.md};
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size.sm};
        padding: ${props => props.theme.space.sm} 0;
    }

    ${IconLabelBase} {
        grid-area: iconLabel;
        margin-left: ${props => props.theme.space.md};
    }

    ${TextBase} {
        grid-area: text;
        font-size: ${props => props.theme.font.size.xs};
    }
`;

export { MenuItemBase };