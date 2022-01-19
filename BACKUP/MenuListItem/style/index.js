import styled from 'styled-components';
import { transparentize } from 'polished';
import { LinkBase } from '../../Link/style';
import { IconLabelBase } from '../../IconLabel/style';
import { TextBase } from '../../Text/style';

const MenuListItemBase = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: ${props => props.theme.space.sm};
    padding-right: ${props => props.theme.space.md};
    display: grid;
    grid-template-areas: 'icon link iconLabel' 'empty text text';
    grid-template-columns: auto 1fr auto;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient(
            to left,
            ${props =>
                    transparentize(
                        1,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                50%,
            ${props =>
                    transparentize(
                        0.8,
                        props.theme.color[props.colorTheme].gradientBase,
                    )}
                90%
        );
        transition: all ${props => props.theme.transition.xl};
    }

    a:hover &,
    a:active &,
    a:focus & {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.sm};

        &::before {
            left: 0;
        }
    }

    & > .icon {
        grid-area: icon;
        opacity: 0.4;
        margin-right: ${props => props.theme.space.md};
    }

    ${LinkBase} {
        grid-area: link;
        padding: ${props => props.theme.space.sm} 0;
        font-size: ${props => props.theme.font.size.sm};

        &::after {
            display: none !important;
        }
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

export { MenuListItemBase };
