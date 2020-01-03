import { css } from 'styled-components';
import { transparentize } from 'polished';
import waveLeftBottom from './waveLeftBottom.svg';
import waveRightBottom from './waveRightBottom.svg';

const changeColor = css`
    background-color: ${props => props.theme.color[props.colorTheme].light};

    img {
        opacity: 0.2;
        filter: grayscale(1);
    }
`;

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: center 101%;
`;

const bottomStyle = {
    none: css``,
    gradient: css`
        mask-image: linear-gradient(to top, transparent, black 50%);
    `,
    waveLeft: css`
        ${maskImageStyle};
        mask-image: url(${waveLeftBottom});
    `,
    waveRight: css`
        ${maskImageStyle};
        mask-image: url(${waveRightBottom});
    `,
};

const imageStyle = {
    normal: css`
        width: 100%;
        max-height: 100%;
    `,
    picture: css`
        max-width: 100%;
        max-height: 100%;
    `,
    cover: css`
        object-fit: cover;
        width: 100%;
        height: 100%;
    `,
};

const backgroundBlock = css`
    background-color: ${props => props.theme.wab.white00};
`;

const radiusStyle = {
    notCropped: css`
        border-radius: ${props => props.theme.radius[props.radiusSize]};
    `,
    croppedCircle: css`
        border-radius: 50%;
    `
};

const notCropped = css`
    ${props => bottomStyle[props.bottomStyle]};
    ${radiusStyle.notCropped};
    height: ${props => props.theme.imageSize[props.blockHeight]};
    width: ${props => props.theme.imageSize[props.blockWidth]};

    img {
        border-radius: ${props => props.theme.radius[props.radiusSize]};
    }
`;

const croppedCircle = css`
    ${radiusStyle.croppedCircle};
    height: ${props => props.theme.imageCircleSize[props.blockHeight]};
    width: ${props => props.theme.imageCircleSize[props.blockWidth]};

    img {
        border-radius: 50%;
    }
`;

const shadowStyle = css`
    margin: 0;

    img {
        box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
            props.theme.shadow.opacity[props.shadow],
            props.colorChange ? props.theme.color[props.colorTheme].main : props.theme.wab.black00
        )};
    }
`;

const decorationShift = '2px';

const decorationStyle = css`
    position: relative;
    margin: ${decorationShift};
    padding: ${props => props.theme.space.sm};

    img {
        z-index: ${props => props.theme.zindex.base};
    }

    &::before,
    &::after {
        content: '';
        background-color: ${props => props.theme.wab.white00};
        opacity: .3;
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: ${props => props.theme.zindex.background};
        box-shadow: 0 0 ${decorationShift} ${props => transparentize(0.7, props.theme.wab.black00)};
        ${props => radiusStyle[props.isCircle ? 'croppedCircle' : 'notCropped']};
    }

    &::before {
        margin-top: -${decorationShift};
        margin-left: -${decorationShift};
        top: 0;
        left: 0;
    }

    &::after {
        margin-bottom: -${decorationShift};
        margin-right: -${decorationShift};
        bottom: 0;
        right: 0;
    }
`;

export {
    changeColor,
    imageStyle,
    backgroundBlock,
    notCropped,
    croppedCircle,
    shadowStyle,
    decorationStyle
};