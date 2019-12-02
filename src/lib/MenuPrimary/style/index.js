import styled from 'styled-components';

const MenuPrimaryBase = styled.ul`
    position: fixed;
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    background-color: ${props => props.theme.wab.white00};
    width: 100%;
    padding: ${props => props.theme.space.sm} 0;
    margin: 0;
    transition: all ${props => props.theme.transition.md};
`;

export { MenuPrimaryBase };