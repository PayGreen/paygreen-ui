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

const DataLegend = ({value, unit, children, ...rest}) => {
    return (
        <DataLegendBase {...rest} isDisabled={value === 0}>
            <span className="value">{value}</span>

            <span className="unit">{unit}</span>

            {children}
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
    value: PropTypes.number,
    unit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
};

DataLegend.defaultProps = {
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    value: 0,
    unit: '%',
    textSize: fontSizeDefault,
};

export default DataLegend;
