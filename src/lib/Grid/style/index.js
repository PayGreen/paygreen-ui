import styled from 'styled-components';
import { blockSpaceOptions } from '../../../shared/constants';
import { displayStyle, shiftStyle } from './base';

const GridBase = styled.div`
    padding: 0 ${props => props.theme.space.sm};

    & > * {
        margin: ${props => props.theme.space.md} auto;
    }

    @media (${props => props.theme.query.min.sm}) {
        padding: 0 ${props => props.theme.space.md};
    }

    @media (${props => props.theme.query.min.md}) {
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
        padding: 0;

        & > * {
            margin: ${props => props.theme.space.lg};
        }

        ${props => displayStyle[props.displayType]};
        ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
    }
`;

export { GridBase };