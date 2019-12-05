import styled from 'styled-components';
import { LinkBase } from '../../Link/style';

const TableCellBase = styled.div`
    display: table-cell;
    padding: ${props => props.theme.space.sm} ${props => props.theme.space.md};
    color: ${props => props.theme.wab.grey60};

    .content {
        display: flex;
        align-items: center;
        min-height: 40px;

        .logo {
            height: 25px;
            width: 90px;
            display: flex;
            justify-content: center;
            align-items: center;

            &:first-child {
                margin-right: ${props => props.theme.space.md};
            }

            img {
                display: block;
                max-height: 100%;
                max-width: 100%;
            }
        }

        i {
            font-size: ${props => props.theme.font.size.xs};
            font-style: italic;
        }

        ${LinkBase} {
            line-height: 1.5;
        }
    }
`;

export { TableCellBase };