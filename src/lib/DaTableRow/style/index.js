import styled from 'styled-components';
import { gridTemplate, gridColumns } from './constants';
import {
    cellsAreas,
    openStyle,
    hoverStyle,
    activeStyle,
    loadingStyle,
} from './base';

const DaTableRowBase = styled.div`
    background-color: ${props => props.theme.wab.white10};
    transition: all ${props => props.theme.transition.xxs};
    ${props => (props.isLoading ? loadingStyle : hoverStyle)};
    ${props => (props.isActive ? activeStyle : null)};

    @media ${props => props.theme.screen.max.lg} {
        margin: ${props => props.theme.space.xs};
        padding: ${props => props.theme.space.sm + ' ' + props.theme.space.xs};
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

        .cell-basic {
            height: 0;
            padding-top: 0;
            padding-bottom: 0;
            opacity: 0;
            overflow: hidden;
            transition: all ${props => props.theme.transition.sm};

            ${props => (props.isOpen ? openStyle : null)};
        }
    }

    @media ${props => props.theme.screen.min.lg} {
        display: table-row;
        background-color: transparent;
        border: solid
            ${props => props.theme.line + ' ' + props.theme.wab.white00};
        border-left: none;
        border-right: none;
    }
`;

export { DaTableRowBase };
