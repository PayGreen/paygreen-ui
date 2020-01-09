import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ListHorizontalBase = styled.ul`
    ${responsiveSpaces('margin')};
    ${responsiveSpaces('padding')};
    list-style-type: none;
    padding: 0;
    font-weight: ${props => props.theme.font.weight.bold};
`;

export { ListHorizontalBase };