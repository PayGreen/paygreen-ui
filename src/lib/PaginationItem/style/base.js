import { css } from 'styled-components';
import {lightColor, mainColor} from './constants';

const activeStyle = css`
    background-color: ${props => mainColor[props.colorPallet]};
    color: ${props => props.theme.wab.white00};
`;

// const activeStyle = css`
// background-image: linear-gradient(
//     to bottom right,
//     ${props => props.theme.color.secondary.gradientBase},
//     ${props => props.theme.color.secondary.gradientShade}
// );
//     background-image: background-image: linear-gradient(
//         to bottom right,
//         ${mainColor.gradientBase},
//         ${mainColor.gradientShade}
//     );
//     color: ${props => props.theme.wab.white00};
// `;

const notActiveStyle = css`
    background-color: ${props => lightColor[props.colorPallet]};
    color : ${props => mainColor[props.colorPallet]};

    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }
}
`;

export { activeStyle, notActiveStyle };
