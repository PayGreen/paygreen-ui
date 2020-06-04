import styled from 'styled-components';

const DaTableHeadBase = styled.div`
    @media (${props => props.theme.query.min.lg}) {
        display: table-header-group;
    }
`;

export { DaTableHeadBase };
