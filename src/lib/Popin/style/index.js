import styled from 'styled-components';
import { transparentize, math } from 'polished';
import { spaceOptions } from '../../../shared/constants';
import { activeStyle, hiddenStyle, popinAlign } from './base';

const PopinBase = styled.div`
    position: absolute;
    z-index: ${props => props.theme.zindex.popin};
    width: ${props =>
        props.blockWidth !== spaceOptions.none
            ? math(props.theme.blockWidth[props.blockWidth] + ' / 2')
            : '50%'};
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius[props.radiusSize]};
    box-shadow: ${props =>
        props.theme.shadow.size[props.shadowSize] +
        ' ' +
        transparentize(props.theme.shadow.opacity.sm, props.theme.wab.black00)};
    transition-property: all, transform;
    transition-duration: ${props => props.theme.transition.xs}, 0s;

    ${props => (props.isActive ? activeStyle : hiddenStyle)};
    ${props => popinAlign[props.align]};
`;

export { PopinBase };
