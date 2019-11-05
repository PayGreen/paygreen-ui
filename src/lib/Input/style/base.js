import { css } from 'styled-components';
import { transparentize } from 'polished';

const withShadow = css`
    input {
        box-shadow: 1px 1px 10px ${props => transparentize(0.9, props.theme.color.black00)};
    }

    label {
        margin-bottom: ${props => props.theme.space.xs};
    }
`;

export { withShadow };