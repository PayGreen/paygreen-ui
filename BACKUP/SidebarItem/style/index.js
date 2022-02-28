import styled from 'styled-components';
import { transparentize } from 'polished';
import { sidebarItemHtmlTagOptions } from '../../../shared/constants';
import { LinkBase } from '../../Link/style';
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

    &::before {
        content: '';
        position: absolute;
        opacity: 0;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(
            to left,
            ${props =>
                transparentize(
                    0.8,
                    props.theme.color[props.colorTheme].gradientShade,
                )},
            ${props =>
                transparentize(
                    0.8,
                    props.theme.color[props.colorTheme].gradientBase,
                )}
        );
        transition: all ${props => props.theme.transition.sm};
    }

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

        &::after {
            display: none !important;
        }
    }

    ${props =>
        props.as === sidebarItemHtmlTagOptions.button ? buttonStyle : null};

    ${props => (props.isActive ? activeStyle : hoverBase)};
`;

export { SidebarItemBase };
