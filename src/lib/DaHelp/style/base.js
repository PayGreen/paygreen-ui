import { css } from 'styled-components';

const activeStyle = css`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color.secondary.gradientBase},
        ${props => props.theme.color.secondary.gradientShade}
    );
    & .icon {
        svg {
            fill: ${props => props.theme.wab.white00};
        }
    }
`;

const readOnly = css`
    cursor: not-allowed;
`;

const canHover = css`
    &:hover,
    &:active,
    &:focus {
        ${activeStyle}
    }
`;

const enabled = css`
    background-color: ${props => props.theme.color.status.default.light};

    & .icon {
        svg {
            fill: ${props => props.theme.color.status.default.main};
        }
    }
    ${props => (props.isActive ? activeStyle : null)};
    ${props => (props.readOnly ? readOnly : canHover)};
}
`;

const disabled = css`
    cursor: not-allowed;
    filter: grayscale(1);
`;

export { enabled, disabled };
