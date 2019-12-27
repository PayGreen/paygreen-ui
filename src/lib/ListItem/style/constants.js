import { math } from 'polished';

const bulletLine = '3px';

const bulletFont = {
    xs: '1.1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '2rem'
};

const marginBase = props => math(props.theme.iconSize[props.bulletSize] + '*0.75');

export {
    bulletLine,
    bulletFont,
    marginBase
};