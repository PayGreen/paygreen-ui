import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorThemeOptions,
    greyOptions,
    formStatusOptions,
} from '../../shared/constants';
import { ToggleLabelBase } from './style';

const ToggleLabel = ({ children, ...rest }) => {
    return (
        <ToggleLabelBase {...rest}>
            {React.Children.map(children, (child, index) => {
                if (!child) {
                    return null;
                }

                if (typeof child === 'object') {
                    return React.cloneElement(child, {
                        colorPallet: rest.colorPallet,
                        colorTheme: rest.colorTheme,
                        colorWab: rest.colorWab,
                        colorStatus: rest.colorStatus,
                        key: index,
                    });
                }

                return child;
            })}
        </ToggleLabelBase>
    );
};

ToggleLabel.propTypes = {
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)).isRequired,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)).isRequired,
    colorWab: PropTypes.oneOf(Object.values(greyOptions)).isRequired,
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)).isRequired,
};

export default ToggleLabel;
