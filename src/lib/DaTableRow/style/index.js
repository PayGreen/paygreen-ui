import styled from 'styled-components';
import { gridTemplate, gridColumns } from './constants';
import { cellsAreas, toggableStyle, activeStyle, hoverStyle } from './base';

const DaTableRowBase = styled.div`
    transition: all ${props => props.theme.transition.sm};
    ${hoverStyle};
    ${props => (props.isActive ? activeStyle : null)};

    @media (${props => props.theme.query.max.lg}) {
        margin: ${props => props.theme.space.xs};
        padding: ${props => props.theme.space.xs};
        border-radius: ${props => props.theme.radius.sm};
        display: grid;
        grid-template-areas: ${props =>
            gridTemplate(
                props.mainCellCount,
                props.notMainCellCount,
                props.hasCheckbox,
                props.hasId,
            )};
        grid-template-columns: ${props =>
            gridColumns(props.mainCellCount, props.hasCheckbox, props.hasId)};
        align-items: center; 

        ${cellsAreas};
        ${toggableStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table-row;

        .cell-checkbox {
            padding-right: 0;
        }
    }
`;

export { DaTableRowBase };
