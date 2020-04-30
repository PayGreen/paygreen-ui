import { css } from 'styled-components';

const mainStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: 100vh;
    background-color: ${props => props.theme.wab.white00};
`;

const isClosedStyle = css`
    width: 100%;
    transition: all ${props => props.theme.transition.sm};
`;

const isOpenStyle = css`
    transition: all ${props => props.theme.transition.sm};
    @media (${props => props.theme.query.min.md}) {
        width: calc(100% - ${props => props.theme.grid.sidebar});
    }
    @media (${props => props.theme.query.max.md}) {
        width: 100%;
        margin-left: 100%;
    }
`;

export { isClosedStyle, isOpenStyle, mainStyle };
