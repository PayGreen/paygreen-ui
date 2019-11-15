import { stripUnit } from 'polished';

const blockSpace = (screen, space) => {
    switch (screen) {
        case 'xs':
            return props => props.theme.blockPadding.xs;
        case 'sm':
            return props => stripUnit(props.theme.blockPadding[space]) > stripUnit(props.theme.blockPadding.xs) ?
                props.theme.blockPadding.sm :
                props.theme.blockPadding.xs;
        case 'md':
            return props => props.theme.blockPadding[space];
    }
}

export {
    blockSpace
}