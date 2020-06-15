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
        & > p {
            ${responsiveSpaces('padding')};
            border-radius: ${props => props.theme.radius[props.radiusSize]};
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
        font-weight: bold;
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
        border-radius: ${props =>
            math(props.theme.font.size[props.textSize] + '* 0.3')};
        padding: ${props =>
            math(props.theme.font.size[props.textSize] + '* 0.3')};
    `,
};

const horizontalStyle = css`
p {
    display: inline;
}
`;

export {  htmlTagStyle, horizontalStyle };
