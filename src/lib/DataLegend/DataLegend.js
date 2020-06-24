import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    fontSizeOptions,
    fontSizeDefault,
    formStatusDefault,
    formStatusOptions,
    colorThemeDefault,
    colorThemeOptions,
    colorPalletDefault,
} from '../../shared/constants';
import { DataLegendBase } from './style';

const DataLegend = props => {
    return (
        <DataLegendBase {...props}>
            <span className="value">{props.currentValue}</span>

            <span className="unit">{props.unit}</span>

            {props.children}
        </DataLegendBase>
    );
};

DataLegend.propTypes = {
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    currentValue: PropTypes.number,
    unit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
};

DataLegend.defaultProps = {
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    currentValue: 0,
    unit: '%',
    textSize: fontSizeDefault,
};

export default DataLegend;
