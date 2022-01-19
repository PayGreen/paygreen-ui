import { css } from 'styled-components';
import { math } from 'polished';
import { InternalGridBase } from '../../InternalGrid/style';

const openStyle = css`
    ${InternalGridBase} {
        margin-bottom: ${props => props.theme.space.md};
    }
`;

const closedStyle = css`
    height: ${props =>
        math(props.theme.icon.size.md + '+ 2*' + props.theme.space.sm)};
`;

export { openStyle, closedStyle };
