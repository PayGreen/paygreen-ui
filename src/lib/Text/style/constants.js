import { stripUnit } from 'polished';
import { blockPaddingOptions } from '../../../shared/constants';

const blockSpace = (screen, space) => {
    const size = blockPaddingOptions.hasOwnProperty(space) ? props => props.theme.blockPadding[space] : space;

    switch (screen) {
        case 'xs':
            return props => props.theme.blockPadding.xs;
        case 'sm':
            return props => stripUnit(size(props)) > stripUnit(props.theme.blockPadding.xs) ?
                props.theme.blockPadding.sm :
                props.theme.blockPadding.xs;
        case 'md':
            return props => size(props);
    }
}

export {
    blockSpace
}