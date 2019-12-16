import styled from 'styled-components';
import { waveOptions } from '../../../shared/constants';
import { color, waveScale } from './constants';

const BannerBase = styled.div`
    position: relative;
    margin-top: ${props => props.topStyle !== waveOptions.none ? props.theme.wave.double : 0};
    margin-bottom: ${props => props.bottomStyle !== waveOptions.none ? props.theme.wave.double : 0};
    padding: .1px 0;
    background-image: linear-gradient(
        ${props => color.first[props.gradient]},
        ${props => color.second[props.gradient]}
    );

    .waves {
        position: absolute;
        left: 0;

        .light {
            opacity: .5;
        }

        &:first-child {
            fill: ${props => color.first[props.gradient]};
            bottom: 100%;
            transform: scale(${props => waveScale[props.topStyle]}, ${waveScale.top});
            margin-bottom: -1px;
        }
        
        &:last-child {
            fill: ${props => color.second[props.gradient]};
            top: 100%;
            transform: scale(${props => waveScale[props.bottomStyle]}, ${waveScale.bottom});
            margin-top: -1px;
        }
    }
`;

export { BannerBase };