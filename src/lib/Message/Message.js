import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    arrowBlockOptions,
    arrowBlockDefault,
} from '../../shared/constants';
import { MessageBase } from './style';

const Message = props => {
    return <MessageBase {...props}>{props.children}</MessageBase>;
};

Message.propTypes = {
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    arrowBlock: PropTypes.oneOf(Object.values(arrowBlockOptions)),
};

Message.defaultProps = {
    colorStatus: formStatusDefault,
    blockWidth: inputWidthDefault,
    fieldSize: buttonSizeDefault,
    arrowBlock: arrowBlockDefault,
};

export default Message;
