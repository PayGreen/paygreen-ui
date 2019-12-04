import { css } from 'styled-components';
import waveLeftBottom from './waveLeftBottom.svg';
import waveRightBottom from './waveRightBottom.svg';

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
`;

const imageToptyle = {
    none: css``,
    gradient: css`
        mask-image: linear-gradient(to bottom, transparent, black 50%);
    `,
    waveLeft: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${waveLeftBottom});
    `,
    waveRight: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${waveRightBottom});
    `,
};

const imageBottomStyle = {
    none: css``,
    gradient: css`
        mask-image: linear-gradient(to top, transparent, black 50%);
    `,
    waveLeft: css`
        ${maskImageStyle};
        mask-position: bottom;
        mask-image: url(${waveLeftBottom});
    `,
    waveRight: css`
        ${maskImageStyle};
        mask-position: bottom;
        mask-image: url(${waveRightBottom});
    `,
};

const imageStyle = css`
    ${props => imageBottomStyle[props.bottomStyle]};
    background-image: url('${props => props.image}');
    background-size: cover;
`;

export {
    imageStyle,
};