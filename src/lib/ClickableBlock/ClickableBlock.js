import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    iconSizeOptions,
    rotateSizeOptions,
    rotateSizeDefault,
    colorPalletOptions,
    spaceOptions,
} from '../../shared/constants';
import { ClickableBlockBase } from './style';
import { ArrowBottomIcon } from '../Icon/Icon';

const ClickableBlock = props => {
    const [isActive, setActive] = useState(false);

    return (
        <ClickableBlockBase onClick={() => setActive(!isActive)} {...props}>
            {props.children}

            <ArrowBottomIcon
                theme={props.theme} // not necessary, only needed for tests
                rotateSize={
                    isActive ? rotateSizeOptions.d180 : rotateSizeDefault
                }
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
                marginLeft={spaceOptions.xs}
            />
        </ClickableBlockBase>
    );
};

ClickableBlock.propTypes = {
    borderTop: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    borderBottom: PropTypes.bool,
};

ClickableBlock.defaultProps = {
    borderTop: true,
    borderRight: true,
    borderLeft: true,
    borderBottom: true,
};

export default ClickableBlock;
