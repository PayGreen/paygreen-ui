import { css } from 'styled-components';
import { math } from 'polished';

const activeStyle = css`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color.secondary.gradientBase},
        ${props => props.theme.color.secondary.gradientShade}
    );

    & > .icon {
        svg {
            fill: ${props => props.theme.wab.white00} !important;
        }
    }
`;

const borderRadius = {
    normal: css`
        border-top-right-radius: ${props => props.theme.radius.sm};
        border-bottom-right-radius: ${props => props.theme.radius.sm};
    `,
    rounded: css`
        border-top-right-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        border-bottom-right-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        padding-right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/10')};
    `,
};

export { activeStyle, borderRadius };
