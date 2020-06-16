import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

const ModalNoScrollStyle = createGlobalStyle`
    body {
        overflow: hidden;
    }
`;

const ModalGroupBase = styled.div``;

const ModalCloseControlBase = styled.div``;

export { ModalNoScrollStyle, ModalGroupBase, ModalCloseControlBase };
