import { css } from 'styled-components';

const mainStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${props => props.theme.wab.white00};
`;

const isClosedStyle = css`
    width: 70%;
`;

const isOpenStyle = css`
    width: 100%;
`;

export { isClosedStyle, isOpenStyle, mainStyle };
