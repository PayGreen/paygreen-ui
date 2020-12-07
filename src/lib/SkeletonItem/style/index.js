import styled from 'styled-components';
import { transparentize } from 'polished';
import { responsiveMarginStyle } from '../../../shared/spaces';
import { skeletonItemTypeOptions } from '../../../shared/constants';
import { childrenStyle, noChildrenStyle, loading } from './base';

const SkeletonItemBase = styled.div`
    ${responsiveMarginStyle};
    position: relative;
    overflow: hidden;
    background-color: ${props => props.theme.wab[props.colorWab]};
    border-radius: ${props =>
        props.skeletonItemType === skeletonItemTypeOptions.circle
            ? '50%'
            : props.theme.radius[props.radiusSize]};

    ${props => (props.hasChildren ? childrenStyle : noChildrenStyle)};

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        background-image: linear-gradient(
            -70deg,
            ${props => transparentize(1, props.theme.wab.white00)} 40%,
            ${props => transparentize(0.8, props.theme.wab.white00)} 40% 60%,
            ${props => transparentize(1, props.theme.wab.white00)} 80%
        );
        animation: ${loading} ease-in-out 1.5s infinite;
    }

    & > * {
        visibility: hidden;
    }
`;

export { SkeletonItemBase };
