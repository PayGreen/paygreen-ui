import styled from 'styled-components';
import { directionalProperty } from 'polished';
import { spaceOptions, shadowSizeOptions } from '../../../shared/constants';
import {
    changeColor,
    imageStyle,
    backgroundBlock,
    notCropped,
    croppedCircle,
    shadowStyle,
    decorationShift,
    decorationStyle,
} from './base';

const ImageBase = styled.figure`
    ${props => (props.hasModifiedColor ? changeColor : null)};
    ${props => (props.isCircle ? croppedCircle : notCropped)};
    ${props => (props.hasDecoration ? decorationStyle : shadowStyle)};
    display: flex;
    justify-content: ${props => props.justifyContent};
    align-items: ${props => props.alignItems};
    max-height: 100%;
    max-width: 100%;
    ${props =>
        directionalProperty(
            'margin',
            props.hasDecoration && props.marginTop === spaceOptions.none
                ? decorationShift
                : props.theme.space[props.marginTop],
            props.hasDecoration && props.marginRight === spaceOptions.none
                ? decorationShift
                : props.theme.space[props.marginRight],
            props.hasDecoration && props.marginBottom === spaceOptions.none
                ? decorationShift
                : props.theme.space[props.marginBottom],
            props.hasDecoration && props.marginLeft === spaceOptions.none
                ? decorationShift
                : props.theme.space[props.marginLeft],
        )};

    img {
        ${props => imageStyle[props.imageType]};
        ${props =>
            props.padding !== spaceOptions.none &&
            props.shadowSize !== shadowSizeOptions.none
                ? backgroundBlock
                : null};
        display: block;
        box-sizing: border-box;
        padding: ${props => props.theme.space[props.padding]};
    }
`;

export { ImageBase };
