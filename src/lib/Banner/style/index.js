import styled from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { color } from './constants';
import { spaceForHeader, topWaveStyle, bottomWaveStyle } from './base';

const BannerBase = styled.div`
    position: relative;
    padding: .1px 0;
    background-image: linear-gradient(
        ${props => color.first[props.gradient]},
        ${props => color.second[props.gradient]}
    );
    
    ${props => props.isFirstContent ? spaceForHeader : null};
    ${props => props.topStyle !== decorationOptions.none ? topWaveStyle : null};
    ${props => props.bottomStyle !== decorationOptions.none ? bottomWaveStyle : null};

    .waves {
        position: absolute;
        left: 0;

        .light {
            opacity: .5;
        }
    }
`;

export { BannerBase };