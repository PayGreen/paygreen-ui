import { css } from 'styled-components';
import { transparentize } from 'polished';

const hiddenStyle = css`
    margin-top: -${props => props.theme.grid.header};
`;

const notTopStyle = css`
    border-color: ${props => props.theme.wab.white20};
    background-color: ${props => props.theme.wab.white00};
    box-shadow: ${props =>
        props.theme.shadow.size.lg +
        ' ' +
        transparentize(props.theme.shadow.opacity.sm, props.theme.wab.black00)};
`;

export { hiddenStyle, notTopStyle };
