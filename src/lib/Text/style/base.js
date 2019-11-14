import { css } from 'styled-components';
import {
    paddingSizes,
} from './constants';
import { stripUnit } from 'polished';

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
    ${props => stripUnit(props.theme.blockPadding[props.paddingBlock]) > 0 ? padding : null};

    margin: ${props => props.theme.space[props.marginBlock]} 0;
`;

const textStyle = css`
    line-height: 1.5;
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