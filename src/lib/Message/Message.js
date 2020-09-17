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
    spaceOptions,
    spaceDefault,
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
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Message.defaultProps = {
    colorStatus: formStatusDefault,
    blockWidth: inputWidthDefault,
    fieldSize: buttonSizeDefault,
    arrowBlock: arrowBlockDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default Message;
