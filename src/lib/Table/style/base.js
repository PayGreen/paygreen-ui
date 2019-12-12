import { css } from 'styled-components';
import { transparentize } from 'polished';
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

const backgroundStyle = css`
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius.lg};
    box-shadow: ${props => props.theme.shadow.size.sm + ' ' + transparentize(
        0.9,
        props.theme.wab.black00
    )};
    padding: ${props => props.theme.space.sm};

    @media (${props => props.theme.query.min.md}) {
        padding: ${props => props.theme.space.md};
    }

    @media (${props => props.theme.query.min.xl}) {
        padding: ${props => props.theme.space.lg};
    }
`;

export {
    largeFirstColumnStyle,
    backgroundStyle
};