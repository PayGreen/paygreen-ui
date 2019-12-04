import styled from 'styled-components';

const MenuCloseBase = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 180px;
    max-width: 100%;
    background-color: transparent;
    border: none;
    padding: 0;
    outline: none;
    cursor: pointer;

    .icon {
        position: absolute;
    }

    .background {
        width: 100%;
        fill: ${props => props.theme.color[props.colorTheme]['light']};
    }
`;

export { MenuCloseBase };