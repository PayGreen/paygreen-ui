import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
} from '../../shared/constants';
import { ToggleElement, ToggleBase } from './style';
import ToggleLabel from './ToggleLabel';

const Toggle = ({
    theme,
    checkedLabel,
    notCheckedLabel,
    fieldSize,
    colorPallet,
    colorTheme,
    colorWab,
    colorStatus,
    ...rest
}) => {
    const checkedLabelProps = {
        colorPallet:
            typeof colorPallet === 'object'
                ? colorPallet.checked
                : colorPallet === colorPalletOptions.wab
                ? colorPalletOptions.status
                : colorPallet,
        colorTheme:
            typeof colorTheme === 'object' ? colorTheme.checked : colorTheme,
        colorWab: typeof colorWab === 'object' ? colorWab.checked : colorWab,
        colorStatus:
            typeof colorStatus === 'object' ? colorStatus.checked : colorStatus,
    };

    const notCheckedLabelProps = {
        colorPallet:
            typeof colorPallet === 'object'
                ? colorPallet.notChecked
                : colorPallet === colorPalletOptions.status
                ? colorPallet
                : colorPalletOptions.wab,
        colorTheme:
            typeof colorTheme === 'object' ? colorTheme.notChecked : colorTheme,
        colorWab: typeof colorWab === 'object' ? colorWab.notChecked : colorWab,
        colorStatus:
            typeof colorStatus === 'object'
                ? colorStatus.notChecked
                : formStatusOptions.danger,
    };

    return (
        <ToggleBase
            theme={theme} // not necessary, only needed for tests
            isDisabled={rest.disabled}
            fieldSize={fieldSize}
            checkedColor={checkedLabelProps}
            notCheckedColor={notCheckedLabelProps}
        >
            <input {...rest} type="checkbox" />

            <ToggleElement
                theme={theme} // not necessary, only needed for tests
                fieldSize={fieldSize}
            >
                <ToggleLabel
                    theme={theme} // not necessary, only needed for tests
                    {...checkedLabelProps}
                >
                    {checkedLabel}
                </ToggleLabel>

                <ToggleLabel
                    theme={theme} // not necessary, only needed for tests
                    {...notCheckedLabelProps}
                >
                    {notCheckedLabel}
                </ToggleLabel>
            </ToggleElement>
        </ToggleBase>
    );
};

Toggle.propTypes = {
    disabled: PropTypes.bool,
    checkedLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    notCheckedLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    colorPallet: PropTypes.oneOfType([
        PropTypes.oneOf(Object.values(colorPalletOptions)),
        PropTypes.shape({
            checked: PropTypes.oneOf(Object.values(colorPalletOptions)),
            notChecked: PropTypes.oneOf(Object.values(colorPalletOptions)),
        }),
    ]),
    colorTheme: PropTypes.oneOfType([
        PropTypes.oneOf(Object.values(colorThemeOptions)),
        PropTypes.shape({
            checked: PropTypes.oneOf(Object.values(colorThemeOptions)),
            notChecked: PropTypes.oneOf(Object.values(colorThemeOptions)),
        }),
    ]),
    colorWab: PropTypes.oneOfType([
        PropTypes.oneOf(Object.values(greyOptions)),
        PropTypes.shape({
            checked: PropTypes.oneOf(Object.values(greyOptions)),
            notChecked: PropTypes.oneOf(Object.values(greyOptions)),
        }),
    ]),
    colorStatus: PropTypes.oneOfType([
        PropTypes.oneOf(Object.values(formStatusOptions)),
        PropTypes.shape({
            checked: PropTypes.oneOf(Object.values(formStatusOptions)),
            notChecked: PropTypes.oneOf(Object.values(formStatusOptions)),
        }),
    ]),
};

Toggle.defaultProps = {
    disabled: false,
    fieldSize: buttonSizeDefault,
    colorPallet: colorPalletOptions.status,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusOptions.success,
};

export default Toggle;
