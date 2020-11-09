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
    arrowBlockOptions,
    arrowBlockDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { MessageBase } from './style';

const Message = props => {
    return <MessageBase {...props}>{props.children}</MessageBase>;
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
    arrowBlock: PropTypes.oneOf(Object.values(arrowBlockOptions)),
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
    arrowBlock: arrowBlockDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default Message;
