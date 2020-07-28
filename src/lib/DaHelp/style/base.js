import { css } from 'styled-components';

const activeStyle = css`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color.secondary.gradientBase},
        ${props => props.theme.color.secondary.gradientShade}
    );

    & > .icon {
        svg {
            fill: ${props => props.theme.wab.white00};
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
}
`;

const disabled = css`
    ${activeStyle};

    cursor: not-allowed;
    filter: grayscale(1);
`;

export { enabled, disabled };
