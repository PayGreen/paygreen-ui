import styled from 'styled-components';
import { responsiveMarginStyle } from '../../../shared/spaces';
import { skeletonItemTypeOptions } from '../../../shared/constants';
import { isLoadingStyle, childrenStyle, noChildrenStyle } from './base';

const SkeletonItemBase = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: ${props =>
        props.skeletonItemType === skeletonItemTypeOptions.circle
            ? '50%'
            : props.theme.radius[props.radiusSize]};

    ${responsiveMarginStyle};

    ${props => (props.isLoading ? isLoadingStyle : null)};
    ${props => (props.hasChildren ? childrenStyle : noChildrenStyle)};
`;

export { SkeletonItemBase };
