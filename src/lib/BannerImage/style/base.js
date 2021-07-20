import { css } from 'styled-components';
import maskWaveLeftTop from './maskWaveLeftTop.svg';
import maskWaveRightTop from './maskWaveRightTop.svg';
import maskWaveLeftBottom from './maskWaveLeftBottom.svg';
import maskWaveRightBottom from './maskWaveRightBottom.svg';

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: top;
`;

const topStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveLeftTop});
    `,
    right: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveRightTop});
    `,
    gradient: css`
    mask-image: linear-gradient(to top, transparent, black ${({theme}) =>  theme.bannerHeight.sm});
    `
};

const bottomStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveLeftBottom});
        mask-position: left bottom;
   
    `,
    right: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveRightBottom});
        mask-position: right bottom;
     
    `,
    gradient: css`
    mask-image: linear-gradient(to top, transparent, black ${({theme}) => theme.bannerHeight.sm});
   `
}

export {
    topStyle,
    bottomStyle
};