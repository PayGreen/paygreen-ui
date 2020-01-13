import styled from 'styled-components';
import { spaceOptions } from '../../../shared/constants';
import { displayStyle, childrenMargin } from './base';

const InternalGridBase = styled.div`
    ${props => displayStyle[props.displayType]};

    & > * {
        ${props => props.childrenMarginLateral !== spaceOptions.none ?
            childrenMargin.lateral : null};
        ${props => props.childrenMarginTop !== spaceOptions.none ?
            childrenMargin.top : null};
        ${props => props.childrenMarginBottom !== spaceOptions.none ?
            childrenMargin.bottom : null};
    }
`;

export { InternalGridBase };