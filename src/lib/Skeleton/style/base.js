import { css } from 'styled-components';
import { spaceDefault } from '../../../shared/constants';

const imageCardStyle = css`
    .content {
        margin-top: ${props =>
            props.blockWidth === spaceDefault
                ? props.theme.blockHeader.xl
                : props.theme.blockHeader[props.blockWidth]};
    }
`;

export { imageCardStyle };
