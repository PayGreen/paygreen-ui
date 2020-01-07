import styled from 'styled-components';
import { spaceOptions } from '../../../shared/constants';
import {
    displayStyle,
    flex1Style,
    marginTop,
    marginBottom,
    marginLateral
} from './base';

const InternalGridBase = styled.div`
    ${props => displayStyle[props.display]};

    & > * {
        ${props => props.flex1 ? flex1Style : null};
        ${props => props.marginTop !== spaceOptions.none ?
            marginTop : null};
        ${props => props.marginBottom !== spaceOptions.none ?
            marginBottom : null};
        ${props => props.marginLateral !== spaceOptions.none ?
            marginLateral : null};
    }
`;

export { InternalGridBase };