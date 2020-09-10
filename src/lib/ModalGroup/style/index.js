import { createGlobalStyle } from 'styled-components';

const ModalNoScrollStyle = createGlobalStyle`
    body {
        overflow: hidden !important;
    }
`;

export { ModalNoScrollStyle };
