import { math } from 'polished';

const mainColor = {
    theme: props => props.theme.color[props.dataColor].main,
    status: props => props.theme.color.status[props.dataColor].main,
};

const barRadius = props => math(props.theme.dataBar.height + '/2');

export { barRadius, mainColor };
