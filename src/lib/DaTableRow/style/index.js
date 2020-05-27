import styled from 'styled-components';
import { gridTemplate } from './constants';
import { cellsAreas } from './base';

const DaTableRowBase = styled.div`
    @media (${props => props.theme.query.max.lg}) {
        display: grid;
        grid-template-areas: ${props =>
            gridTemplate(
                props.mainCellCount,
                props.notMainCellCount,
                props.hasCheckbox,
            )};
        
        ${cellsAreas};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table-row;
    }
`;

export { DaTableRowBase };
