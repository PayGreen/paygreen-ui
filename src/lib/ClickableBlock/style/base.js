import { css } from 'styled-components';
import { transparentize } from 'polished';

const borderColor = {
    theme: css`
        border: solid ${props => props.theme.line + props.theme.color[props.colorTheme].light};
    `,
    wab: css`
        border: solid ${props => props.theme.line + props.theme.wab[props.colorWab]};
    `,
    status: css`
        border: solid ${props => props.theme.line + props.theme.color.status[props.colorStatus].light};
    `,
};

const hoverColor = {
    theme: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xxl,
                props.theme.color[props.colorTheme].light,
            )};
    `,
    wab: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xxl,
                props.theme.wab[props.colorWab],
            )};
    `,
    status: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xxl,
                props.theme.color.status[props.colorStatus].light,
            )};
    `,
};

export { borderColor, hoverColor };
