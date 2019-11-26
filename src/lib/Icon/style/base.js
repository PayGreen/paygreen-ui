import { css } from 'styled-components';
import { math } from 'polished';

const backgroundStyle = css`
    padding: ${props => math(props.theme.iconSize[props.iconSize] + '/2 - ' + props.theme.space.xs)};
    border-radius: 50%;
    background: ${props => props.theme.color[props.colorTheme]['light']};
`;

export {
    backgroundStyle
};