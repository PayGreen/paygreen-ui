import styled from 'styled-components';
import { LinkBase } from '../../Link/style';
import { IconLabelBase } from '../../IconLabel/style';
import { TextBase } from '../../Text/style';

const MenuItemBase = styled.div`
    display: grid;
    grid-template-areas: "icon link iconLabel" "empty text text";
    grid-template-columns: auto 1fr auto;
    grid-column-gap: ${props => props.theme.space.md};
    align-items: center;

    .icon {
        grid-area: icon;
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