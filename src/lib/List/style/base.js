import { css } from 'styled-components';
import { bulletLine, bulletFont } from './constants';

const listStyle = {
    icon: css`
        & > .icon {
            height: auto;
        }
    `,
    dash: css`
        & > .bullet {
            height: ${bulletLine};
            border-radius: ${bulletLine};
            background-color: ${props => props.theme.color[props.colorTheme].main};
        }
    `,
    number: css`
        & > .bullet {
            display: flex;
            justify-content: center;
            align-items: center;
            height: ${props => props.theme.iconSize[props.bulletSize]};
            border-radius: 50%;
            background-color: ${props => props.theme.color[props.colorTheme].light};
            color: ${props => props.theme.color[props.colorTheme].main};
            font-weight: ${props => props.theme.font.weight.bold};
            font-size: ${props => bulletFont[props.bulletSize]};
        }
    `
};

export {
    listStyle
};