import { css } from 'styled-components';
import { transparentize } from 'polished';

const borderColor = {
    theme: css`
        border: solid
            ${props =>
                props.theme.line + props.theme.color[props.colorTheme].light};
    `,
    wab: css`
        border: solid
            ${props =>
                props.theme.line +
                ' ' +
                transparentize(
                    props.theme.shadow.opacity.md,
                    props.theme.wab[props.colorWab],
                )};
    `,
    status: css`
        border: solid
            ${props =>
                props.theme.line +
                props.theme.color.status[props.colorStatus].light};
    `,
};

const hoverStyle = {
    theme: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xs,
                props.theme.color[props.colorTheme].main,
            )};
    `,
    wab: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.sm,
                props.theme.wab[props.colorWab],
            )};
    `,
    status: css`
        background-color: ${props =>
            transparentize(
                props.theme.shadow.opacity.xs,
                props.theme.color.status[props.colorStatus].main,
            )};
    `,
};

export { borderColor, hoverStyle };
