import styled from 'styled-components';
import { waveOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { withWave, noWave } from './base';

const DividerBase = styled.div`
    ${responsiveSpaces('margin', 0, 2, 2)};

    span {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        text-transform: uppercase;
        font-weight: ${props => props.theme.font.weight.extra};
        letter-spacing: ${props => props.theme.font.spacing};
        font-size: ${props => props.theme.font.size.md};

        @media (${props => props.theme.query.min.xl}) {
            font-size: ${props => props.theme.font.size.lg};
        }
    }

    ${props => props.waveStyle !== waveOptions.none ? withWave : noWave};
`;

export { DividerBase };