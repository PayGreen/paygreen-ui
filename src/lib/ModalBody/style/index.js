import styled from 'styled-components';

const ModalBodyBase = styled.div`
    width: 100%;
    heigth: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: ${props => props.theme.space.sm};

    @media (${props => props.theme.query.min.md}) {
        padding: ${props => props.theme.space.md};
    }
    
    grid-area: body;
    overflow-y: auto;
`;

export { ModalBodyBase };