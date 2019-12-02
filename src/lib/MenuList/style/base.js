import { css } from 'styled-components';

const arrowSize = '24px';

const closed = css`
    @media (${props => props.theme.query.min.lg}) {
        transform: translateY(-100%);
        opacity: 0;
    }
`;

export {
    arrowSize,
    closed
};