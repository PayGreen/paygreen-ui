import { css } from 'styled-components';

const isOpenStyle = css`
    @media ${props => props.theme.screen.max.md} {
        margin-left: 100%;
        box-shadow: 0 0 0 transparent;
    }

    @media ${props => props.theme.screen.min.md} {
        margin-left: ${props => props.theme.grid.sidebar};
        width: calc(100% - ${props => props.theme.grid.sidebar});
    }
`;

export { isOpenStyle };
