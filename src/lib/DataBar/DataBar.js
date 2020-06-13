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
    greyOptions,
    fontSizeOptions,
    spaceOptions,
    textHtmlTagOptions,
} from '../../shared/constants';
import { DataBarBase, Bar, BarSection } from './style';
import Text from '../Text/Text';
import Title from '../Title/Title';
import DataLegend from '../DataLegend/DataLegend';

const DataBar = props => {
    const {
        blockWidth,
        dataArray,
        hasDatabarLegend,
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
        <DataBarBase {...rest} blockWidth={blockWidth}>
            <Bar {...rest} withBackground={withBackground}>
                {dataArray.map((data, index) => (
                    <BarSection
                        {...rest}
                        key={index}
                        dataWidth={calcPercent(data.currentValue)}
                        dataColor={data.color}
                    />
                ))}
            </Bar>

            {dataArray.length === 1 && hasDatabarLegend ? (
                <DataLegend
                    {...props}
                    legendUnit={unit.length > 0 ? unit : '%'}
                    legendValue={
                        unit.length > 0 && unit !== '%'
                            ? dataArray[0].currentValue
                            : calcPercent(dataArray[0].currentValue)
                    }
                >
                    <Text {...props}>{dataArray[0].legend}</Text>
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
    hasDatabarLegend: PropTypes.bool,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    unit: PropTypes.string,
    withBackground: PropTypes.bool,
};

DataBar.defaultProps = {
    blockWidth: blockWidthDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorStatus: formStatusDefault,
    hasDatabarLegend: false,
    minValue: 0,
    maxValue: 100,
    unit: '%',
    withBackground: false,
};

export default DataBar;
