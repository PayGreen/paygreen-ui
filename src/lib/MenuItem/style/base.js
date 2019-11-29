import { css } from 'styled-components';
import { transparentize } from 'polished';

const hoverBase = css`
    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 200%;
        height: 100%;
        background-image: linear-gradient(to left,
            ${props => transparentize(1, props.theme.color[props.colorTheme]['gradientBase'])} 50%,
            ${props => transparentize(0.8, props.theme.color[props.colorTheme]['gradientBase'])} 90%
        );
        transition: all ${props => props.theme.transition.xl};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &:before {
            left: 0;
        }
    }
`;

const hoverEmphasis = css`
    padding-right: ${props => props.theme.space.md};

    a:hover &,
    a:active &,
    a:focus & {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.sm};
    }

    a:hover &,
    a:active &,
    a:focus & {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.sm};
    }

    @media (${props => props.theme.query.min.lg}) {
        padding-left: ${props => props.theme.space.md};
        padding-right: ${props => props.theme.space.lg};

        a:hover &,
        a:active &,
        a:focus & {
            padding-left: ${props => props.theme.space.lg};
            padding-right: ${props => props.theme.space.md};
        }
    }
`;

export {
    hoverBase,
    hoverEmphasis,
};