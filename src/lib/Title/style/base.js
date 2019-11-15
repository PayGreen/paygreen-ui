import { css } from 'styled-components';
import { blockSpace } from '../../Text/style/constants';
import { titleColor } from './constants';

const titleColors = {
    one: css`
        color: ${props => titleColor.main[props.colorType]};
    `,
    two: css`
        color: ${props => titleColor.secondary[props.colorType]};

        strong {
            color: ${props => titleColor.main[props.colorType]};
        }
    `
};

const smallText = css`
    text-transform: uppercase;
    letter-spacing: ${props => props.theme.font.spacing};
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
        background-color: ${props => titleColor.line[props.colorType]};
    }
`;

const padding = css`
    margin-left: ${props => blockSpace('xs', props.paddingBlock)};
    margin-right: ${props => blockSpace('xs', props.paddingBlock)};

    @media (${props => props.theme.query.min.sm}) {
        margin-left: ${props => blockSpace('sm', props.paddingBlock)};
        margin-right: ${props => blockSpace('sm', props.paddingBlock)};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-left: ${props => blockSpace('md', props.paddingBlock)};
        margin-right: ${props => blockSpace('md', props.paddingBlock)};
    }
`;

export {
    titleColors,
    smallText,
    underline,
    padding
};