import { math } from 'polished';

const bulletFont = {
    xxs: '1rem',
    xs: '1.1rem',
    sm: '1.2rem',
    md: '1.4rem',
    lg: '1.6rem',
    xl: '2rem'
};

const marginBase = props => math(props.theme.icon.size[props.bulletSize] + '*0.75');

export {
    bulletFont,
    marginBase
};