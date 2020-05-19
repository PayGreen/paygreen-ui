import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
    iconSizeOptions,
    rotateSizeOptions,
    rotateSizeDefault,
    colorPalletOptions,
    greyDefault,
} from '../../shared/constants';
import { ClickableBlockBase } from './style';
import { ArrowBottomIcon } from '../Icon/Icon';

const ClickableBlock = props => {
    const [isActive, setActive] = useState(false);
    const onClick = () => {
        if (isActive) {
            setActive(false);
        } else {
            setActive(true);
        }
    };

    return (
        <ClickableBlockBase onClick={onClick} {...props}>
            {props.children}
            <ArrowBottomIcon
                hasBackground={false}
                rotateSize={
                    isActive ? rotateSizeOptions.d180 : rotateSizeDefault
                }
                iconSize={iconSizeOptions.lg}
                colorPallet={colorPalletOptions.wab}
                colorWab={greyDefault}
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
