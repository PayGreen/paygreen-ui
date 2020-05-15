import { css } from 'styled-components';

const isOpenStyle = css`

`;

const ModalHeader = styled.div`
    position: fixed;
    z-index: ${props => props.theme.zindex.modal};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalBody = styled.div`
    position: fixed;
    z-index: ${props => props.theme.zindex.modal};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export { ModalHeader };
