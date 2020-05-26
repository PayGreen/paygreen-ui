import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ModalBodyBase = styled.div`
    width: 100%;
    heigth: 100%;
    grid-area: body;
    overflow-y: auto;
    ${responsiveSpaces('padding')};
`;

export { ModalBodyBase };
