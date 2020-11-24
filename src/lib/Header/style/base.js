import { css } from 'styled-components';

const topStyle = css`
    @media ${props => props.theme.screen.min.lg} {
        box-shadow: unset;
    }
`;

export { topStyle };
