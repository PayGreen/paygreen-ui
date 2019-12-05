import { css } from 'styled-components';
import { transparentize } from 'polished';
import { TableCellBase } from '../../TableCell/style';

const rowColor = css`
    background-color: ${props => transparentize(0.95, props.theme.color[props.colorTheme]['main'])};

    ${TableCellBase} {
        b {
            color: ${props => props.theme.color[props.colorTheme]['main']};
        }
    }
`;

export { rowColor };