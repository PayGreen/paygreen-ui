import React from 'react';
import PropTypes from 'prop-types';
import { useDebounce, useWindowSize } from '../../shared/hook';
import { BlockedScrollStyle, NoScrollStyle } from './';

/**
 * @description It automatically detects if the current page has an active vertical scroll bar and blocks scroll properly.
 */
const AutoBlockScroll = props => {
    const windowSize = useDebounce(useWindowSize(), 200);

    return windowSize && windowSize.width > windowSize.clientWidth ? (
        <BlockedScrollStyle {...props} />
    ) : (
        <NoScrollStyle {...props} />
    );
};

AutoBlockScroll.propTypes = {
    hasScrollOnDesktop: PropTypes.bool,
};

AutoBlockScroll.defaultProps = {
    hasScrollOnDesktop: false,
};

export default AutoBlockScroll;
