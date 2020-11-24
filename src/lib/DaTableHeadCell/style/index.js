import styled from 'styled-components';
import { borderRight } from '../../DaTableCell/style/base';
import { isCheckboxStyle, mobileStyle, hideUselessCell } from './base';

const DaTableHeadCellBase = styled.div`
    padding: ${props => props.theme.space.sm} 0;
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.bold};

    @media ${props => props.theme.screen.min.lg} {
        display: table-cell;
        padding: ${props => props.theme.space.sm + ' ' + props.theme.space.md};
        padding-top: 0;

        .cell-child {
            margin-top: ${props => props.theme.space.xs};
        }

        .icon-child {
            margin-left: ${props => props.theme.space.xs};
        }

        ${props => (props.isCheckbox ? null : borderRight)};
    }

    ${props => (props.isCheckbox ? isCheckboxStyle : null)};
    ${props =>
        props.isCheckbox || props.hasControls || props.children
            ? mobileStyle
            : hideUselessCell};
`;

export { DaTableHeadCellBase };
