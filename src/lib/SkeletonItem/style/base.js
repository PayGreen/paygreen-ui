import { css, keyframes } from 'styled-components';
import {
    imageSizeOptions,
    skeletonItemTypeDefault,
    skeletonItemTypeOptions,
} from '../../../shared/constants';

const childrenStyle = css`
    max-width: ${props =>
        props.blockWidth === imageSizeOptions.auto
            ? 'fit-content'
            : props.theme.imageSize[props.blockWidth]};
`;

const noChildrenStyle = css`
    max-width: ${props =>
        props.blockWidth !== imageSizeOptions.auto
            ? props.skeletonItemType === skeletonItemTypeOptions.circle
                ? props.theme.imageCircleSize[props.blockWidth]
                : props.theme.imageSize[props.blockWidth]
            : props.theme.blockWidth.none};
    height: ${props =>
        props.blockHeight !== imageSizeOptions.auto
            ? props.skeletonItemType === skeletonItemTypeDefault
                ? props.theme.imageSize[props.blockHeight]
                : props.theme.imageCircleSize[props.blockHeight]
            : props.theme.blockWidth.none};
`;

const loading = keyframes`
    to {
        transform: translateX(100%);
    }
`;

export { childrenStyle, noChildrenStyle, loading };
