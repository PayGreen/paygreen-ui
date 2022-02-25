import { css } from 'styled-components';
import { sidebarItemHtmlTagOptions } from '../../../shared/constants';

const activeStyle = css`
    &::before {
        opacity: 1;
    }

    & > .icon:last-of-type:not(first-of-type) {
        background-color: transparent;
    }
`;

const aHoverStyle = css`
    a:hover &,
    a:active &,
    a:focus & {
        ${activeStyle};
    }
`;

const buttonHoverStyle = css`
    &:hover,
    &:active,
    &:focus {
        ${activeStyle};
    }
`;

const hoverBase = css`
    ${props =>
        props.as === sidebarItemHtmlTagOptions.button
            ? buttonHoverStyle
            : aHoverStyle}
`;

const buttonStyle = css`
    width: 100%;
`;

export { activeStyle, hoverBase, buttonStyle };
