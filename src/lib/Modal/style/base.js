import { css } from 'styled-components';
import styled from 'styled-components';

const isOpenStyle = css`
    opacity:100%;
`;
const isCloseStyle = css`
    opacity:0;
`;

const ModalHeader = styled.div`
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    padding: ${props => props.theme.space.md};
    grid-area: header;
`;

const ModalBody = styled.div`
    width:100%;
    heigth: 100%;
    padding: ${props => props.theme.space.md};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    grid-area: body;
    overflow-y:auto;
`;

export { isOpenStyle, isCloseStyle, ModalHeader, ModalBody };
