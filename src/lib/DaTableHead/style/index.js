import styled from 'styled-components';
import { transparentize } from 'polished';
import { InternalGridBase } from '../../InternalGrid/style';
import { TextBase } from '../../Text/style';

const DaTableHeadBase = styled.div`
    .row {
        @media (${props => props.theme.query.max.lg}) {
            margin: ${props => props.theme.space.xs};
            padding: ${props => props.theme.space.sm};
            background-color: ${props => props.theme.wab.white00};
            border-radius: ${props => props.theme.radius.sm};
            box-shadow: ${props =>
                props.theme.shadow.size.xs +
                ' ' +
                transparentize(
                    props.theme.shadow.opacity.sm,
                    props.theme.wab.black00,
                )};
        }

        @media (${props => props.theme.query.min.lg}) {
            display: table-header-group;
        }
    }

    ${InternalGridBase},
    ${TextBase} {
        @media (${props => props.theme.query.min.lg}) {
            display: none;
        }
    }
`;

export { DaTableHeadBase };
