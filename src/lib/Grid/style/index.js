import styled from 'styled-components';
import { blockSpaceOptions } from '../../../shared/constants';
import { displayStyle, shiftStyle, flex1Style } from './base';

const GridBase = styled.div`
    padding: ${props => props.theme.space.md};

    & > * {
        margin: ${props => props.theme.space.md} auto;
        ${props => props.flex1 ? flex1Style : null};
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
    }

    @media (${props => props.theme.query.min.xl}) {
        ${props => props.childrenShift !== blockSpaceOptions.none ? shiftStyle : null};
    }
`;

export { GridBase };