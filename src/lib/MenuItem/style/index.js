import styled from 'styled-components';
import { transparentize } from 'polished';
import { LinkBase } from '../../Link/style';
import { IconLabelBase } from '../../IconLabel/style';
import { TextBase } from '../../Text/style';
import {
    hoverEmphasis
} from './base';

const MenuItemBase = styled.div`
    position: relative;
    overflow-x: hidden;
    display: grid;
    grid-template-areas: "icon link iconLabel" "empty text text";
    grid-template-columns: auto 1fr auto;
    grid-column-gap: ${props => props.theme.space.md};
    align-items: center;
    transition: all ${props => props.theme.transition.sm};
    padding: ${props => props.theme.space.sm};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient(to left,
            ${props => transparentize(1, props.theme.color[props.colorTheme]['gradientBase'])} 50%,
            ${props => transparentize(0.8, props.theme.color[props.colorTheme]['gradientBase'])} 90%
        );
        transition: all ${props => props.theme.transition.xl};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &:before {
            left: 0;
        }
    }

    ${props => props.hoverEmphasis ? hoverEmphasis : null};

    .icon {
        grid-area: icon;
        opacity: .5;
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size.sm};
    }

    ${IconLabelBase} {
        grid-area: iconLabel;
    }

    ${TextBase} {
        grid-area: text;
        font-size: ${props => props.theme.font.size.xs};
    }
`;

export { MenuItemBase };