import { css } from 'styled-components';
import { color, waveScale } from './constants';

const spaceForHeader = css`
    padding-top: ${props => props.theme.grid.headerBig};
`;

const topWaveStyle = css`
    margin-top: ${props => props.theme.wave.double};

    .waves {
        &:first-child {
            fill: ${props => color.first[props.gradient]};
            bottom: 100%;
            transform: scale(${props => waveScale[props.topStyle]}, ${waveScale.top});
            margin-bottom: -1px;
        }
    }
`;

const bottomWaveStyle = css`
    margin-bottom: ${props => props.theme.wave.double};

    .waves {
        &:last-child {
            fill: ${props => color.second[props.gradient]};
            top: 100%;
            transform: scale(${props => waveScale[props.bottomStyle]}, ${waveScale.bottom});
            margin-top: -1px;
        }
    }
`;

export {
    spaceForHeader,
    topWaveStyle,
    bottomWaveStyle
};