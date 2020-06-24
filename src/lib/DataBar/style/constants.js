import { math } from 'polished';

const mainColor = {
    theme: props => props.theme.color[props.colorTheme].main,
    status: props => props.theme.color.status[props.colorStatus].main,
};

const barRadius = props => math(props.theme.dataBar.height + '/2');

export { barRadius, mainColor };
