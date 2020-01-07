import styled from 'styled-components';
import { blockSpaceOptions } from '../../../shared/constants';
import { displayStyle, shiftStyle } from './base';

const GridBase = styled.div`
    padding: ${props => props.theme.space[props.blockPadding]};
    max-width: 100%;

    @media (min-width: ${props => props.theme.grid.maxWidth}) {
        max-width: ${props => props.theme.grid.maxWidth};
    }

    @media (${props => props.theme.query.min.md}) {
        padding: 0;
        margin: 0 auto;
    }

    @media (${props => props.theme.query.min.xl}) {
        ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
    }

    ${props => displayStyle[props.displayType]};
`;

export { GridBase };