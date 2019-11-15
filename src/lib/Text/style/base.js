import { css } from 'styled-components';
import {
    paddingSizes,
} from './constants';
import { transparentize } from 'polished';

const padding = css`
    padding: 0 ${paddingSizes.xs};

    @media (${props => props.theme.query.min.sm}) {
        padding: 0 ${paddingSizes.sm};
    }

    @media (${props => props.theme.query.min.md}) {
        padding: 0 ${paddingSizes.md};
    }
`;

const blockSpaces = css`
    ${props => props.theme.blockPadding[props.paddingBlock] ? padding : null};

    margin-top: ${props => props.theme.blockPadding[props.marginTop]};
    margin-bottom: ${props => props.theme.blockPadding[props.marginBottom]};
`;

const textColor = {
    original: css`
        color: ${props => props.theme.color[props.mainColor]};

        strong {
            color: ${props => props.theme.color[props.colorTheme]['main']};
        }
    `,
    reverse: css`
        color: ${props => transparentize(0.05, props.theme.color.white00)};
    `,
};

const textStyle = css`
    ${props => textColor[props.colorType]};

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
    blockSpaces,
    textStyle,
    internalParagraph
};