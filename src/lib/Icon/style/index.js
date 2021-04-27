import styled from 'styled-components';
import { directionalProperty } from 'polished';
import {
    activeColor,
    baseColor,
    backgroundStyle,
    noBackground,
    numberStyle,
} from './base';

const IconBase = styled.span`
    flex-shrink: 0; // icon must never shrink, even inside flex container
    display: ${props => (props.isCentered ? 'flex' : 'inline-flex')};
    box-sizing: content-box;
    position: relative;
    width: ${props => props.theme.icon.size[props.iconSize]};
    height: ${props => props.theme.icon.size[props.iconSize]};
    ${props =>
        directionalProperty(
            'margin',
            props.theme.space[props.marginTop],
            props.isCentered ? 'auto' : props.theme.space[props.marginRight],
            props.theme.space[props.marginBottom],
            props.isCentered ? 'auto' : props.theme.space[props.marginLeft],
        )};
    transform: rotate(${props => props.theme.rotateSize[props.rotateSize]});
    transition: all ${props => props.theme.transition.sm};

    svg {
        width: 100%;
        transition: all ${props => props.theme.transition.sm};
    }

    ${props => baseColor[props.colorPallet]};
    ${props => (props.hasBackground ? backgroundStyle : noBackground)};
    ${props =>
        props.hasBackground && props.isActive
            ? activeColor[props.colorPallet]
            : null};

    ${props => (props.number ? numberStyle : null)};
`;

export { IconBase };
