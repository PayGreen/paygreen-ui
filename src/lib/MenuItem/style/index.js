import styled from 'styled-components';
import { math } from 'polished';
import { uppercaseStyle } from '../../Text/style/base';
import { noClickableStyle, isClickableStyle } from './base';

const MenuItemBase = styled.div`
    display: flex;
    align-items: center;
    height: ${props => math(props.theme.grid.header + '+' + props.theme.line)};
    padding: 0 ${props => props.theme.space.sm};
    font-size: ${props => props.theme.font.size.sm};
    white-space: nowrap;
    transition: all ${props => props.theme.transition.sm};
    ${uppercaseStyle};
    ${props => props.isClickable ? isClickableStyle : noClickableStyle};

    .icon {
        opacity: 0.6;
        margin-right: ${props => props.theme.space.sm};

        svg {
            fill: ${props => props.theme.color[props.colorTheme].main};
        }
    }

    @media (${props => props.theme.query.min.lg}) {
        flex-direction: column;
        justify-content: center;
        z-index: ${props => props.theme.zindex.menu};
        text-align: center;
        font-size: ${props => props.theme.font.size.xs};

        .icon {
            display: none;
        }
    }
`;

export { MenuItemBase };
