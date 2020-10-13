import { css } from 'styled-components';

const imageCardStyle = css`
    & > :last-child {
        margin-top: ${props => props.theme.imageSize.xs};
    }
`;

export { imageCardStyle };
