import styled from 'styled-components';
import { isCloseStyle, isOpenStyle } from './base';

// composant temporaire sera fait avec https://paygreen.atlassian.net/browse/PGX-4453
const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background-color: ${props => props.theme.wab.grey30};
`;

const ModalBase = styled.div`
    position: fixed;
    z-index: ${props => props.theme.zindex.modal};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    transition-property: all, transform;
    transition-duration: ${props => props.theme.transition.sm},
        ${props => props.theme.transition.xs};

    ${props => (props.isOpen ? isOpenStyle : isCloseStyle)};
`;

export { ModalBase, Overlay };
