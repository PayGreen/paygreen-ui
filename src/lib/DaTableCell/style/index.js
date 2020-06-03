import styled from 'styled-components';
import { math } from 'polished';
import { borderRight, idStyle, mainStyle, notMainStyle } from './base';

const DaTableCellBase = styled.div`
    font-size: ${props => props.theme.font.size.xs};
    padding: ${props => props.theme.space.xs};

    @media (${props => props.theme.query.max.lg}) {
        ${props => props.isId ? idStyle : null};
        ${props => props.isMain ? mainStyle : notMainStyle};
    }
    
    @media (${props => props.theme.query.min.lg}) {
        position: relative;
        display: table-cell;
        vertical-align: middle;
        padding: ${props => props.theme.space.md};

        ${props => props.isCheckbox ? null : borderRight};

        &::before,
        &::after {
            content: '';
            position: absolute;
            height: ${props => math(props.theme.line + '/2')};
            width: 100%;
            left: 0;
            background-color: ${props => props.theme.wab.white00};
        }

        &::before {
            top: 0;
        }

        &::after {
            bottom: 0;
        }
    }

    .cell-label {
        @media (${props => props.theme.query.min.lg}) {
            display: none;
        }
    }

    .cell-content {
        width: fit-content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

export { DaTableCellBase };
