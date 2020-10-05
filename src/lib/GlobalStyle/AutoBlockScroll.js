import React from 'react';
import { BlockedScrollStyle, NoScrollStyle } from './GlobalStyle';
import { useDebounce } from '../../shared/hook/useDebounce';
import { useWindowSize } from '../../shared/hook/useWindowSize';

/**
 * @description It automatically detects if the current page has an active vertical scroll bar and blocks scroll properly.
 */
const AutoBlockScroll = () => {
    const windowSize = useDebounce(useWindowSize(), 200);

    return windowSize && windowSize.width > windowSize.clientWidth ? (
        <BlockedScrollStyle />
    ) : (
        <NoScrollStyle />
    );
};

export default AutoBlockScroll;
