import styled from 'styled-components';
import { responsiveMarginStyle } from '../../../shared/spaces';
import { skeletonItemTypeOptions } from '../../../shared/constants';
import { childrenStyle, noChildrenStyle, reflection } from './base';

const SkeletonItemBase = styled.div`
    ${responsiveMarginStyle};
    position: relative;
    background-color: ${props => props.theme.wab[props.colorWab]};
    border-radius: ${props =>
        props.skeletonItemType === skeletonItemTypeOptions.circle
            ? '50%'
            : props.theme.radius[props.radiusSize]};

    ${props => (props.hasChildren ? childrenStyle : noChildrenStyle)};
    ${props => reflection[props.colorWab]};

    & > * {
        visibility: hidden;
    }
`;

export { SkeletonItemBase };
