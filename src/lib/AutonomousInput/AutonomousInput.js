import React from 'react';
import PropTypes from 'prop-types';
import {
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions,
    colorPalletOptions,
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { AutonomousInputBase } from './style';

const AutonomousInput = ({
    children,
    theme,
    status,
    submittedText,
    ...rest
}) => {
    const submittedBlock = (
        <span>
            <CheckBoldIcon
                theme={theme} // not necessary, only needed for tests
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.sm}
                colorPallet={colorPalletOptions.status}
                colorStatus={status}
            />
            {submittedText}
        </span>
    );

    return (
        <AutonomousInputBase
            theme={theme} // not necessary, only needed for tests
            status={status}
        >
            <div>
                <input {...rest} />

                {children}
            </div>

            {status === formStatusOptions.success && submittedText.length
                ? submittedBlock
                : null}
        </AutonomousInputBase>
    );
};

AutonomousInput.propTypes = {
    status: PropTypes.oneOf(Object.values(formStatusOptions)),
    submittedText: PropTypes.string,
};

AutonomousInput.defaultProps = {
    status: formStatusDefault,
    submittedText: 'Submitted!',
};

export default AutonomousInput;
