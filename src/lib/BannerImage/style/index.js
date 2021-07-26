import styled from 'styled-components';
import { topStyle, bottomStyle } from './base';

const BannerImageBase = styled.div`
    position: relative;
    min-height: ${({ theme }) => theme.bannerHeight.sm};
    padding: 0 0.1px;
    ${props => topStyle[props.topStyle]};
    ${props => bottomStyle[props.bottomStyle]};

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${({ theme }) => theme.zindex.background};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: ${({ theme }) => theme.bannerHeight.lg};
        mask-image: linear-gradient(
            to top,
            transparent,
            black ${({ theme }) => theme.bannerHeight.sm}
        );
    }

    &::before {
        background-image: url('${({ image }) => image}');
        background-size: cover;
        filter: grayscale(1);
        opacity: 0.5;
    }

    &::after {
        background-color: ${({ hasModifiedColor, theme, colorTheme }) =>
            hasModifiedColor ? theme.color[colorTheme].light : null};
        opacity: 0.8;
    }
`;

export { BannerImageBase };
