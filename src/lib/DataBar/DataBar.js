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
        if (!toPercent) {
            return unit === '%' ? percent.toFixed(2) : value;
        } else {
            return percent.toFixed(2);
        }
    };

    return (
        <div {...rest}>
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
                        colorTheme={dataItem.colorTheme}
                        colorStatus={dataItem.colorStatus}
                    />
                ))}
            </Bar>

            {data.map((dataItem, index) =>
                dataItem.legend ? (
                    <DataLegend
                        {...rest}
                        key={index}
                        colorTheme={dataItem.colorTheme}
                        colorStatus={dataItem.colorStatus}
                        unit={unit}
                        value={calcValue(dataItem.value, false)}
                    >
                        <Text
                            {...rest}
                            colorPallet={colorPalletOptions.wab}
                            htmlTag={textHtmlTagOptions.span}
                        >
                            {dataItem.legend}
                        </Text>
                    </DataLegend>
                ) : null,
            )}
        </div>
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
    minValue: 0,
    maxValue: 100,
    textSize: fontSizeDefault,
    unit: '%',
    hasBackground: false,
    backgroundColor: greyOptions.grey10,
};

export default DataBar;
