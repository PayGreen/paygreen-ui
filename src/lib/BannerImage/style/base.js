import { css } from 'styled-components';
import waveLeftTop from './waveLeftTop.svg';
import waveRightTop from './waveRightTop.svg';

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: top;
`;

const topStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${waveLeftTop});
    `,
    right: css`
        ${maskImageStyle};
        mask-image: url(${waveRightTop});
    `,
};

export {
    topStyle
};