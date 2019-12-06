import { css } from 'styled-components';
import { TableCellBase } from '../../TableCell/style';

const largeFirstColumnStyle = css`
    ${TableCellBase} {
        &:first-of-type {
            min-width: 200px;
        }

        &:not(:first-of-type) {
            min-width: 120px;
            max-width: 180px;
        }
    }
`;

export {
    largeFirstColumnStyle
};