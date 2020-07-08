import styled from 'styled-components';

const DaTableBodyBase = styled.div`
    @media (${props => props.theme.query.min.lg}) {
        display: table-row-group;
        background-color: ${props => props.theme.wab.white10};
    }
`;

export { DaTableBodyBase };
