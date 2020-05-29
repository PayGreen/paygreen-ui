import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorTypeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
} from '../../shared/constants';
import { DaLabelBase } from './style';

const DaLabel = props => {
    return (
        <DaLabelBase {...props}>
            {props.children}
        </DaLabelBase>
    );
};

DaLabel.propTypes = {
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    fieldSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
};

DaLabel.defaultProps = {
    colorType: colorTypeDefault,
    fieldSize: buttonSizeDefault,
};

export default DaLabel;
