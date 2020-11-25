import { css } from 'styled-components';
import { transparentize } from 'polished';
import { colorPalletOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { lineColor, minimizeFont } from './constants';

const smallText = css`
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const bigText = css`
    @media ${props => props.theme.screen.max.md} {
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
    }
`;

const color = {
    original: css`
        color: ${props => mainColor[props.colorPallet]};

        &::after {
            background-color: ${props => lineColor[props.colorPallet]};
        }

        strong {
            color: ${props =>
                props.colorPallet === colorPalletOptions.wab
                    ? props.theme.color[props.colorTheme].main
                    : null};
        }
    `,
    reverse: css`
        color: ${props => transparentize(0.05, props.theme.wab.white00)};
        text-shadow: 0 0 ${props => props.theme.space.md} ${mainColor.theme};

        &::after {
            background-color: ${props =>
                transparentize(0.6, props.theme.wab.white00)};
        }
    `,
};

export { smallText, bigText, underline, color };
