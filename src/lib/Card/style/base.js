import { css } from 'styled-components';
import { transparentize } from 'polished';
import { gradientOptions, spaceOptions } from '../../../shared/constants';
import { responsiveSpaces } from '../../../shared/spaces';
import { ImageBase } from '../../Image/style';

const shadowStyle = css`
    box-shadow: ${props =>
        props.theme.shadow.size[props.shadowSize] +
        ' ' +
        transparentize(
            props.theme.shadow.opacity[props.shadowSize],
            props.theme.color[props.colorTheme].main,
        )};

    &:hover {
        box-shadow: ${props =>
            props.theme.shadow.size[props.shadowSize] +
            ' ' +
            transparentize(
                props.theme.shadow.opacity[props.shadowSize] - 0.1,
                props.theme.color[props.colorTheme].main,
            )};
    }
`;

const radius = css`
    border-radius: ${props => props.theme.radius[props.radiusSize]};

    & > :first-child {
        &:not(.icon),
        & > img {
            border-top-left-radius: ${props =>
                props.theme.radius[props.radiusSize]};
            border-top-right-radius: ${props =>
                props.theme.radius[props.radiusSize]};
        }
    }

    & > :last-child {
        &:not(.icon),
        & > img {
            border-bottom-left-radius: ${props =>
                props.theme.radius[props.radiusSize]};
            border-bottom-right-radius: ${props =>
                props.theme.radius[props.radiusSize]};
        }
    }
`;

const borderTopGradient = {
    brand: css`
        background-image: linear-gradient(
            to left,
            ${props => props.theme.color.primary.gradientBase},
            ${props => props.theme.color.secondary.gradientBase}
        );
    `,
    theme: css`
        background-image: linear-gradient(
            to left,
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );
    `,
};

const borderTopElement = css`
    &::before {
        content: '';
        height: ${props => props.theme.radius[props.radiusSize]};
        border-radius: ${props => props.theme.radius[props.radiusSize]}
            ${props => props.theme.radius[props.radiusSize]} 0 0;

        ${props => borderTopGradient[props.borderTop]};
    }
`;

const backgroundColor = {
    theme: css`
        background-color: ${props => props.theme.color[props.colorTheme].light};
    `,
    wab: css`
        background-color: ${props => props.theme.wab[props.colorWab]};
    `,
    status: css`
        background-color: ${props =>
            props.theme.status[props.colorStatus].light};
    `,
};

const backgroundStyle = {
    original: css`
        ${props => backgroundColor[props.colorPallet]};
        ${shadowStyle};
        ${radius};
        ${props =>
            props.borderTop !== gradientOptions.none ? borderTopElement : null};
    `,
    reverse: css`
        background-image: linear-gradient(
            ${props => props.theme.color[props.colorTheme].gradientBase},
            ${props => props.theme.color[props.colorTheme].gradientShade}
        );

        ${shadowStyle};
        ${radius};
    `,
};

const containerStyle = css`
    position: relative;
    max-width: ${props => props.theme.blockWidth[props.blockWidth]};
    ${responsiveSpaces('padding', 0, 1, 1, ['Lateral'])};
    ${props =>
        props.paddingTop !== spaceOptions.none
            ? responsiveSpaces('padding', 0, 1, 1, ['Top'])
            : css`
                  padding-top: 0.1px;
              `};
    ${props =>
        props.paddingBottom !== spaceOptions.none
            ? responsiveSpaces('padding', 0, 1, 1, ['Bottom'])
            : css`
                  padding-bottom: 0.1px;
              `};
`;

const blockStyle = css`
    ${containerStyle};
    ${props => (props.hasBackground ? backgroundStyle[props.colorType] : null)};

    & > ${ImageBase}:first-child {
        height: ${props => props.theme.blockHeader[props.blockWidth]};
    }

    transition: all ${props => props.theme.transition.sm};
`;

const titleOutBlockStyle = css`
    ${containerStyle};

    & > :first-child {
        text-transform: uppercase;
        letter-spacing: ${props => props.theme.font.spacing};
        line-height: 0.75;
        color: ${props => props.theme.color[props.colorTheme].gradientBase};
    }

    & > div {
        ${blockStyle};
        max-width: inherit;
    }
`;

export { blockStyle, titleOutBlockStyle };
