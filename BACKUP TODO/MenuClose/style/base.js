import { css } from 'styled-components';
import { math } from 'polished';

const horizontalStyle = css`
    height: ${props => props.theme.space.lg};
    width: ${props => math(props.theme.space.lg + ' * 6')};
    max-width: 100%;
`;

const verticalStyle = css`
    height: ${props => math(props.theme.space.lg + ' * 6')};
    width: ${props => props.theme.space.lg};

    .background {
        width: ${props => math(props.theme.space.lg + ' * 6')};
    }
`;

const position = {
    top: css`
        ${horizontalStyle};

        .background {
            transform: rotate(180deg);
        }
    `,
    bottom: css`
        ${horizontalStyle};
    `,
    left: css`
        ${verticalStyle};

        .background {
            transform: rotate(90deg);
        }
    `,
    right: css`
        ${verticalStyle};

        .background {
            transform: rotate(-90deg);
        }
    `,
};

export { position };
