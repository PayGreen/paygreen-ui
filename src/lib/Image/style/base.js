import { css } from 'styled-components';
import waveLeftBottom from './waveLeftBottom.svg';
import waveRightBottom from './waveRightBottom.svg';

const changeColor = css`
    background-color: ${props => props.theme.color[props.colorTheme]['light']};

    img {
        opacity: 0.2;
        filter: grayscale(1);
    }
`;

const maskImageStyle = css`
    mask-size: 100%;
    mask-repeat: no-repeat;
    mask-position: bottom;
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

export {
    changeColor,
    bottomStyle
};