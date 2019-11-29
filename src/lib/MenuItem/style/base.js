import { css } from 'styled-components';

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
    hoverEmphasis,
};