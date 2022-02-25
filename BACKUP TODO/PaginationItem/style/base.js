import { css } from 'styled-components';

const activeStyle = css`
    color: ${props => props.theme.wab.white00};
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color[props.colorTheme].gradientBase},
        ${props => props.theme.color[props.colorTheme].gradientShade}
    );
`;

const notActiveStyle = css`
    color: ${props => props.theme.color[props.colorTheme].main};
    background-color: ${props => props.theme.color[props.colorTheme].light};

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }
`;

export { activeStyle, notActiveStyle };
