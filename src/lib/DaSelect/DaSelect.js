import React from 'react';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import Options from '../Select/Options';
import { DaSelectBase } from './style';

const DaSelect = ({
    theme,
    options,
    isRounded,
    fieldSize,
    blockWidth,
    hasStaticWidth,
    hasHelpButton,
    icon,
    readOnly, // must not be passed with rest because there is no readOnly html attribute for select
    inputRef,
    ...rest
}) => {
    return (
        <DaSelectBase
            theme={theme} // not necessary, only needed for tests
            inputReadOnly={readOnly}
            inputDisabled={rest.disabled}
            isRounded={isRounded}
            blockWidth={blockWidth}
            hasStaticWidth={hasStaticWidth}
            fieldSize={fieldSize}
            hasHelpButton={hasHelpButton}
            hasIcon={!!icon}
        >
            {icon
                ? React.cloneElement(icon, {
                      iconSize: fieldSize,
                  })
                : null}

            <select {...rest} ref={inputRef}>
                <Options
                    options={options}
                    readOnly={readOnly}
                    defaultValue={rest.defaultValue}
                />
            </select>
        </DaSelectBase>
    );
};

DaSelect.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.oneOfType([
            PropTypes.shape({
                value: PropTypes.any.isRequired,
                text: PropTypes.string.isRequired,
                disabled: PropTypes.bool,
            }),
            PropTypes.oneOfType([
                PropTypes.shape({
                    optgroup: PropTypes.string.isRequired,
                }),
                PropTypes.arrayOf(
                    PropTypes.shape({
                        value: PropTypes.any.isRequired,
                        text: PropTypes.string.isRequired,
                        disabled: PropTypes.bool,
                    }),
                ),
            ]),
        ]),
    ).isRequired,
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    isRounded: PropTypes.bool,
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    hasStaticWidth: PropTypes.bool,
    hasHelpButton: PropTypes.bool,
    icon: PropTypes.element,
    inputRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.any }),
    ]),
};

DaSelect.defaultProps = {
    disabled: false,
    readOnly: false,
    isRounded: false,
    fieldSize: buttonSizeDefault,
    blockWidth: inputWidthDefault,
    hasStaticWidth: false,
    hasHelpButton: false,
    icon: null,
};

export default DaSelect;
