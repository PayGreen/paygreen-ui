import { css } from 'styled-components';
import { colorTypeOptions } from '../../../shared/constants';
import { lineColor, minimizeFont } from './constants';

const strongColor = css`
    color: ${props => props.theme.color[props.colorTheme].main};
`;

const smallText = css`
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const bigText = css`
    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            props.theme.font.size[minimizeFont[props.textSize]]};
    }
`;

const underlineAlign = {
    left: css`
        left: 0;
    `,
    center: css`
        left: 50%;
        transform: translateX(-50%);
    `,
    right: css`
        right: 0;
    `,
};

const underline = css`
    position: relative;
    padding-bottom: ${props =>
        props.theme.font.underline.space[props.textSize]};
    margin-bottom: ${props => props.theme.font.underline.space[props.textSize]};

    &::after {
        ${props => underlineAlign[props.align]};
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => props.theme.font.underline.line[props.textSize]};
        width: ${props => props.theme.font.underline.width[props.textSize]};
        background-color: ${props =>
            props.colorType === colorTypeOptions.reverse
                ? lineColor.reverse
                : lineColor[props.colorPallet]};
    }
`;

export { strongColor, smallText, bigText, underline };
