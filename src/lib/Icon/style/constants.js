import { math } from 'polished';

const calcShift = props => props.theme.icon.shift[props.iconSize];
const countSize = props => math(props.theme.icon.size[props.iconSize] + '*3/4');

export { calcShift, countSize };
