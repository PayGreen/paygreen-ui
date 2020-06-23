import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    fontSizeOptions,
    fontSizeDefault,
    formStatusDefault,
    formStatusOptions,
    greyOptions,
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
    dataColor: PropTypes.oneOf(
        Object.values(colorThemeOptions),
        Object.values(formStatusOptions),
    ),
    currentValue: PropTypes.number,
    unit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
};

DataLegend.defaultProps = {
    colorPallet: colorPalletDefault,
    colorWab: greyOptions.white00,
    currentValue: 0,
    unit: '%',
    textSize: fontSizeDefault,
};

export default DataLegend;
