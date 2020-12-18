import { css } from 'styled-components';

const color = {
    none: css`
        background-color: ${props => props.theme.wab[props.colorWab]};
    `,
    brand: css`
        background-color: ${props => props.theme.color.primary.gradientBase};

        background-image: linear-gradient(
            to right,
            ${props => props.theme.color.primary.gradientBase},
            ${props => props.theme.color.secondary.gradientBase}
        );
    `,
    theme: css`
        background-color: ${props =>
            props.theme.color[props.colorTheme].gradientBase};

        background-image: linear-gradient(
            to right,
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );
    `,
};

export { color };
