import styled from 'styled-components';

const LayoutBase = styled.div`
    position: relative;
    background: url(${props => props.theme.pattern}) repeat;
    overflow-x: hidden;
`;

export { LayoutBase };
