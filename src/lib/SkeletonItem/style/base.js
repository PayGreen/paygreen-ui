import { css, keyframes } from 'styled-components';
import {
    imageSizeOptions,
    skeletonItemTypeDefault,
    skeletonItemTypeOptions,
} from '../../../shared/constants';
import { reflectionGradient } from './constants';

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

const reflectionBase = css`
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transform: translateX(-100%);
        animation: ${loading} ease-in-out 1.5s infinite;
    }
`;

const reflection = {
    white00: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.white20, 50)};
        }
    `,
    white10: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.white00, 80)};
        }
    `,
    white20: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.white00, 70)};
        }
    `,
    grey10: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.white00)};
        }
    `,
    grey20: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey10)};
        }
    `,
    grey30: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey20)};
        }
    `,
    grey40: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey30)};
        }
    `,
    grey50: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey40)};
        }
    `,
    grey60: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey50)};
        }
    `,
    black00: css`
        ${reflectionBase};

        &::after {
            background-image: ${props =>
                reflectionGradient(props.theme.wab.grey50)};
        }
    `,
};

export { childrenStyle, noChildrenStyle, reflection };
