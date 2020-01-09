import styled from 'styled-components';
import { spaceOptions } from '../../../shared/constants';
import {
    displayStyle,
    marginTop,
    marginBottom,
    marginLateral
} from './base';

const InternalGridBase = styled.div`
    ${props => displayStyle[props.displayType]};

    & > * {
        ${props => props.marginTop !== spaceOptions.none ?
            marginTop : null};
        ${props => props.marginBottom !== spaceOptions.none ?
            marginBottom : null};
        ${props => props.marginLateral !== spaceOptions.none ?
            marginLateral : null};
    }
`;

export { InternalGridBase };