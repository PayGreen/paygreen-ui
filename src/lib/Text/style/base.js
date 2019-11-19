import { css } from 'styled-components';
import {
    blockSpace,
} from './constants';
import { transparentize } from 'polished';

const padding = css`
    padding: 0 ${props => blockSpace('xs', props.paddingBlock)};

    @media (${props => props.theme.query.min.sm}) {
        padding: 0 ${props => blockSpace('sm', props.paddingBlock)};
    }

    @media (${props => props.theme.query.min.md}) {
        padding: 0 ${props => blockSpace('md', props.paddingBlock)};
    }
`;

const topMargin = css`
    margin-top: ${props => blockSpace('xs', props.marginTop)};

    @media (${props => props.theme.query.min.sm}) {
        margin-top: ${props => blockSpace('sm', props.marginTop)};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-top: ${props => blockSpace('md', props.marginTop)};
    }
`;

const bottomMargin = css`
    margin-bottom: ${props => blockSpace('xs', props.marginBottom)};

    @media (${props => props.theme.query.min.sm}) {
        margin-bottom: ${props => blockSpace('sm', props.marginBottom)};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-bottom: ${props => blockSpace('md', props.marginBottom)};
    }
`;

const blockSpaces = css`
    ${props => props.theme.blockPadding[props.paddingBlock] ? padding : null};

    ${props => props.theme.blockPadding[props.marginTop] ? 
        topMargin :
        css`margin-top: 0;`
    };

    ${props => props.theme.blockPadding[props.marginBottom] ? 
        bottomMargin :
        css`margin-bottom: 0;`
    };
`;

const textColor = {
    original: css`
        color: ${props => props.theme.wab[props.mainColor]};

        strong {
            color: ${props => props.theme.color[props.colorTheme]['main']};
        }
    `,
    reverse: css`
        color: ${props => transparentize(0.05, props.theme.wab.white00)};
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
    topMargin,
    bottomMargin,
    blockSpaces,
    textStyle,
    internalParagraph
};