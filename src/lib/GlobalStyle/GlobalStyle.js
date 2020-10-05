import { createGlobalStyle } from 'styled-components';

/**
 * @description It blocks scroll on body without removing the scroll bar and preserves layout
 */
const BlockedScrollStyle = createGlobalStyle`
    body {
        position: fixed !important;
        overflow-y: scroll !important;
        width: 100% !important;
    }
`;

/**
 * @description It blocks scroll on body without adding a scroll bar
 */
const NoScrollStyle = createGlobalStyle`
    body {
        position: fixed !important; 
        width: 100% !important;
    }
`;

export { BlockedScrollStyle, NoScrollStyle };
