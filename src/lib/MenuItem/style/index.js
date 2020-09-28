import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { IconLabelBase } from '../../IconLabel/style';
import { TextBase } from '../../Text/style';
import { main, sub, align } from './base';

const MenuItemBase = styled.div`
    position: relative;
    overflow-x: hidden;
    padding: 0 ${props => props.theme.space.sm};
    display: grid;
    grid-template-areas: 'icon link iconLabel' 'empty text text';
    grid-template-columns: auto 1fr auto;
    align-items: center;
    transition: all ${props => props.theme.transition.sm};

    & > .icon {
        grid-area: icon;
        opacity: 0.4;
        margin-right: ${props => props.theme.space.md};
    }

    ${LinkBase} {
        grid-area: link;
        font-size: ${props => props.theme.font.size.sm};
    }

    ${IconLabelBase} {
        grid-area: iconLabel;
        margin-left: ${props => props.theme.space.md};
    }

    ${TextBase} {
        grid-area: text;
        font-size: ${props => props.theme.font.size.xs};
    }

    ${props => (props.isMain ? main : sub)};
    ${props => align[props.align]};
`;

export { MenuItemBase };
