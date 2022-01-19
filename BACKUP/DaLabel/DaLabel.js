import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
} from '../../shared/constants';
import { DaLabelBase } from './style';

const DaLabel = ({children, required, htmlTag, ...rest}) => {
    return (
        <DaLabelBase as={htmlTag} {...rest}>
            {children}
            {required ? <span className="required">*</span> : null}
        </DaLabelBase>
    );
};

DaLabel.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    htmlTag: PropTypes.oneOf(Object.values(labelHtmlTagOptions)),
    required: PropTypes.bool,
};

DaLabel.defaultProps = {
    fieldSize: buttonSizeDefault,
    htmlTag: labelHtmlTagDefault,
    required: false,
};

export default DaLabel;
