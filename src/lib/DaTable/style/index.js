import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const DaTableBase = styled.div`
    ${responsiveSpaces('margin')};

    @media ${props => props.theme.screen.max.lg} {
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
    }

    @media ${props => props.theme.screen.min.lg} {
        width: fit-content;
    }

    .table {
        @media ${props => props.theme.screen.min.lg} {
            display: table;
            border-collapse: collapse;
        }
    }

    .noRowMessage {
        background-color: ${props => props.theme.wab.white10};
        color: ${props => props.theme.wab.grey60};

        @media ${props => props.theme.screen.max.lg} {
            border-radius: ${props => props.theme.radius.sm};
            margin: ${props => props.theme.space.xs};
            padding: ${props => props.theme.space.sm};
        }

        @media ${props => props.theme.screen.min.lg} {
            padding: ${props => props.theme.space.md};
        }
    }
`;

export { DaTableBase };
