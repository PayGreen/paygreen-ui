import { css } from 'styled-components';
import { transparentize } from 'polished';
import { transparentColorOptions } from '../../../shared/constants';
import { fontColor, backgroundColor } from './constants';

const blockBackground = {
    original: css`
        background-color: ${props => backgroundColor[props.backgroundColor]};
    `,
    reverse: css`
        background-color: ${props => props.backgroundColor !== transparentColorOptions.none ? transparentize(0.85, props.theme.wab.white00) : 'transparent'};
    `
};

const textColor = {
    one: css`
        color: ${props => fontColor.secondary[props.colorType]};
    `,
    two: css`
        color: ${props => fontColor.main[props.colorType]};

        strong {
            color: ${props => fontColor.secondary[props.colorType]};
        }
    `
};

const textStyle = css`
    ${props => textColor[props.colorNumber]};

    line-height: 1.5;
    font-size: ${props => props.theme.font.size[props.textSize]};
    text-align: ${props => props.textAlign};
`;

const internalParagraph = css`
    p {
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
    blockBackground,
    textStyle,
    internalParagraph,
};