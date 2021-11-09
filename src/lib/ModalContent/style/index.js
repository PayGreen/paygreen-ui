import styled from 'styled-components';
import { transparentize } from 'polished';

const ModalContentBase = styled.div`
    position: fixed;
    bottom: 0;
    max-height: 90vh;
    width: 100%;

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'header' 'body';
    overflow-y: hidden;
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius.lg}
        ${props => props.theme.radius.lg} 0 0;
    box-shadow: ${props =>
        props.theme.shadow.size.lg +
        ' ' +
        transparentize(props.theme.shadow.opacity.md, props.theme.wab.black00)};

    @media ${props => props.theme.screen.min.md} {
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
        border-radius: ${props => props.theme.radius.lg};
        position: relative;
    }
`;

export { ModalContentBase };
