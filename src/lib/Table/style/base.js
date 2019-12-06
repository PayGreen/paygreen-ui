import { css } from 'styled-components';
import { TableCellBase } from '../../TableCell/style';

const largeFirstColumnStyle = css`
    ${TableCellBase} {
        &:not(:first-of-type) {
            max-width: 180px;
        }
    }
`;

export {
    largeFirstColumnStyle
};