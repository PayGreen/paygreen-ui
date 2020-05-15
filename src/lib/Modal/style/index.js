import styled from 'styled-components';
import { transparentize } from 'polished';
import { isOpenStyle, isCloseStyle } from './base';

const Overlay = styled.div`
    position: absolute;
    width: 100%;
    height: 100vh;
    opacity: 0.5;
    background-color: ${props => props.theme.wab.grey30};
`;

const ModalContent = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.modal};
    height: auto;
    max-height:90vh;
    width: 100%;
    @media (${props => props.theme.query.min.md}) {
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    background-color:${props => props.theme.wab.white00};
    border-radius:${props => props.theme.radius.lg};
    box-shadow: ${props => props.theme.shadow.size.lg + ' ' + transparentize(
        props.theme.shadow.opacity.md,
        props.theme.wab.black00
    )};
`;

const ModalBase = styled.div`
    position: fixed;
    z-index: ${props => props.theme.zindex.modal};
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${props => (props.isOpen ? isOpenStyle : isCloseStyle)};
`;


export { ModalBase, ModalContent, Overlay };
