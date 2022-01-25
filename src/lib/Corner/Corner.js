import React from 'react';
import PropTypes from 'prop-types';
import {
    cornerStyleOptions,
    cornerStyleDefault,
    lateralPositionOptions,
    lateralPositionDefault,
    radiusOptions,
    radiusDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import Popin from '../Popin/Popin';
import { CornerBase } from './style';

const Corner = ({ children, label, ...rest }) => {
    return (
        <CornerBase {...rest}>
            <div className="corner">
                <span className="cornerContent">{label}</span>
            </div>

            {React.Children.map(children, child => {
                if (!child) {
                    return null;
                }

                if (child.type === Popin) {
                    return React.cloneElement(child, {
                        isActive: true,
                    });
                }

                return child;
            })}
        </CornerBase>
    );
};

Corner.propTypes = {
    label: PropTypes.any.isRequired,
    cornerStyle: PropTypes.oneOf(Object.values(cornerStyleOptions)),
    position: PropTypes.oneOf(Object.values(lateralPositionOptions)),
    hasCenteredPopin: PropTypes.bool,
    radiusSize: PropTypes.oneOf(Object.values(radiusOptions)),
    colorStyle: PropTypes.oneOf(Object.values(colorStyleOptions)),
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
};

Corner.defaultProps = {
    cornerStyle: cornerStyleDefault,
    position: lateralPositionDefault,
    hasCenteredPopin: false,
    radiusSize: radiusDefault,
    colorStyle: colorStyleDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
};

export default Corner;
