import styled from 'styled-components';
import { transparentize } from 'polished';
import { rowColor, mainRow } from './base';
import { TableCellBase } from '../../TableCell/style';

const TableRowBase = styled.div`
    display: table-row;

    &:first-of-type {
        ${TableCellBase} {
            &:not(:first-of-type) {
                @media ${props => props.theme.screen.max.md} {
                    vertical-align: bottom;

                    .content {
                        justify-content: flex-end;
                    }
                }
            }
        }
    }

    &:last-of-type {
        ${TableCellBase} {
            border-bottom: 0;
        }
    }

    ${TableCellBase} {
        border-bottom: solid
            ${props =>
                props.theme.line +
                ' ' +
                transparentize(0.92, props.theme.wab.black00)};
        border-radius: ${props =>
                props.theme.radius.sm + ' ' + props.theme.radius.sm}
            0 0;
    }

    ${props => (props.colorTheme !== 'none' ? rowColor : null)};
    ${props => (props.isMain ? mainRow : null)};
`;

export { TableRowBase };
