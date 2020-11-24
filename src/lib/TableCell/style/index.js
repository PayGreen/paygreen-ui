import styled from 'styled-components';
import { transparentize } from 'polished';
import { LinkBase } from '../../Link/style';
import { LogoBase } from '../../Logo/style';

const TableCellBase = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: ${props => props.theme.space.sm} ${props => props.theme.space.md};
    color: ${props => props.theme.wab.grey60};

    @media ${props => props.theme.screen.max.sm} {
        font-size: 0.85em;
    }

    &:nth-child(even) {
        background-color: ${props => transparentize(0.98, props.theme.wab.black00)};
    }

    ${LogoBase} {
        &:first-child {
            margin-right: ${props => props.theme.space.md};
        }

        @media ${props => props.theme.screen.max.md} {
            display: none;
        }
    }

    ${LinkBase} {
        line-height: ${props => props.theme.font.lineHeight.md};
    }

    i,
    em {
        font-size: ${props => props.theme.font.size.xs};
        font-style: italic;

        @media ${props => props.theme.screen.max.md} {
            display: none;
        }
    }

    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 40px;
    }

    &:first-of-type {
        text-align: left;
        
        .content {
            justify-content: flex-start;
        }
    }
`;

export { TableCellBase };