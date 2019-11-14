import { stripUnit } from 'polished';

const paddingSizes = {
    xs: props => props.theme.blockPadding.xs,
    sm: props => stripUnit(props.theme.blockPadding[props.paddingBlock]) > stripUnit(props.theme.blockPadding.xs) ?
        props.theme.blockPadding.sm :
        props.theme.blockPadding.xs,
    md: props => props.theme.blockPadding[props.paddingBlock]
}

export {
    paddingSizes
}