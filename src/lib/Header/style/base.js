import { css } from 'styled-components';

const topStyle = css`
    @media (${props => props.theme.query.min.lg}) {
        box-shadow: unset;
    }
`;

export { topStyle };
