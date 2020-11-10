import { css } from 'styled-components';
import { transparentize, math } from 'polished';
import { responsiveSpaces } from '../../../shared/spaces';
import { mainColor, backgroundColor } from './constants';

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

const uppercaseStyle = css`
    text-transform: uppercase;
    font-weight: ${props => props.theme.font.weight.bold};
    letter-spacing: ${props => props.theme.font.spacing};
`;

const color = {
    original: css`
        color: ${props => mainColor[props.colorPallet]};
    `,
    reverse: css`
        color: ${props => props.theme.wab.white00};
        text-shadow: 0 0 ${props => props.theme.space.sm} ${mainColor.theme};
    `,
};

const blockBackground = {
    original: css`
        background-color: ${props => backgroundColor[props.colorPallet]};
    `,
    reverse: css`
        background-color: ${props =>
            transparentize(0.85, props.theme.wab.white00)};
    `,
};

export { htmlTagStyle, uppercaseStyle, color, blockBackground };
