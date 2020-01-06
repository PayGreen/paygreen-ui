import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ListBase = styled.ul`
    list-style-type: none;
    padding: .1px 0;
    ${responsiveSpaces('margin')};
`;

export { ListBase };