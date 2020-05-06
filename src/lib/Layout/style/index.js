import styled from 'styled-components';

const LayoutBase = styled.div`
    position: relative;
    z-index: ${props => props.theme.zindex.content};
    background: url(${props => props.theme.pattern}) repeat;
    height: 100vh;
    width: 100%;
    display: flex;
    overflow-y: hidden;
`;

export { LayoutBase };
