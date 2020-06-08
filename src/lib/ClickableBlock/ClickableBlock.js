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
    return (
        <ClickableBlockBase {...props}>
            {props.children}

            <ArrowBottomIcon
                theme={props.theme} // not necessary, only needed for tests
                rotateSize={
                    props.isActive ? rotateSizeOptions.d180 : rotateSizeDefault
                }
                iconSize={iconSizeOptions.md}
                colorPallet={colorPalletOptions.wab}
                marginLeft={spaceOptions.xs}
            />
        </ClickableBlockBase>
    );
};

ClickableBlock.propTypes = {
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    borderTop: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    borderBottom: PropTypes.bool,
    isActive: PropTypes.bool,
};

ClickableBlock.defaultProps = {
    borderTop: true,
    borderRight: true,
    borderLeft: true,
    borderBottom: true,
    isActive: false,
};

export default ClickableBlock;
