import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';
import { dashedOptions } from '../../../shared/constants';
import { dashedStyle } from './base';

const ListBase = styled.ul`
    list-style-type: none;
    padding: .1px 0;
    ${responsiveSpaces('margin')};

    ${props => props.dashed !== dashedOptions.none ? dashedStyle : null};
`;

export { ListBase };