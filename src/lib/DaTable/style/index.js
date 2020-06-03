import styled from 'styled-components';

const DaTableBase = styled.div`
    @media (${props => props.theme.query.max.lg}) {
        max-width: ${props => props.theme.blockWidth.md};
    }

    @media (${props => props.theme.query.min.lg}) {
        display: table;
        background-color: ${props => props.theme.wab.white10};
    }
`;

export { DaTableBase };
