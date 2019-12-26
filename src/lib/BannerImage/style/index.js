import styled from 'styled-components';
import { decorationOptions } from '../../../shared/constants';
import { topStyle } from './base';

const BannerImageBase = styled.div`
    ${props => topStyle[props.topStyle]};
    position: relative;
    min-height: ${props => props.theme.bannerHeight.sm};
    padding: 0 .1px ${props => props.theme.blockSpace.md} .1px;
    padding-top: ${props => props.topStyle !== decorationOptions.none ? props.theme.wave.simple : 0};

    &:before,
    &:after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.background};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: ${props => props.theme.bannerHeight.lg};
        mask-image: linear-gradient(to top, transparent, black ${props => props.theme.bannerHeight.sm});
    }

    &:before {
        background-image: url('${props => props.image}');
        background-size: cover;
        filter: grayscale(1);
        opacity: .5;
    }

    &:after {
        background-color: ${props => props.theme.color[props.colorTheme]['light']};
        opacity: .8;
    }
`;

export { BannerImageBase };