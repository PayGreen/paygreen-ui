import { css, keyframes } from 'styled-components';
import { transparentize } from 'polished';
import { skeletonItemTypeOptions } from '../../../shared/constants';

const childrenStyle = css`
    max-width: ${props =>
        props.blockWidth === 'auto'
            ? 'fit-content'
            : props.theme.imageSize[props.blockWidth]};
`;

const noChildrenStyle = css`
    max-width: ${props =>
        props.blockWidth !== 'auto'
            ? props.theme.imageSize[props.blockWidth]
            : props.theme.blockWidth.none};
    height: ${props =>
        props.blockHeight !== 'auto'
            ? props.skeletonItemType === skeletonItemTypeOptions.text
                ? props.theme.imageCircleSize[props.blockHeight]
                : props.theme.imageSize[props.blockHeight]
            : props.theme.blockWidth.none};
`;

const loading = keyframes`
    to {
        transform: translateX(100%);
    }
`;

const isLoadingStyle = css`
    background-color: ${props => props.theme.wab[props.colorWab]};

    &::after {
        content: '';
        display: block;
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

export { childrenStyle, noChildrenStyle, isLoadingStyle };
