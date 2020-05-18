import styled from 'styled-components';
import { transparentize } from 'polished';
import { activeStyle, hiddenStyle } from './base';

const PopinBase = styled.div`
    box-sizing: border-box;
    margin: 0;

    position: fixed;
    margin-top: ${props => props.theme.iconSize.xs};
    padding: ${props => props.theme.radius.lg} 0;
    width: ${props => props.theme.blockWidth[props.blockWidth]};
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius[props.radiusSize]};
    box-shadow: ${props =>
        props.theme.shadow.size[props.shadowSize] +
        ' ' +
        transparentize(props.theme.shadow.opacity.sm, props.theme.wab.black00)};

    transition-property: opacity, transform;
    transition-duration: ${props => props.theme.transition.xs}, 0.3s;
    transition-delay: 0.3s, ${props => props.theme.transition.xs};
    ${props => (props.isActive ? activeStyle : hiddenStyle)}
`;

export { PopinBase };
