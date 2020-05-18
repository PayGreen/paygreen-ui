import styled from 'styled-components';
import { css } from 'styled-components';

const globalPadding = css`
    padding: ${props => props.theme.space.sm};

    @media (${props => props.theme.query.min.md}) {
        padding: ${props => props.theme.space.md};
    }
`;

const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        margin-left: auto; // needed to align on the right side the cross if no title in modalHeader
    }

    ${globalPadding}
    grid-area: header;
`;

const ModalBody = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    ${globalPadding}
    grid-area: body;
    overflow-y: auto;
`;

export { ModalHeader, ModalBody };
