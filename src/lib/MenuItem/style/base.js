import { css } from 'styled-components';
import { transparentize } from 'polished';
import { LinkBase } from '../../Link/style';

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

const hoverAlternative = css`
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        height: ${props => props.theme.line};
        width: 0;
        transform: translateX(-50%);
        margin-left: 50%;
        background-image: linear-gradient(to left,
            ${props => props.theme.color[props.colorTheme]['gradientBase']},
            ${props => props.theme.color[props.colorTheme]['gradientShade']}
        );
        transition: all ${props => props.theme.transition.sm};
    }

    a:hover &,
    a:active &,
    a:focus & {
        &:after {
            width: 100%;
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

const titleStyle = css`
    cursor: default;
    
    ${LinkBase} {
        color: ${props => props.theme.wab.grey30};
        border-bottom: solid ${props => props.theme.line} ${props => props.theme.wab.white20};
    }
`;

const main = css`
    ${LinkBase} {
        padding: ${props => props.theme.space.md} 0;
    }

    @media (${props => props.theme.query.max.lg}) {
        ${props => props.hoverBase ? hoverBase : titleStyle};
    }

    @media (${props => props.theme.query.min.lg}) {
        ${props => props.hoverAlternative ? hoverAlternative : null};

        ${LinkBase} {
            text-align: center;
            font-size: ${props => props.theme.font.size.xs};
            color: ${props => props.theme.wab.grey50};
        }
    }
`;

const sub = css`
    padding-top: ${props => props.theme.space.sm};
    padding-bottom: ${props => props.theme.space.sm};

    ${LinkBase} {
        padding: ${props => props.theme.space.sm} 0;
    }

    ${props => props.hoverBase ? hoverBase : null};
    ${props => props.hoverEmphasis ? hoverEmphasis : null};
`;

export {
    main,
    sub,
};