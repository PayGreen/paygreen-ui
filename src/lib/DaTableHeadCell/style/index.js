import styled from 'styled-components';
import { borderRight } from '../../DaTableCell/style/base';
import { isCheckboxStyle, mobileStyle, hideUselessCell } from './base';

const DaTableHeadCellBase = styled.div`
    padding: ${props => props.theme.space.sm} 0;
    color: ${props => props.theme.wab.grey30};
    font-size: ${props => props.theme.font.size.xs};
    font-weight: ${props => props.theme.font.weight.bold};

    @media (${props => props.theme.query.min.lg}) {
        display: table-cell;
        padding: ${props => props.theme.space.sm} ${props => props.theme.space.md};
        padding-top: 0;

        ${props => (props.isCheckbox ? null : borderRight)};
    }

    ${props => (props.isCheckbox ? isCheckboxStyle : null)};
    ${props =>
        props.isCheckbox || props.hasControls || props.children ? mobileStyle : hideUselessCell};
`;

export { DaTableHeadCellBase };
