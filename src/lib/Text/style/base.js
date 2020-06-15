import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { colorTypeOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { mainColor, backgroundColor, minimizeFont } from './constants';

const htmlTagStyle = {
    p: css`
        ${responsiveSpaces('padding')};
        border-radius: ${props => props.theme.radius[props.radiusSize]};
        `,
    div: css`
        ${responsiveSpaces('padding')};
        border-radius: ${props => props.theme.radius[props.radiusSize]};

        & > p {
            margin: ${props => props.theme.space[props.marginInternal]} 0;

            &:first-of-type {
                margin-top: 0;
            }

            &:last-of-type {
                margin-bottom: 0;
            }
        }
    `,
    span: css`
        display: block;
    `,
    em: css`
        font-style: italic;
    `,
    strong: css`
        font-weight: ${props => props.theme.font.bold};
    `,
    q: css`
        display: inline-flex;
    `,
    sub: css`
        font-size: ${props =>
            math(props.theme.font.size[props.textSize] + '* 0.7')};

        @media (${props => props.theme.query.max.md}) {
            font-size: ${props =>
                math(props.theme.font.size[props.textSize] + '* 0.6')};
        }
    `,
    kbd: css`
        ${props => blockBackground[props.colorType]};
        border-radius: ${props => props.theme.radius.sm};
        padding: ${props =>
            math(props.theme.font.size[props.textSize] + '* 0.3')};
    `,
};

const italicStyle = css`
    font-style: italic;
`;

const boldStyle = css`
    font-style: bold;
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

const defaultStyle = css`
    ${responsiveSpaces('margin')};
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

export { uppercaseStyle, blockBackground, htmlTagStyle, defaultStyle };
