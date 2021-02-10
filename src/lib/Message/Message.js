import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    blockPositionOptions,
    blockPositionDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { MessageBase } from './style';

const Message = ({ arrowBlock, children, ...rest }) => {
    const arrow =
        arrowBlock === blockPositionOptions.center
            ? blockPositionOptions.topCenter
            : arrowBlock;

    return (
        <MessageBase {...rest} arrowBlock={arrow}>
            {children}
        </MessageBase>
    );
};

Message.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    hasStaticWidth: PropTypes.bool,
    arrowBlock: PropTypes.oneOf(Object.values(blockPositionOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Message.defaultProps = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.status,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    blockWidth: inputWidthDefault,
    fieldSize: buttonSizeDefault,
    hasStaticWidth: false,
    arrowBlock: blockPositionDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default Message;
