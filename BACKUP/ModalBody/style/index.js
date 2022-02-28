import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ModalBodyBase = styled.div`
    grid-area: body;
    overflow-y: auto;
    ${responsiveSpaces('padding')};
`;

export { ModalBodyBase };
