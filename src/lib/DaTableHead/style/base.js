import { css } from 'styled-components';
import { math } from 'polished';

const closedStyle = css`
    height: ${props =>
        math(props.theme.icon.iconSize.md + '+ 2*' + props.theme.space.sm)};
`;

export { closedStyle };
