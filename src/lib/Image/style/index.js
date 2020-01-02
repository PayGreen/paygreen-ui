import styled from 'styled-components';
import { transparentize } from 'polished';
import {
    spaceOptions,
    shadowStyleOptions
} from '../../../shared/constants';
import {
    changeColor,
    imageStyle,
    backgroundBlock,
    noCropped,
    croppedCircle
} from './base';

const ImageBase = styled.figure`
    ${props => props.colorChange ? changeColor : null};
    ${props => props.cropCircle ? croppedCircle : noCropped};
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    margin: 0;
    max-height: 100%;
    max-width: 100%;


    img {
        ${props => imageStyle[props.imageType]};
        ${props => props.padding !== spaceOptions.none && props.shadow !== shadowStyleOptions.none ? backgroundBlock : null};
        display: block;
        box-sizing: border-box;
        padding: ${props => props.theme.space[props.padding]};
        box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
            props.theme.shadow.opacity[props.shadow],
            props.colorChange ? props.theme.color[props.colorTheme].main : props.theme.wab.black00
        )};
    }
`;

export { ImageBase };