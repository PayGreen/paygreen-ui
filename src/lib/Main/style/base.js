import { css } from 'styled-components';

const isOpenStyle = css`
    margin-left: 110%; /* 10% margin in order to mask Main shadow */

    @media (${props => props.theme.query.min.md}) {
        margin-left: ${props => props.theme.grid.sidebar};
        width: calc(100% - ${props => props.theme.grid.sidebar});
    }
`;

export { isOpenStyle };
