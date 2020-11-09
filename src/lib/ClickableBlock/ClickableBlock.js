import React from 'react';
import PropTypes from 'prop-types';
import {
    iconSizeOptions,
    rotateSizeOptions,
    rotateSizeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { ClickableBlockBase } from './style';
import { ArrowBottomIcon } from '../Icon/Icon';

const ClickableBlock = props => {
    return (
        <ClickableBlockBase tabIndex="0" {...props}>
            {props.children}

            <ArrowBottomIcon
                theme={props.theme} // not necessary, only needed for tests
                className="arrow"
                rotateSize={
                    props.isActive ? rotateSizeOptions.d180 : rotateSizeDefault
                }
                iconSize={props.iconSize}
                colorPallet={props.colorPallet}
                colorTheme={props.colorTheme}
                colorWab={props.colorWab}
                colorStatus={props.colorStatus}
                marginLeft={spaceOptions.xs}
            />
        </ClickableBlockBase>
    );
};

ClickableBlock.propTypes = {
    isActive: PropTypes.bool,
    iconSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    borderTop: PropTypes.bool,
    borderRight: PropTypes.bool,
    borderLeft: PropTypes.bool,
    borderBottom: PropTypes.bool,
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    isHiddenOnMobile: PropTypes.bool,
};

ClickableBlock.defaultProps = {
    isActive: false,
    iconSize: iconSizeOptions.md,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    borderTop: false,
    borderRight: false,
    borderLeft: false,
    borderBottom: false,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,
    paddingLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLateral: spaceDefault,
    isHiddenOnMobile: false,
};

export default ClickableBlock;
