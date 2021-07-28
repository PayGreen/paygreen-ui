import styled from 'styled-components';
import { topStyle, bottomStyle } from './base';

const BannerImageBase = styled.div`
    position: relative;
    padding: 0 0.1px;
    ${props => topStyle[props.topStyle]};
    ${props => bottomStyle[props.bottomStyle]};

    &::before,
    &::after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.background};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: 100vh; // avoid background-image to be too big
    }

    &::before {
        background-image: url('${props => props.image}');
        background-size: cover;
        filter: grayscale(1);
        opacity: 0.5;
    }

    &::after {
        background-color: ${props =>
            props.hasModifiedColor
                ? props.theme.color[props.colorTheme].light
                : null};
        opacity: 0.8;
    }
`;

export { BannerImageBase };
