import styled from 'styled-components';
import { transparentize, math } from 'polished';
import { LinkBase } from '../../Link/style';
import { LogoBase } from '../../Logo/style';

const TableCellBase = styled.div`
    display: table-cell;
    vertical-align: middle;
    text-align: center;
    padding: ${props => props.theme.space.sm + ' ' + props.theme.space.md};
    color: ${props => props.theme.wab.grey60};

    @media ${props => props.theme.screen.max.sm} {
        padding: ${props => props.theme.space.xs + ' ' + props.theme.space.sm};
    }

    @media ${props => props.theme.screen.max.md} {
        font-size: 0.85em;
    }

    &:nth-child(even) {
        background-color: ${props =>
            transparentize(0.98, props.theme.wab.black00)};
    }

    .icon {
        @media ${props => props.theme.screen.max.sm} {
            width: ${props => props.theme.icon.size.xs};
            height: ${props => props.theme.icon.size.xs};
            padding: ${props =>
                math(
                    props.theme.icon.size.xs + '/2 - ' + props.theme.space.xs,
                )};
        }
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

        @media ${props => props.theme.screen.max.sm} {
            min-height: 30px;
        }
    }

    &:first-of-type {
        text-align: left;

        .content {
            justify-content: flex-start;
        }
    }
`;

export { TableCellBase };
