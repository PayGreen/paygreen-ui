import { css } from 'styled-components';

const isOpenStyle = css`
    margin-left: 100%;

    @media (${props => props.theme.query.min.md}) {
        margin-left: ${props => props.theme.grid.sidebar};
        width: calc(100% - ${props => props.theme.grid.sidebar});
    }
`;

export { isOpenStyle };
