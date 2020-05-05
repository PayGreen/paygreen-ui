import styled from 'styled-components';

const TopbarBase = styled.header`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: ${props => props.theme.grid.topbar};
    padding: ${props => props.theme.space.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${props => props.theme.line}
        ${props => props.theme.wab.grey10};
    background-color: ${props => props.theme.wab.white20};
`;

export { TopbarBase };
