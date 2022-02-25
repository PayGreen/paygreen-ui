import React from 'react';
import PropTypes from 'prop-types';
import {
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
} from '../../shared/constants';
import Message from '../Message/Message';
import Text from '../Text/Text';
import { HistogramBarBase } from './style';

const HistogramBar = ({ value, maxValue, legend, ...rest }) => {
    if (maxValue <= 0 || value < 0) return null; // avoid errors

    const height = value > maxValue ? 100 : (value / maxValue) * 100;

    return (
        <HistogramBarBase
            {...rest}
            heightValue={height}
            isDisabled={value === 0}
            messagePosition={height > 50 ? 'bottom' : 'top'}
        >
            {legend ? (
                <Message
                    theme={rest.theme} // not necessary, only needed for tests
                    colorPallet={colorPalletDefault}
                    colorTheme={rest.colorTheme}
                    blockWidth={inputWidthOptions.xs}
                    fieldSize={buttonSizeOptions.sm}
                    arrowBlock={
                        height > 50
                            ? blockPositionOptions.topCenter
                            : blockPositionOptions.bottomCenter
                    }
                >
                    <Text
                        theme={rest.theme} // not necessary, only needed for tests
                        textSize={fontSizeOptions.xxs}
                        align={alignItemsOptions.center}
                    >
                        {legend}
                    </Text>
                </Message>
            ) : null}

            <div className="bar"></div>
        </HistogramBarBase>
    );
};

HistogramBar.propTypes = {
    value: PropTypes.number.isRequired,
    maxValue: PropTypes.number,
    legend: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    blockWidth: PropTypes.oneOf(Object.values(inputWidthOptions)),
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
};

HistogramBar.defaultProps = {
    maxValue: 100,
    legend: null,
    colorTheme: colorThemeDefault,
    blockWidth: inputWidthDefault,
    paddingLateral: spaceOptions.sm,
};

export default HistogramBar;
