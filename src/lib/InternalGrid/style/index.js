import styled from 'styled-components';
import { spaceOptions } from '../../../shared/constants';
import { gridAlign } from '../../Grid/style/base';
import { displayStyle, childrenMargin } from './base';

const InternalGridBase = styled.div`
    width: ${props => (props.hasStaticWidth ? 'auto' : 'fit-content')};
    ${props => gridAlign[props.align]};
    ${props => displayStyle[props.displayType]};

    & > * {
        ${props =>
            props.childrenMarginLateral !== spaceOptions.none
                ? childrenMargin.lateral
                : null};
        ${props =>
            props.childrenMarginTop !== spaceOptions.none
                ? childrenMargin.top
                : null};
        ${props =>
            props.childrenMarginBottom !== spaceOptions.none
                ? childrenMargin.bottom
                : null};
    }
`;

export { InternalGridBase };
