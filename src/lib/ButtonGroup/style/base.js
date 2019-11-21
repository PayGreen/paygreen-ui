import { css } from 'styled-components';
import { blockSpace } from '../../Text/style/constants';
import {
    bottomCoeff,
    buttonSpace,
    calculateSpace
} from './constants';

const resetMarginWidth = css`
    margin-left: -${buttonSpace};
    margin-right: -${buttonSpace};
`;

const padding = css`
    padding: 0 ${props => blockSpace('xs', calculateSpace(props.paddingBlock))};

    @media (${props => props.theme.query.min.sm}) {
        padding: 0 ${props => blockSpace('sm', calculateSpace(props.paddingBlock))};
    }

    @media (${props => props.theme.query.min.md}) {
        padding: 0 ${props => blockSpace('md', calculateSpace(props.paddingBlock))};
    }
`;

const topMargin = css`
    margin-top: ${props => blockSpace('xs', calculateSpace(props.marginTop))};

    @media (${props => props.theme.query.min.sm}) {
        margin-top: ${props => blockSpace('sm', calculateSpace(props.marginTop))};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-top: ${props => blockSpace('md', calculateSpace(props.marginTop))};
    }
`;

const bottomMargin = css`
    margin-bottom: ${props => blockSpace('xs', calculateSpace(props.marginBottom, bottomCoeff))};

    @media (${props => props.theme.query.min.sm}) {
        margin-bottom: ${props => blockSpace('sm', calculateSpace(props.marginBottom, bottomCoeff))};
    }

    @media (${props => props.theme.query.min.md}) {
        margin-bottom: ${props => blockSpace('md', calculateSpace(props.marginBottom, bottomCoeff))};
    }
`;

const blockSpaces = css`
    ${props => props.theme.blockSpace[props.paddingBlock] ? padding : resetMarginWidth};
    ${props => props.theme.blockSpace[props.marginTop] ? topMargin : null};
    ${props => props.theme.blockSpace[props.marginBottom] ? bottomMargin : null};
`;

export {
    blockSpaces
}