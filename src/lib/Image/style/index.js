import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    changeColor,
    bottomStyle,
    imageStyle
} from './base';

const ImageBase = styled.figure`
    ${props => props.colorChange ? changeColor : null};
    ${props => bottomStyle[props.bottomStyle]};
    margin: 0;
    max-width: 100%;
    max-height: 100%;
    height: ${props => props.theme.imageSize[props.blockHeight]};
    width: ${props => props.theme.imageSize[props.blockWidth]};
    border-radius: ${props => props.theme.radius[props.radiusSize]};

    img {
        ${props => imageStyle[props.imageType]};
        display: block;
        border-radius: ${props => props.theme.radius[props.radiusSize]};
        box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
            props.theme.shadow.opacity[props.shadow],
            props.colorChange ? props.theme.color[props.colorTheme]['main'] : props.theme.wab.black00
        )};
    }
`;

export { ImageBase };