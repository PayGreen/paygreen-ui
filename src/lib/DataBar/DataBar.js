import React from 'react';
import PropTypes from 'prop-types';
import {
    blockWidthOptions,
    blockWidthDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    formStatusOptions,
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

    // to calculate the value depending on unit type and to force calculation to percent if needed
    const calcValue = (value, toPercent) => {
        let percent = ((value - minValue) / (maxValue - minValue)) * 100;
        if (!toPercent) {
            return unit.length && unit !== '%' ? value : percent.toFixed(2);
        } else return percent.toFixed(2);
    };

    return (
        <DataBarBase {...rest}>
            <Bar
                {...rest}
                hasBackground={hasBackground}
                blockWidth={blockWidth}
            >
                {data.map((dataItem, index) => (
                    <BarSection
                        {...rest}
                        key={index}
                        dataWidth={calcValue(dataItem.value, true)}
                        colorStatus={dataItem.colorStatus}
                        colorTheme={dataItem.colorTheme}
                    />
                ))}
            </Bar>

            {hasDataLegend
                ? data.map((dataItem, index) => (
                      <DataLegend
                          {...rest}
                          key={index}
                          colorStatus={dataItem.colorStatus}
                          colorTheme={dataItem.colorTheme}
                          unit={unit.length ? unit : '%'}
                          value={calcValue(dataItem.value, false)}
                      >
                          {dataItem.legend && dataItem.legend.length ? (
                              <Text
                                  {...rest}
                                  colorPallet={colorPalletOptions.wab}
                                  htmlTag="span"
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
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            legend: PropTypes.string,
            colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions))
                .isRequired,
            colorStatus: PropTypes.oneOf(Object.values(formStatusOptions))
                .isRequired,
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
    hasDataLegend: false,
    minValue: 0,
    maxValue: 100,
    textSize: fontSizeDefault,
    unit: '%',
    hasBackground: false,
    backgroundColor: greyOptions.grey10,
};

export default DataBar;
