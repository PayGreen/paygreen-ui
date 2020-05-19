import { css } from 'styled-components';

const isClosedStyle = css`
        overflow: hidden;
        height: 0;
        li {
            margin: -${props => props.theme.font.size.base} 0;
            transition: all ${props => props.theme.transition.xs};
        }
`;

const isOpenStyle = css`
        overflow: hidden;
        height: auto;
        li {
            transition: all ${props => props.theme.transition.xs};
        }
`;

export { isClosedStyle, isOpenStyle };
