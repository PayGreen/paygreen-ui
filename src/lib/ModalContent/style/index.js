import styled from 'styled-components';
import { transparentize } from 'polished';

const ModalContentBase = styled.div`
    position: relative;
    max-height: 90vh;
    width: 100%;

    @media (${props => props.theme.query.min.md}) {
        max-width: ${props => props.theme.blockWidth[props.blockWidth]};
    }

    display: grid;
    grid-template-rows: auto 1fr;
    grid-template-areas: 'header' 'body';
    overflow-y: hidden;
    background-color: ${props => props.theme.wab.white00};
    border-radius: ${props => props.theme.radius.lg};
    box-shadow: ${props =>
        props.theme.shadow.size.lg +
        ' ' +
        transparentize(props.theme.shadow.opacity.md, props.theme.wab.black00)};
`;

export { ModalContentBase };