import styled from 'styled-components';

const MenuCloseBase = styled.button`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 190px;
    max-width: 100%;

    .icon {
        position: absolute;
    }

    .background {
        width: 100%;
        fill: ${props => props.theme.color[props.colorTheme].light};
    }
`;

export { MenuCloseBase };