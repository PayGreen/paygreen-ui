import React from 'react';
import PropTypes from 'prop-types';
import {
    blockWidthOptions,
    blockWidthDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    greyOptions,
} from '../../shared/constants';
import { DataBarBase, Bar, BarSection } from './style';
import Text from '../Text/Text';
import DataLegend from '../DataLegend/DataLegend';

const DataBar = props => {
    const {
        blockWidth,
        data,
        hasDataLegend,
        minValue,
        maxValue,
        unit,
        hasBackground,
        ...rest
    } = props;

    const calcValue = (value, toPercent) => {
        let percent = ((value - minValue) / (maxValue - minValue)) * 100;
        if (!toPercent) {
            return unit.length && unit !== '%'
                ? data.currentValue
                : percent.toFixed(2);
        } else return percent.toFixed(2);
    };

    return (
        <DataBarBase {...rest}>
            <Bar
                {...rest}
                hasBackground={hasBackground}
                blockWidth={blockWidth}
            >
                {data.map((data, index) => (
                    <BarSection
                        {...rest}
                        key={index}
                        dataWidth={calcValue(data.currentValue, true)}
                        dataColor={data.color}
                    />
                ))}
            </Bar>

            {hasDataLegend
                ? data.map(dataItem => (
                      <DataLegend
                          {...rest}
                          dataColor={dataItem.color}
                          legendUnit={unit.length ? unit : '%'}
                          legendValue={calcValue(dataItem.currentValue, false)}
                      >
                          {dataItem.legend && dataItem.legend.length ? (
                              <Text
                                  {...rest}
                                  colorPallet={colorPalletOptions.wab}
                              >
                                  {dataItem.legend}
                              </Text>
                          ) : null}
                      </DataLegend>
                  ))
                : null}
        </DataBarBase>
    );
};

DataBar.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            currentValue: PropTypes.number.isRequired,
            legend: PropTypes.string,
            color: PropTypes.string.isRequired,
        }),
    ).isRequired,
    hasDataLegend: PropTypes.bool,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    unit: PropTypes.string,
    hasBackground: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(Object.values(greyOptions)),
};

DataBar.defaultProps = {
    blockWidth: blockWidthDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    hasDataLegend: false,
    minValue: 0,
    maxValue: 100,
    textSize: fontSizeDefault,
    unit: '%',
    hasBackground: false,
    backgroundColor: greyOptions.grey10,
};

export default DataBar;
