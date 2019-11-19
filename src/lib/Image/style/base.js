import { css } from 'styled-components';

const changeColor = css`
    background-color: ${props => props.theme.color[props.colorTheme]['light']};

    img {
        opacity: 0.2;
        filter: grayscale(1);
    }
`;

export {
    changeColor
};