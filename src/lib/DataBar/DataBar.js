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
} from '../../shared/constants';
import { DataBarBase, Bar, BarSection } from './style';
import Text from '../Text/Text';
import DataLegend from '../DataLegend/DataLegend';

const DataBar = props => {
    const {
        blockWidth,
        dataArray,
        hasDataLegend,
        minValue,
        maxValue,
        unit,
        withBackground,
        ...rest
    } = props;

    const calcPercent = value => {
        return (
            Math.round(
                (((value - minValue) * 100) / (maxValue - minValue)) * 10,
            ) / 10
        );
    };

    return (
        <DataBarBase {...rest}>
            <Bar
                {...rest}
                withBackground={withBackground}
                blockWidth={blockWidth}
            >
                {dataArray.map((data, index) => (
                    <BarSection
                        {...rest}
                        key={index}
                        dataWidth={calcPercent(data.currentValue)}
                        dataColor={data.color}
                    />
                ))}
            </Bar>

            {dataArray.length === 1 && hasDataLegend ? (
                <DataLegend
                    {...props}
                    dataColor={dataArray[0].color}
                    legendUnit={unit.length ? unit : '%'}
                    legendValue={
                        unit.length && unit !== '%'
                            ? dataArray[0].currentValue
                            : calcPercent(dataArray[0].currentValue)
                    }
                >
                    {dataArray[0].legend && dataArray[0].legend.length ? (
                        <Text {...props} colorPallet={colorPalletOptions.wab}>
                            {dataArray[0].legend}
                        </Text>
                    ) : null}
                </DataLegend>
            ) : null}
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
    dataArray: PropTypes.arrayOf(
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
    withBackground: PropTypes.bool,
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
    withBackground: false,
};

export default DataBar;
