import { css } from 'styled-components';

const activeStyle = css`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color.secondary.gradientBase},
        ${props => props.theme.color.secondary.gradientShade}
    );
    color: ${props => props.theme.wab.white00};
`;

const notActiveStyle = css`
    background-color: ${props => props.theme.color.status.default.light};
    color : ${props => props.theme.color.status.default.main};

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }
}
`;

export { activeStyle, notActiveStyle };
