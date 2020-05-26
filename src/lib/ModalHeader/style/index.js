import styled from 'styled-components';

const ModalHeaderBase = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .icon {
        margin-left: auto; // needed to align on the right side the cross if no title in modalHeader
    }

    padding: ${props => props.theme.space.sm};

    @media (${props => props.theme.query.min.md}) {
        padding: ${props => props.theme.space.md};
    }

    grid-area: header;
`;

export { ModalHeaderBase };