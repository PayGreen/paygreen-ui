import styled from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { withWave, noWave } from './base';

const DividerBase = styled.div`
    margin-top: ${props => props.theme.blockSpace[props.marginTop]};
    margin-bottom: ${props => props.theme.blockSpace[props.marginBottom]};

    span {
        display: block;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.font.spacing};
        font-weight: ${props => props.theme.font.weight.bold};
        font-size: ${props => props.theme.font.size.md};

        @media ${props => props.theme.screen.min.md} {
            font-size: ${props => props.theme.font.size.lg};
        }
    }

    ${props => props.waveStyle !== decorationOptions.none ? withWave : noWave};
`;

export { DividerBase };