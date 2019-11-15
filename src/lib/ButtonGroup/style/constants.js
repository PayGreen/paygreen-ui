import { math } from 'polished';

const bottomCoeff = 0.75;

const buttonSpace = props => props.resetMargin ? props.theme.space.sm : 0;

const calculateSpace = (space, coeff) => {
    if (coeff === undefined) {
        coeff = 1;
    }

    return props => math(props.theme.blockPadding[space] + '*' + coeff + '-' + buttonSpace(props));
};

export {
    bottomCoeff,
    buttonSpace,
    calculateSpace
};