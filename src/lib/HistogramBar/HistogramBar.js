import React from 'react';
import PropTypes from 'prop-types';
import {
    colorTypeOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    blockPositionOptions,
    fontSizeOptions,
    inputWidthOptions,
    inputWidthDefault,
    buttonSizeOptions,
    alignItemsOptions,
    textHtmlTagOptions,
} from '../../shared/constants';
import Message from '../Message/Message';
import Text from '../Text/Text';
import { HistogramBarBase } from './style';

const HistogramBar = ({ value, maxValue, label, legend, ...rest }) => {
    if (maxValue <= 0 || value < 0) return null; // avoid errors

    const height = value > maxValue ? 100 : (value / maxValue) * 100;

    return (
        <HistogramBarBase
            {...rest}
            heightValue={height}
            isDisabled={value === 0}
        >
            {legend ? (
                <Message
                    theme={rest.theme} // not necessary, only needed for tests
                    colorType={colorTypeOptions.reverse}
                    colorPallet={colorPalletDefault}
                    colorTheme={rest.colorTheme}
                    arrowBlock={blockPositionOptions.bottomCenter}
                    blockWidth={inputWidthOptions.xs}
                    fieldSize={buttonSizeOptions.sm}
                >
                    <Text
                        theme={rest.theme} // not necessary, only needed for tests
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
                theme={rest.theme} // not necessary, only needed for tests
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
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number,
    isLabelVisible: PropTypes.bool,
    label: PropTypes.string,
    legend: PropTypes.string,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockHeight: PropTypes.oneOf(Object.values(inputWidthOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
};

HistogramBar.defaultProps = {
    maxValue: 100,
    isLabelVisible: true,
    label: null,
    legend: null,
    colorTheme: colorThemeDefault,
    blockHeight: inputWidthDefault,
    blockWidth: inputWidthDefault,
    paddingLateral: spaceOptions.sm,
};

export default HistogramBar;
