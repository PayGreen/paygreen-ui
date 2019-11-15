import { math } from 'polished';

const buttonSpace = props => props.resetMargin ? props.theme.space.sm : 0;

const calculateSpace = (space) => {
    return props => math(props.theme.blockPadding[space] + '-' + buttonSpace(props));
};

export {
    buttonSpace,
    calculateSpace
};