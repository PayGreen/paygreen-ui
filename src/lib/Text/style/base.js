import { css } from 'styled-components';
import { transparentColorOptions } from '../../../shared/constants';
import {
    blockSpace,
    backgroundColor
} from './constants';
import { transparentize } from 'polished';

// Paddings

const lateralPadding = css`
    padding-left: ${props => blockSpace('xs', props.paddingLateral)};
    padding-right: ${props => blockSpace('xs', props.paddingLateral)};

    @media (${props => props.theme.query.min.sm}) {
        padding-left: ${props => blockSpace('sm', props.paddingLateral)};
        padding-right: ${props => blockSpace('sm', props.paddingLateral)};
    }

    @media (${props => props.theme.query.min.md}) {
        padding-left: ${props => blockSpace('md', props.paddingLateral)};
        padding-right: ${props => blockSpace('md', props.paddingLateral)};
    }
`;

const topPadding = css`
    padding-top: ${props => blockSpace('xs', props.paddingTop)};

    @media (${props => props.theme.query.min.sm}) {
        padding-top: ${props => blockSpace('sm', props.paddingTop)};
    }

    @media (${props => props.theme.query.min.md}) {
        padding-top: ${props => blockSpace('md', props.paddingTop)};
    }
`;

const bottomPadding = css`
    padding-bottom: ${props => blockSpace('xs', props.paddingBottom)};

    @media (${props => props.theme.query.min.sm}) {
        padding-bottom: ${props => blockSpace('sm', props.paddingBottom)};
    }

    @media (${props => props.theme.query.min.md}) {
        padding-bottom: ${props => blockSpace('md', props.paddingBottom)};
    }
`;

// Margins

const lateralMargin = css`
    margin-left: ${props => blockSpace('xs', props.marginLateral)};
    margin-right: ${props => blockSpace('xs', props.marginLateral)};

    @media (${props => props.theme.query.min.sm}) {
        margin-left: ${props => blockSpace('sm', props.marginLateral)};
        margin-right: ${props => blockSpace('sm', props.marginLateral)};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-left: ${props => blockSpace('md', props.marginLateral)};
        margin-right: ${props => blockSpace('md', props.marginLateral)};
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

// All block's spaces

const blockSpaces = css`
    ${lateralPadding};
    ${topPadding};
    ${bottomPadding};

    ${lateralMargin};
    ${topMargin};
    ${bottomMargin};
`;

// Other styles

const blockBackground = {
    original: css`
        background-color: ${props => backgroundColor[props.backgroundColor]};
    `,
    reverse: css`
        background-color: ${props => props.backgroundColor !== transparentColorOptions.none ? transparentize(0.85, props.theme.wab.white00) : 'transparent'};
    `
};

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
    blockSpaces,
    blockBackground,
    textStyle,
    internalParagraph,

    // Exports for other components
    lateralPadding,
    topPadding,
    bottomPadding,
    lateralMargin,
    topMargin,
    bottomMargin,
};