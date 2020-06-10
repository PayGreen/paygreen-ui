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
        </DaLabelBase>
    );
};

DaLabel.propTypes = {
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    htmlTag: PropTypes.oneOf(Object.values(labelHtmlTagOptions)),
};

DaLabel.defaultProps = {
    fieldSize: buttonSizeDefault,
    htmlTag: labelHtmlTagDefault,
};

export default DaLabel;
