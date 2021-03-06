import styled from 'styled-components';
import { isCloseStyle, isOpenStyle } from './base';

const ModalBase = styled.div`
    position: fixed;
    z-index: ${props => props.theme.zindex.modal};
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: all, transform;
    transition-duration: ${props => props.theme.transition.sm},
        ${props => props.theme.transition.xs};

    ${props => (props.isOpen ? isOpenStyle : isCloseStyle)};
`;

export { ModalBase };
