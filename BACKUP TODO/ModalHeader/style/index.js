import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ModalHeaderBase = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        margin-left: auto;
    }

    grid-area: header;
    ${responsiveSpaces('padding')};
`;

export { ModalHeaderBase };
