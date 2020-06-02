import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    colorTypeOptions,
    colorTypeDefault,
    formStatusOptions,
    formStatusDefault,
    inputWidthOptions,
    inputWidthDefault,
    arrowBlockOptions,
    arrowBlockDefault,
} from '../../shared/constants';
import { FormMessageBase } from './style';

const FormMessage = props => {
    return <FormMessageBase {...props}>{props.children}</FormMessageBase>;
};

FormMessage.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    arrowBlock: PropTypes.oneOf(Object.values(arrowBlockOptions)),
};

FormMessage.defaultProps = {
    colorType: colorTypeDefault,
    colorStatus: formStatusDefault,
    blockWidth: inputWidthDefault,
    fieldSize: buttonSizeDefault,
    arrowBlock: arrowBlockDefault,
};

export default FormMessage;
