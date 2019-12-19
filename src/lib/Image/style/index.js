import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    imageSizeOptions,
    spaceOptions,
    shadowStyleOptions
} from '../../../shared/constants';
import {
    changeColor,
    bottomStyle,
    imageStyle,
    backgroundBlock
} from './base';

const ImageBase = styled.figure`
    ${props => props.colorChange ? changeColor : null};
    ${props => bottomStyle[props.bottomStyle]};
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    margin: 0;
    max-height: ${props => props.maxHeight !== imageSizeOptions.auto ? props.theme.imageSize[props.maxHeight] : '100%'};
    max-width: ${props => props.maxWidth !== imageSizeOptions.auto ? props.theme.imageSize[props.maxWidth] : '100%'};
    height: ${props => props.theme.imageSize[props.blockHeight]};
    width: ${props => props.theme.imageSize[props.blockWidth]};
    border-radius: ${props => props.theme.radius[props.radiusSize]};

    img {
        ${props => imageStyle[props.imageType]};
        ${props => props.padding !== spaceOptions.none && props.shadow !== shadowStyleOptions.none ? backgroundBlock : null};
        display: block;
        box-sizing: border-box;
        padding: ${props => props.theme.space[props.padding]};
        border-radius: ${props => props.theme.radius[props.radiusSize]};
        box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
            props.theme.shadow.opacity[props.shadow],
            props.colorChange ? props.theme.color[props.colorTheme]['main'] : props.theme.wab.black00
        )};
    }
`;

export { ImageBase };