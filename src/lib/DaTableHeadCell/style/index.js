import styled from 'styled-components';
import { borderRight } from '../../DaTableCell/style/base';
import { checkboxStyle, mobileStyle, hideUselessCell } from './base';

const DaTableHeadCellBase = styled.div`
    padding: ${props => props.theme.space.sm} 0;
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.bold};

    @media ${props => props.theme.screen.min.lg} {
        display: table-cell;
        padding: 0 ${props => props.theme.space.md};
        padding-bottom: ${props => props.theme.space.sm};

        .cell-child {
            margin-top: ${props => props.theme.space.xs};
        }

        .icon-child {
            margin-left: ${props => props.theme.space.xs};
        }
    }

    ${props => (props.isCheckbox ? checkboxStyle : borderRight)};
    ${props =>
        props.isCheckbox || props.hasControls || props.children
            ? mobileStyle
            : hideUselessCell};
`;

export { DaTableHeadCellBase };
