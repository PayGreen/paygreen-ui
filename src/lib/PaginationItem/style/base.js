import { css } from 'styled-components';

const activeStyle = css`
    background-image: linear-gradient(
        to bottom right,
        ${props => props.theme.color[props.colorTheme].gradientBase},
        ${props => props.theme.color[props.colorTheme].gradientShade}
    );

    color: ${props => props.theme.wab.white00};
`;

const notActiveStyle = css`
    background-color: ${props => props.theme.color[props.colorTheme].light};
    color :  ${props => props.theme.color[props.colorTheme].main};

    &:hover,
    &:active {
        ${activeStyle};
    }
}
`;

export { activeStyle, notActiveStyle };
