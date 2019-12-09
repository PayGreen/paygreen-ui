import { math } from 'polished';

const shiftSign = props => props.negativeShift ? '-' : '';

const shiftSize = {
    simple: props => shiftSign(props) + props.theme.blockShift[props.childrenShift],
    double: props => math(shiftSign(props) + props.theme.blockShift[props.childrenShift] + '*2')
};

export {
    shiftSize
};