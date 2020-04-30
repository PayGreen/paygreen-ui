import { css } from 'styled-components';

const topbarStyle = css`
    position: relative;
    z-index: ${props => props.theme.zindex.header};
    @media (${props => props.theme.query.min.md}) {
        height: ${props => props.theme.grid.topbar};
    }
    @media (${props => props.theme.query.max.md}) {
        height: ${props => props.theme.grid.header};
    }
    padding: ${props => props.theme.space.sm};
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: solid ${props => props.theme.line}
        ${props => props.theme.wab.grey10};
    background-color: ${props => props.theme.wab.white20};
`;

export { topbarStyle };
