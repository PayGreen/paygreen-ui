import styled from 'styled-components';
import { transparentize } from 'polished';
import { InternalGridBase } from '../../InternalGrid/style';
import { TextBase } from '../../Text/style';
import { openStyle, closedStyle } from './base';

const DaTableHeadBase = styled.div`
    @media ${props => props.theme.screen.max.lg} {
        margin: ${props => props.theme.space.xs};
        margin-bottom: ${props => props.theme.space.sm};
        padding: ${props => props.theme.space.sm};
        border-radius: ${props => props.theme.radius.sm};
        background-color: ${props => props.theme.wab.white00};
        box-shadow: ${props =>
            props.theme.shadow.size.xs +
            ' ' +
            transparentize(
                props.theme.shadow.opacity.sm,
                props.theme.wab.black00,
            )};
        overflow: hidden;
        ${props => (props.isHeadOpen ? openStyle : closedStyle)};
    }

    @media ${props => props.theme.screen.min.lg} {
        display: table-header-group;
    }

    ${InternalGridBase} {
        cursor: pointer;
    }

    ${InternalGridBase},
    ${TextBase} {
        @media ${props => props.theme.screen.min.lg} {
            display: none;
        }
    }
`;

export { DaTableHeadBase };
