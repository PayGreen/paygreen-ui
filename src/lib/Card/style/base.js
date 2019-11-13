import { css } from 'styled-components';
import { transparentize } from 'polished';
import {
    
} from './constants';

const shadowStyle = css`
    box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
        props.theme.shadow.opacity[props.shadow],
        props.theme.color[props.colorTheme]['main']
    )};
`;

const radius = css`
    border-radius: ${props => props.theme.radius[props.radiusSize]};
`;

const backgroundStyle = {
    original: css`
        background-color: ${props => props.theme.color.white00};

        ${shadowStyle};
        ${radius};
    `,
    reverse: css`
        background-image: linear-gradient(
            ${props => props.theme.color[props.colorTheme]['gradientBase']},
            ${props => props.theme.color[props.colorTheme]['gradientShade']}
        );
        color: ${props => props.theme.color.white00};

        ${shadowStyle};
        ${radius};
    `
};

export {
    backgroundStyle
};