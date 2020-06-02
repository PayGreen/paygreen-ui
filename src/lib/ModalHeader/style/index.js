import styled from 'styled-components';
import { responsiveSpaces } from '../../../shared/spaces';

const ModalHeaderBase = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        margin-left: auto; // needed to align on the right side the cross if no title in modalHeader
    }

    grid-area: header;
    ${responsiveSpaces('padding')};
`;

export { ModalHeaderBase };
