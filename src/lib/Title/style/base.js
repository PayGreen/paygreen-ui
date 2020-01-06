import { css } from 'styled-components';
import { transparentize } from 'polished';
import { colorTypeOptions, colorPalletOptions } from '../../../shared/constants';
import { mainColor } from '../../Text/style/constants';
import { lineColor, smallFontSizes, minimizeFont } from './constants';

const strongColor = css`
    color: ${props => props.theme.color[props.colorTheme].main};
`;

const smallText = css`
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
`;

const bigText = css`
    @media (${props => props.theme.query.max.md}) {
        font-size: ${props => props.theme.font.size[minimizeFont[props.textSize]]};
    }
`;

const fontStyle = css`
    font-weight: ${props => props.theme.font.weight.bold};
    font-size: ${props => props.theme.font.size[props.textSize]};
    ${props => smallFontSizes.includes(props.textSize) ? smallText : bigText};
    color: ${props => props.colorType === colorTypeOptions.reverse ?
        transparentize(0.05, props.theme.wab.white00) :
        mainColor[props.colorPallet]
    };

    strong {
        font-weight: ${props => props.theme.font.weight.bold};

        ${props => props.colorType !== colorTypeOptions.reverse &&
            props.colorPallet === colorPalletOptions.wab ?
                strongColor : null
        }
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
    `
};

const underline = css`
    position: relative;
    padding-bottom: ${props => props.theme.font.underline.space[props.textSize]};
    margin-bottom: ${props => props.theme.font.underline.space[props.textSize]};

    &::after {
        ${props => underlineAlign[props.textAlign]};
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => props.theme.font.underline.line[props.textSize]};
        width: ${props => props.theme.font.underline.width[props.textSize]};
        background-color: ${props => props.colorType === colorTypeOptions.reverse ?
            lineColor.reverse :
            lineColor[props.colorPallet]
        };
    }
`;

export {
    fontStyle,
    underline,
};