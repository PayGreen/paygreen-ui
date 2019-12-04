import styled from 'styled-components';
import { topStyle } from './base';

const minHeight = '300px';
const maxHeight = '700px';

const BannerImageBase = styled.div`
    ${props => topStyle[props.topStyle]};
    position: relative;
    min-height: ${minHeight};
    padding: 8vw .1px ${props => props.theme.blockSpace.md} .1px;

    &:before,
    &:after {
        content: '';
        position: absolute;
        z-index: ${props => props.theme.zindex.background};
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        max-height: ${maxHeight};
        mask-image: linear-gradient(to top, transparent, black ${minHeight});
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