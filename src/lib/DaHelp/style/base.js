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

const enabled = css`
    background-color: ${props => props.theme.status.default.light};

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }

    & > .icon {
        svg {
            fill: ${props => props.theme.status.default.main};
        }
    }

    ${props => (props.isActive ? activeStyle : null)};
`;

const disabled = css`
    ${activeStyle};

    cursor: not-allowed;
    filter: grayscale(1);
`;

const borderRadius = {
    normal: css`
        border-radius: ${props => props.theme.radius.sm};
    `,
    rounded: css`
        border-radius: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/2')};
        padding-right: ${props =>
            math(props.theme.daButton.buttonHeight[props.fieldSize] + '/10')};
    `,
};

export { enabled, disabled, borderRadius };
