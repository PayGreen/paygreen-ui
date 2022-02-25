import styled from 'styled-components';

const HeaderBase = styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    z-index: ${props => props.theme.zindex.header};
`;

export { HeaderBase };
