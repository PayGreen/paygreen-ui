import styled from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { topStyle, bottomStyle } from './base';

const BannerImageBase = styled.div`
    ${props => topStyle[props.topStyle]};
    ${props => bottomStyle[props.bottomStyle]};
    position: relative;
    min-height: ${({theme}) => theme.bannerHeight.sm};
    padding: 0 .1px ${({theme}) => theme.blockSpace.md} .1px;
    padding-top: ${({topStyle, theme}) => topStyle !== decorationOptions.none ? theme.wave.simple : 0};
    padding-bottom: ${({bottomStyle, theme}) => bottomStyle !== decorationOptions.none ? theme.wave.simple : 0};

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${({theme}) => theme.zindex.background};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: ${({theme}) => theme.bannerHeight.lg};
        mask-image: linear-gradient(to top, transparent, black ${({theme}) => theme.bannerHeight.sm});
    }

    &::before {
        background-image: url('${({image}) => image}');
        background-size: cover;
        filter: grayscale(1);
        opacity: .5;
    }

    &::after {
        background-color: ${({useColorTheme, theme, colorTheme}) => useColorTheme ? theme.color[colorTheme].light : null};
        opacity: .8;
    }
`;

export { BannerImageBase };