import { css } from 'styled-components';
import { transparentize } from 'polished';
import { TableCellBase } from '../../TableCell/style';

const largeFirstColumnStyle = css`
    ${TableCellBase} {
        &:first-of-type {
            @media ${props => props.theme.screen.min.sm} {
                min-width: 200px;
            }
        }

        &:not(:first-of-type) {
            max-width: 180px;

            @media ${props => props.theme.screen.min.sm} {
                min-width: 120px;
            }
        }
    }
`;

const overflowEmphasisStyle = css`
    @media ${props => props.theme.screen.max.md} {
        margin-left: -${props => props.theme.space.md} !important;
        margin-right: -${props => props.theme.space.md} !important;
        mask-image: linear-gradient(
            to left,
            transparent,
            black ${props => props.theme.space.md}
        );
    }

    .table {
        @media ${props => props.theme.screen.max.md} {
            padding: 0 ${props => props.theme.space.md};
        }
    }
`;

const backgroundStyle = css`
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius.lg};
    box-shadow: ${props =>
        props.theme.shadow.size.sm +
        ' ' +
        transparentize(0.9, props.theme.wab.black00)};
    padding: ${props => props.theme.space.sm};

    @media ${props => props.theme.screen.min.md} {
        padding: ${props => props.theme.space.md};
    }

    @media ${props => props.theme.screen.min.xl} {
        padding: ${props => props.theme.space.lg};
    }
`;

export { largeFirstColumnStyle, overflowEmphasisStyle, backgroundStyle };
