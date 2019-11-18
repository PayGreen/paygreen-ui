import { css } from 'styled-components';
import { transparentize } from 'polished';
import {
    borderGradientOptions
} from '../../../shared/constants'; 
import {
    
} from './constants';

const shadowStyle = css`
    box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
        props.theme.shadow.opacity[props.shadow],
        props.theme.color[props.colorTheme]['main']
    )};

    &:hover {
        box-shadow: ${props => props.theme.shadow.size[props.shadow] + ' ' + transparentize(
            props.theme.shadow.opacity[props.shadow] - 0.1,
            props.theme.color[props.colorTheme]['main']
        )};
    }
`;

const radius = css`
    border-radius: ${props => props.theme.radius[props.radiusSize]};
`;

const borderTopGradient = {
    brand: css`
        background-image: linear-gradient(to left,
            ${props => props.theme.color.primary.gradientBase},
            ${props => props.theme.color.secondary.gradientBase}
        );
    `,
    theme: css`
        background-image: linear-gradient(to left,
            ${props => props.theme.color[props.colorTheme]['gradientBase']},
            ${props => props.theme.color[props.colorTheme]['gradientShade']}
        );
    `
};

const borderTopElement = css`
    &:before {
        content: '';
        height: ${props => props.theme.radius[props.radiusSize]};
        border-radius: ${props => props.theme.radius[props.radiusSize]} ${props => props.theme.radius[props.radiusSize]} 0 0;
        
        ${props => borderTopGradient[props.borderTop]};
    }
`;

const backgroundStyle = {
    original: css`
        background-color: ${props => props.theme.wab.white00};

        ${shadowStyle};
        ${radius};
        ${props => props.borderTop !== borderGradientOptions.none ? borderTopElement : null};
    `,
    reverse: css`
        background-image: linear-gradient(
            ${props => props.theme.color[props.colorTheme]['gradientBase']},
            ${props => props.theme.color[props.colorTheme]['gradientShade']}
        );

        ${shadowStyle};
        ${radius};

        p {
            color: ${props => props.theme.wab.white00};
        }
    `
};

export {
    backgroundStyle
};