import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
} from '../../shared/constants';
import { IconLabelBase } from './style';

const IconLabel = ({ icon, children, ...rest }) => {
    return (
        <IconLabelBase {...rest}>
            {icon
                ? React.cloneElement(icon, {
                      colorPallet: rest.colorPallet,
                      colorTheme: rest.colorTheme,
                      colorStatus: rest.colorStatus,
                      iconSize: iconSizeOptions.xs,
                      marginRight: spaceOptions.xs,
                  })
                : null}

            {children}
        </IconLabelBase>
    );
};

IconLabel.propTypes = {
    icon: PropTypes.element,
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
};

IconLabel.defaultProps = {
    icon: null,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
};

export default IconLabel;
