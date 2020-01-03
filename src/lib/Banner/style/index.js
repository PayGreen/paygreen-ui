import styled from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { color } from './constants';
import { topWaveStyle, bottomWaveStyle } from './base';

const BannerBase = styled.div`
    position: relative;
    margin-top: ${props => props.topStyle !== decorationOptions.none ? props.theme.wave.double : 0};
    margin-bottom: ${props => props.bottomStyle !== decorationOptions.none ? props.theme.wave.double : 0};
    padding: .1px 0;
    background-image: linear-gradient(
        ${props => color.first[props.gradient]},
        ${props => color.second[props.gradient]}
    );

    ${props => props.topStyle !== waveOptions.none ? topWaveStyle : null};
    ${props => props.bottomStyle !== waveOptions.none ? bottomWaveStyle : null};

    .waves {
        position: absolute;
        left: 0;

        .light {
            opacity: .5;
        }
    }
`;

export { BannerBase };