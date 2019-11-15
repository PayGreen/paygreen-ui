import { css } from 'styled-components';
import {
    buttonSpace,
    calculateSpace
} from './constants';

const padding = css`
    padding: 0 ${props => calculateSpace(props.paddingBlock)};
`;

const resetMarginWidth = css`
    margin-left: -${buttonSpace};
    margin-right: -${buttonSpace};
`;

const blockSpaces = css`
    margin-top: ${props => calculateSpace(props.marginTop)};
    margin-bottom: ${props => calculateSpace(props.marginBottom)};

    ${props => props.theme.blockPadding[props.paddingBlock] ? padding : resetMarginWidth};
`;

export {
    blockSpaces
}