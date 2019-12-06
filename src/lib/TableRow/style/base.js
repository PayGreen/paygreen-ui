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

const mainRow = css`
    ${TableCellBase} {
        &:first-of-type {
            text-transform: uppercase;
            font-size: ${props => props.theme.font.size.sm};
            font-weight: ${props => props.theme.font.weight.bold};
            letter-spacing: ${props => props.theme.font.spacing};
            color: ${props => props.theme.wab.grey30};
            vertical-align: bottom;

            .content {
                align-items: flex-end;
            }
        }

        &:not(:first-of-type) {
            vertical-align: top;

            .content {
                flex-direction: column;
                justify-content: flex-start;

                span {
                    font-weight: ${props => props.theme.font.weight.bold};
                    color: ${props => props.theme.wab.grey40};
                }

                i {
                    color: ${props => props.theme.wab.grey30};
                    font-style: normal;
                    margin-top: ${props => props.theme.space.sm};
                }
            }
        }
    }
`;

export {
    rowColor,
    mainRow
};