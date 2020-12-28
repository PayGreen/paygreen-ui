import styled from 'styled-components';
import { transparentize } from 'polished';
import { largeFirstColumnStyle, backgroundStyle } from './base';
import { TableCellBase } from '../../TableCell/style';
import { TableRowBase } from '../../TableRow/style';

const TableBase = styled.div`
    position: relative;
    overflow-x: auto;
    ${props => (props.hasBackground ? backgroundStyle : null)};

    @media ${props => props.theme.screen.max.sm} {
        mask-image: linear-gradient(
            to left,
            transparent,
            black ${props => props.theme.space.lg}
        );
    }

    .table {
        display: table;
        width: 100%;
    }

    ${TableRowBase} {
        &:first-of-type {
            ${TableCellBase} {
                border-bottom-color: ${props =>
                    transparentize(
                        0.5,
                        props.theme.color[props.colorTheme].main,
                    )};
            }
        }
    }

    strong {
        color: ${props => props.theme.color[props.colorTheme].main};
    }

    ${props => (props.hasLargeFirstColumn ? largeFirstColumnStyle : null)};
`;

export { TableBase };
