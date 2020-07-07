import React from 'react';
import PropTypes from 'prop-types';
import {
    buttonSizeOptions,
    buttonSizeDefault,
    labelHtmlTagOptions,
    labelHtmlTagDefault,
} from '../../shared/constants';
import { DaLabelBase } from './style';

const DaLabel = props => {
    return (
        <DaLabelBase as={props.htmlTag} {...props}>
            {props.children}
            {props.isRequired ? <span className="required">*</span> : null}
        </DaLabelBase>
    );
};

DaLabel.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    htmlTag: PropTypes.oneOf(Object.values(labelHtmlTagOptions)),
    isRequired: PropTypes.bool,
};

DaLabel.defaultProps = {
    fieldSize: buttonSizeDefault,
    htmlTag: labelHtmlTagDefault,
    isRequired: false,
};

export default DaLabel;
