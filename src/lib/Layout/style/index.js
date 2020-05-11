import styled from 'styled-components';

const LayoutBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.content};
    height: 100vh;
    width: 100%;
    display: flex;
    background: url(${props => props.theme.pattern}) repeat;
    overflow-y: hidden;
`;

export { LayoutBase };
