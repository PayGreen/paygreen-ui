import styled from 'styled-components';
import { transparentize } from 'polished';
import { MenuPrimaryBase } from '../../MenuPrimary/style';
import { hiddenStyle, topStyle } from './base';

const MenuGroupBase = styled.div`
    @media ${props => props.theme.screen.min.lg} {
        position: relative;
        z-index: ${props => props.theme.zindex.header};
        height: ${props => props.theme.grid.header};
        padding: ${props => props.theme.space.sm};
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: ${props => props.theme.wab.white00};
        border-bottom: ${props =>
            props.theme.line + ' solid ' + props.theme.wab.white20};
        box-shadow: ${props =>
            props.theme.shadow.size.lg +
            ' ' +
            transparentize(
                props.theme.shadow.opacity.sm,
                props.theme.wab.black00,
            )};
        transition: all ${props => props.theme.transition.sm};

        ${props => (props.isHidden ? hiddenStyle : null)};
        ${props => (props.hasTopStyle ? topStyle : null)};

        ${MenuPrimaryBase} {
            flex: 1;
            justify-content: flex-end;
        }
    }
`;

export { MenuGroupBase };
