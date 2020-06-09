import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { colorTypeOptions } from '../../../shared/constants';
import { mainColor, backgroundColor, minimizeFont } from './constants';

const spanStyle = css`
    display: block;
`;

const italicStyle = css`
    font-style: italic;
`;

const boldStyle = css`
    font-weight: bold;
`;

const quoteStyle = css`
    display: inline-flex;
`;

const subscriptStyle = css`
    font-size: ${props => math(props.theme.font.size[props.textSize] + '* 0.7')};

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props => math(props.theme.font.size[props.textSize] + '* 0.6')};
    }
`;

const keyboardStyle = css`
        border-radius: 2px;
        padding: 5px;
        border: 1px solid black;
        @media (${props => props.theme.query.min.md}) {
            border-radius: 2px;
            padding: 5px;
            border: ${props => props.theme.line} solid black;
        }
`;

const uppercaseStyle = css`
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    letter-spacing: ${props => props.theme.font.spacing};
`;

const blockBackground = {
    original: css`
        background-color: ${props => backgroundColor[props.colorPallet]};
    `,
    reverse: css`
        background-color: ${props =>
            transparentize(0.85, props.theme.wab.white00)};
    `,
};

const textStyle = css`
    color: ${props =>
        props.colorType === colorTypeOptions.reverse
            ? props.theme.wab.white00
            : mainColor[props.colorPallet]};

    line-height: ${props => props.theme.font.lineHeight.md};
    text-align: ${props => props.align};
    font-size: ${props => props.theme.font.size[props.textSize]};

    @media (${props => props.theme.query.max.md}) {
        font-size: ${props =>
            props.theme.font.size[minimizeFont[props.textSize]]};
    }
`;

const internalParagraph = css`
    & > p {
        ${textStyle};
        margin: ${props => props.theme.space[props.marginInternal]} 0;

        &:first-of-type {
            margin-top: 0;
        }

        &:last-of-type {
            margin-bottom: 0;
        }
    }
`;

export {
    spanStyle,
    uppercaseStyle,
    blockBackground,
    textStyle,
    internalParagraph,
    italicStyle,
    boldStyle,
    quoteStyle,
    subscriptStyle,
    keyboardStyle,
};
