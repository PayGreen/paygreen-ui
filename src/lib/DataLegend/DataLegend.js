import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    flexDirectionOptions,
    flexDirectionDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    colorThemeDefault,
    colorThemeOptions,
    formStatusOptions,
    colorPalletDefault,
} from '../../shared/constants';
import { DataLegendBase } from './style';
import Text from '../Text/Text';

const DataLegend = props => {
    return (
        <DataLegendBase {...props}>
            <Text {...props}>
                {props.legendValue}
                <Text {...props} htmlTag={textHtmlTagOptions.span}>
                    {props.legendUnit}
                </Text>
            </Text>
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
    legendValue: PropTypes.number,
    legendUnit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
};

DataLegend.defaultProps = {
    colorPallet: colorPalletDefault,
    dataColor: colorThemeDefault,
    legendValue: 0,
    legendUnit: '%',
    textSize: fontSizeDefault,
    flexDirection: flexDirectionDefault,
    align: alignDefault,
};

export default DataLegend;
