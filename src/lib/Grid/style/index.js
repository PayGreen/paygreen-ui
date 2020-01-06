import styled from 'styled-components';
import { blockSpaceOptions } from '../../../shared/constants';
import { displayStyle, shiftStyle, flex1Style } from './base';

const GridBase = styled.div`
    padding: ${props => props.theme.space[props.blockPadding]};

    & > * {
        margin: ${props => props.theme.space[props.childrenMargin]} auto;
        ${props => props.flex1 ? flex1Style : null};
    }

    @media (${props => props.theme.query.min.md}) {
        max-width: ${props => props.theme.grid.maxWidth};
        margin-left: auto;
        margin-right: auto;
        padding: 0;

        & > * {
            margin: ${props => props.theme.space[props.childrenMarginBig]};
        }

        ${props => displayStyle[props.displayType]};
    }

    @media (${props => props.theme.query.min.xl}) {
        ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
    }
`;

export { GridBase };