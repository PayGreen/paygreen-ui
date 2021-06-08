import { css } from 'styled-components';
import { ThemeDefault } from '../../theme';

/**
 * Create usefull CSS classes for responsive displays (used in some components)
 */
export const CssClasses = css`
    .hideOnMobile {
        @media ${ThemeDefault.screen.max.sm} {
            display: none !important;
        }
    }

    .hideOnTablet {
        @media ${ThemeDefault.screen.max.md} {
            display: none !important;
        }
    }

    .hideOnDesktop {
        @media ${ThemeDefault.screen.min.md} {
            display: none !important;
        }
    }

    .hideOnSmallScreen {
        @media ${ThemeDefault.screen.max.lg} {
            display: none !important;
        }
    }

    .hideOnBigScreen {
        @media ${ThemeDefault.screen.min.lg} {
            display: none !important;
        }
    }
`;
