import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    arrowBlockOptions,
    fontSizeOptions,
    inputWidthOptions,
    buttonSizeOptions,
    alignItemsOptions,
    textHtmlTagOptions,
} from '../../shared/constants';
import Message from '../Message/Message';
import Text from '../Text/Text';
import { HistogramBarBase } from './style';

const maxValueDefault = 100;

const HistogramBar = ({ value, maxValue, label, legend, ...rest }) => {
    const max = maxValue > 0 ? maxValue : maxValueDefault; // avoid error if maxValue = 0
    let height = (value / max) * 100; // get bar height percent value
    height = height > max ? max : height;

    return (
        <HistogramBarBase {...rest} heightValue={height}>
            {legend ? (
                <Message
                    colorType={colorTypeOptions.reverse}
                    colorPallet={colorPalletDefault}
                    colorTheme={rest.colorTheme}
                    arrowBlock={arrowBlockOptions.bottomCenter}
                    blockWidth={inputWidthOptions.xs}
                    fieldSize={buttonSizeOptions.sm}
                >
                    <Text
                        textSize={fontSizeOptions.xxs}
                        align={alignItemsOptions.center}
                    >
                        {legend
                            .replace('{value}', value)
                            .replace('{label}', label)}
                    </Text>
                </Message>
            ) : null}

            <div className="bar"></div>

            <Text
                htmlTag={textHtmlTagOptions.span}
                textSize={fontSizeOptions.xs}
                align={alignItemsOptions.center}
            >
                {label}
            </Text>
        </HistogramBarBase>
    );
};

HistogramBar.propTypes = {
    blockHeight: PropTypes.oneOf(Object.values(spaceOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isLabelVisible: PropTypes.bool,
    label: PropTypes.string,
    legend: PropTypes.string,
    maxValue: PropTypes.number,
    value: PropTypes.number,
};

HistogramBar.defaultProps = {
    blockHeight: spaceOptions.sm,
    blockWidth: inputWidthOptions.xs,
    paddingLateral: spaceOptions.sm,
    colorTheme: colorThemeDefault,
    isLabelVisible: true,
    label: null,
    legend: null,
    maxValue: maxValueDefault,
    value: 0,
};

export default HistogramBar;
