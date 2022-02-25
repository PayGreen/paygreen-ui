import { css } from 'styled-components';

const messageStyle = {
    top: css`
        bottom: calc(
            ${props => props.heightValue + '% + ' + props.theme.space.sm}
        );
    `,
    bottom: css`
        transform: translateY(100%);
        bottom: calc(
            ${props => props.heightValue + '% - ' + props.theme.space.md}
        );
    `,
};

export { messageStyle };
