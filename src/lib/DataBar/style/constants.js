import { transparentize } from 'polished';

const mainColor = {
    theme: props =>
        transparentize(0.5, props.theme.color[props.dataColor].main),
    status: props =>
        transparentize(0.5, props.theme.color.status[props.dataColor].main),
};

export { mainColor };
