import { css } from 'styled-components';

const colorStyle = {
    theme: css`
        background-color: ${props => props.theme.color[props.colorTheme].light};
        color: ${props => props.theme.color[props.colorTheme].main};
    `,
    status: css`
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};
        color: ${props => props.theme.status[props.colorStatus].main};
    `,
};

export { colorStyle };
