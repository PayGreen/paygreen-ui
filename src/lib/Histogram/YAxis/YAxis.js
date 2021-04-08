import React from 'react';
import PropTypes from 'prop-types';
import {
    inputWidthOptions,
    inputWidthDefault,
    fontSizeOptions,
    greyOptions,
    textHtmlTagOptions,
} from '../../../shared/constants';
import { adjustDecimalNumber } from '../../../shared/tools';
import Text from '../../Text/Text';
import { YAxisBase, YAxisElementBase } from './style';

const YAxis = ({
    maxValue,
    maxValueLabel,
    values,
    hasMin,
    hasMax,
    isRelative,
    unit,
    ...rest
}) => {
    let allValues = [];

    allValues.push(0);

    // if maxValueLabel is provided (due to specific conversion) we use it to build yAxis else we use global maxValue
    values.map(value => {
        if (value > 0) {
            if (isRelative && value < 100) {
                allValues.push((value * (maxValueLabel || maxValue)) / 100);
            } else if (value < (maxValueLabel || maxValue)) {
                allValues.push(value);
            }
        }
    });

    allValues.push(maxValueLabel || maxValue);

    allValues = Array.from(new Set(allValues)); // remove duplicated values
    allValues = allValues.sort((a, b) => b - a); // desc sort

    let gridTemplateRows = '';

    allValues.map((currentValue, index) => {
        if (index + 1 < allValues.length) {
            const nextValue = allValues[index + 1];

            gridTemplateRows +=
                Math.round(((currentValue - nextValue) / maxValue) * 100) +
                'fr ';
        }
    });

    gridTemplateRows += '0';

    return (
        <YAxisBase {...rest} gridTemplateRows={gridTemplateRows}>
            {allValues.map((value, index) =>
                (index > 0 && index + 1 < allValues.length) ||
                (index === 0 && hasMax) ||
                (index + 1 === allValues.length && hasMin) ? (
                    <YAxisElementBase
                        theme={rest.theme} // not necessary, only needed for tests
                        key={value}
                    >
                        <Text
                            theme={rest.theme} // not necessary, only needed for tests
                            htmlTag={textHtmlTagOptions.span}
                            textSize={fontSizeOptions.xxs}
                            colorWab={greyOptions.grey40}
                        >
                            {adjustDecimalNumber(value)}&nbsp;{unit}
                        </Text>
                    </YAxisElementBase>
                ) : (
                    <div key={value}></div>
                ),
            )}
        </YAxisBase>
    );
};

YAxis.propTypes = {
    maxValue: PropTypes.number.isRequired,
    values: PropTypes.arrayOf(PropTypes.number),
    isRelative: PropTypes.bool,
    hasMin: PropTypes.bool,
    hasMax: PropTypes.bool,
    unit: PropTypes.string,
    blockHeight: PropTypes.oneOf(Object.values(inputWidthOptions)),
};

YAxis.defaultProps = {
    values: [],
    isRelative: false,
    hasMin: true,
    hasMax: true,
    unit: null,
    blockHeight: inputWidthDefault,
};

export default YAxis;
