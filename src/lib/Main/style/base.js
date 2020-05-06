import { css } from 'styled-components';

const isOpenStyle = css`
    margin-left: ${props => props.theme.grid.sidebar};
    @media (${props => props.theme.query.min.md}) {
        width: calc(100% - ${props => props.theme.grid.sidebar});
    }
    @media (${props => props.theme.query.max.md}) {
        margin-left: 100%;
    }
`;

export { isOpenStyle };
