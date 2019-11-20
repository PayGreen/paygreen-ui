import { css } from 'styled-components';
import { transparentColorOptions } from '../../../shared/constants';
import {
    blockSpace,
    backgroundColor
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

    ${props => props.theme.blockPadding[props.paddingTop] ? 
        topPadding :
        css`padding-top: 0;`
    };

    ${props => props.theme.blockPadding[props.paddingBottom] ? 
        bottomPadding :
        css`padding-bottom: 0;`
    };

    ${props => props.theme.blockPadding[props.marginTop] ? 
        topMargin :
        css`margin-top: 0;`
    };

    ${props => props.theme.blockPadding[props.marginBottom] ? 
        bottomMargin :
        css`margin-bottom: 0;`
    };
`;

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
    topMargin,
    bottomMargin,
    
    blockSpaces,
    blockBackground,
    textStyle,
    internalParagraph
};