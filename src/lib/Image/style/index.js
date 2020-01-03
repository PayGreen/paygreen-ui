import styled from 'styled-components';
import {
    spaceOptions,
    shadowStyleOptions
} from '../../../shared/constants';
import {
    changeColor,
    imageStyle,
    backgroundBlock,
    noCropped,
    croppedCircle,
    shadowStyle,
    decorationStyle
} from './base';

const ImageBase = styled.figure`
    ${props => props.colorChange ? changeColor : null};
    ${props => props.cropCircle ? croppedCircle : noCropped};
    ${props => props.hasDecoration ? decorationStyle : shadowStyle};
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    max-height: 100%;
    max-width: 100%;

    img {
        ${props => imageStyle[props.imageType]};
        ${props => props.padding !== spaceOptions.none && props.shadow !== shadowStyleOptions.none ? backgroundBlock : null};
        display: block;
        box-sizing: border-box;
        padding: ${props => props.theme.space[props.padding]};
    }
`;

export { ImageBase };