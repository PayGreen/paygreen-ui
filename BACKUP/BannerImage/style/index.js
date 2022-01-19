import styled from 'styled-components';
import { topStyle, bottomStyle, modifiedColorStyle } from './base';

const BannerImageBase = styled.div`
    position: relative;
    padding: 0 0.1px;
    ${props => topStyle[props.topStyle]};
    ${props => bottomStyle[props.bottomStyle]};
    ${props => (props.hasModifiedColor ? modifiedColorStyle : null)};

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
    }
`;

export { BannerImageBase };
