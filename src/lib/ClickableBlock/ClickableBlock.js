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
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
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
    iconSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    isActive: PropTypes.bool,
};

ClickableBlock.defaultProps = {
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey10,
    colorStatus: formStatusDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,
    paddingLateral: spaceDefault,
    borderTop: true,
    borderRight: true,
    borderLeft: true,
    borderBottom: true,
    iconSize: iconSizeOptions.md,
    isActive: false,
};

export default ClickableBlock;
