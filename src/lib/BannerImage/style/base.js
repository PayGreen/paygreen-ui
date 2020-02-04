import { css } from 'styled-components';
import maskWaveLeftTop from './maskWaveLeftTop.svg';
import maskWaveRightTop from './maskWaveRightTop.svg';

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
};

export {
    topStyle
};