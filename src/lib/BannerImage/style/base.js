import { css } from 'styled-components';
import maskWaveLeftTop from './maskWaveLeftTop.svg';
import maskWaveRightTop from './maskWaveRightTop.svg';
import maskWaveLeftBottom from './maskWaveLeftBottom.svg';
import maskWaveRightBottom from './maskWaveRightBottom.svg';

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
`;

const topStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveLeftTop});
        mask-position: top;
        padding-top: ${props => props.theme.wave.simple};
    `,
    right: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${maskWaveRightTop});
        padding-top: ${props => props.theme.wave.simple};
    `,
    gradient: css`
        mask-image: linear-gradient(
            to top,
            transparent,
            black ${(props) => props.theme.bannerHeight.sm};
            padding-top: ${props => props.theme.wave.simple};
        );
    `,
};

const bottomStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveLeftBottom});
        mask-position: bottom;
        padding-bottom: ${props => props.theme.wave.simple};
    `,
    right: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveRightBottom});
        mask-position: bottom;
        padding-bottom: ${props => props.theme.wave.simple};
    `,
    gradient: css`
        mask-image: linear-gradient(
            to top,
            transparent,
            black ${(props) => props.theme.bannerHeight.sm};
            padding-bottom: ${props => props.theme.wave.simple};
        );
    `,
};

export { topStyle, bottomStyle };
