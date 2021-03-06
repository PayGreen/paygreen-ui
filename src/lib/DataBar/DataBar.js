import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    greyOptions,
    textHtmlTagOptions,
} from '../../shared/constants';
import { Bar, BarSection } from './style';
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

    /**
     * to calculate the value depending on unit type and to force calculation to percent if needed
     *
     * @param {number} value
     * @param {boolean} toPercent
     */
    const calcValue = (value, toPercent) => {
        let percent = ((value - minValue) / (maxValue - minValue)) * 100;

        if (!toPercent && unit !== '%') {
            return value;
        } else {
            return Number(percent.toFixed(2));
        }
    };

    return (
        <div>
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
                        colorTheme={
                            dataItem.colorTheme
                                ? dataItem.colorTheme
                                : colorThemeDefault
                        }
                        colorStatus={
                            dataItem.colorStatus
                                ? dataItem.colorStatus
                                : formStatusDefault
                        }
                    />
                ))}
            </Bar>

            {data.map((dataItem, index) =>
                dataItem.legend ? (
                    <DataLegend
                        {...rest}
                        key={index}
                        colorTheme={
                            dataItem.colorTheme
                                ? dataItem.colorTheme
                                : colorThemeDefault
                        }
                        colorStatus={
                            dataItem.colorStatus
                                ? dataItem.colorStatus
                                : formStatusDefault
                        }
                        unit={unit}
                        value={calcValue(dataItem.value, false)}
                    >
                        <Text
                            {...rest}
                            colorPallet={colorPalletOptions.wab}
                            htmlTag={textHtmlTagOptions.span}
                        >
                            {Array.isArray(dataItem.legend)
                                ? dataItem.legend.map((text, index) => (
                                      <React.Fragment key={index}>
                                          {text}
                                      </React.Fragment>
                                  ))
                                : dataItem.legend}
                        </Text>
                    </DataLegend>
                ) : null,
            )}
        </div>
    );
};

DataBar.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    colorPallet: PropTypes.oneOf([
        colorPalletOptions.theme,
        colorPalletOptions.status,
    ]),
    data: PropTypes.arrayOf(
        PropTypes.shape({
            value: PropTypes.number.isRequired,
            legend: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
            colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
            colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
        }),
    ).isRequired,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    unit: PropTypes.string,
    hasBackground: PropTypes.bool,
    backgroundColor: PropTypes.oneOf(Object.values(greyOptions)),
};

DataBar.defaultProps = {
    blockWidth: spaceOptions.md,
    colorPallet: colorPalletDefault,
    minValue: 0,
    maxValue: 100,
    textSize: fontSizeDefault,
    unit: '%',
    hasBackground: false,
    backgroundColor: greyOptions.grey10,
};

export default DataBar;
