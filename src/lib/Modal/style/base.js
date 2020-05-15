import { css } from 'styled-components';

const isOpenStyle = css`
    display:block;
    opacity:100%;
`;
const isCloseStyle = css`
    display:none;
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
    justify-content: center;
    align-items: center;
    grid-area: body;
`;

export { isOpenStyle, isCloseStyle, ModalHeader };
