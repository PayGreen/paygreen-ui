import { css } from 'styled-components';
import maskWaveLeftTop from './maskWaveLeftTop.svg';
import maskWaveRightTop from './maskWaveRightTop.svg';
import maskWaveLeftBottom from './maskWaveLeftBottom.svg';
import maskWaveRightBottom from './maskWaveRightBottom.svg';

const gradientMinHeight = '50vh';

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
`;

const topStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${maskWaveLeftTop});
        padding-top: ${props => props.theme.wave.simple};
    `,
    right: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${maskWaveRightTop});
        padding-top: ${props => props.theme.wave.simple};
    `,
};

const bottomStyle = {
    none: css``,
    left: css`
        padding-bottom: ${props => props.theme.wave.simple};

        &::before,
        &::after {
            ${maskImageStyle};
            mask-position: bottom;
            mask-image: url(${maskWaveLeftBottom});
        }
    `,
    right: css`
        padding-bottom: ${props => props.theme.wave.simple};

        &::before,
        &::after {
            ${maskImageStyle};
            mask-position: bottom;
            mask-image: url(${maskWaveRightBottom});
        }
    `,
    gradient: css`
        min-height: ${gradientMinHeight};
        padding-bottom: ${props => props.theme.blockSpace.md};

        &::before,
        &::after {
            mask-image: linear-gradient(
                to top,
                transparent,
                black ${gradientMinHeight}
            );
        }
    `,
};

export { topStyle, bottomStyle };
