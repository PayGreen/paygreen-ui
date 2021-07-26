import { css } from 'styled-components';
import maskWaveLeftTop from './maskWaveLeftTop.svg';
import maskWaveRightTop from './maskWaveRightTop.svg';
import maskWaveLeftBottom from './maskWaveLeftBottom.svg';
import maskWaveRightBottom from './maskWaveRightBottom.svg';
import { decorationOptions } from '../../../shared/constants';


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
        padding-top: ${({topStyle, theme}) => topStyle !== decorationOptions.none ? theme.wave.simple : 0};
    `,
    right: css`
        ${maskImageStyle};
        mask-position: top;
        mask-image: url(${maskWaveRightTop});
        padding-top: ${({topStyle, theme}) => topStyle !== decorationOptions.none ? theme.wave.simple : 0};
    `,
    gradient: css`
        mask-image: linear-gradient(
            to top,
            transparent,
            black ${({ theme }) => theme.bannerHeight.sm}
        );
    `,
};

const bottomStyle = {
    none: css``,
    left: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveLeftBottom});
        mask-position: bottom;
        padding-bottom: ${({bottomStyle, theme}) => bottomStyle !== decorationOptions.none ? theme.wave.simple : 0};
    `,
    right: css`
        ${maskImageStyle};
        mask-image: url(${maskWaveRightBottom});
        mask-position: bottom;
        padding-bottom: ${({bottomStyle, theme}) => bottomStyle !== decorationOptions.none ? theme.wave.simple : 0};
    `,
    gradient: css`
        mask-image: linear-gradient(
            to top,
            transparent,
            black ${({ theme }) => theme.bannerHeight.sm}
        );
    `,
};

export { topStyle, bottomStyle };
