import { css } from 'styled-components';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};
`;

const headerStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    height: ${props => props.theme.grid.header};
    padding: ${props => props.theme.space.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${props => props.theme.line} ${props => props.theme.wab.white20};
    background-color: ${props => props.theme.wab.white00};
    transition: all ${props => props.theme.transition.sm};
`;

export { headerStyle, hiddenStyle };
