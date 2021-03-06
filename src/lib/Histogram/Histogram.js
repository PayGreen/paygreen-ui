import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    spaceDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../shared/constants';
import { HistogramBase } from './style';
import YAxis from './YAxis/YAxis';

const Histogram = ({
    children,
    maxValue,
    hasYaxisMin,
    hasYaxisMax,
    yaxisMaxValue,
    yaxisValues,
    yaxisUnit,
    isRelativeYaxis,
    ...rest
}) => {
    let max = 0;

    if (maxValue > 0) {
        max = maxValue;
    } else {
        React.Children.map(children, child => {
            if (typeof child === 'object' && child.props.value > max) {
                max = child.props.value;
            }
        });
    }

    return (
        <HistogramBase {...rest}>
            <YAxis
                theme={rest.theme} // not necessary, only needed for tests
                maxValue={yaxisMaxValue || max}
                values={yaxisValues}
                hasMin={hasYaxisMin}
                hasMax={hasYaxisMax}
                isRelative={isRelativeYaxis}
                unit={yaxisUnit}
                blockHeight={rest.blockHeight}
            />

            <div className="container">
                <div className="bars">
                    {React.Children.map(children, (child, index) => {
                        if (!child) {
                            return null;
                        }

                        return React.cloneElement(child, {
                            key: index,
                            maxValue: max,
                        });
                    })}
                </div>
            </div>
        </HistogramBase>
    );
};

Histogram.propTypes = {
    isRelativeYaxis: PropTypes.bool,
    hasYaxisMin: PropTypes.bool,
    hasYaxisMax: PropTypes.bool,
    yaxisValues: PropTypes.arrayOf(PropTypes.number),
    yaxisUnit: PropTypes.string,
    yaxisMaxValue: PropTypes.number,
    maxValue: PropTypes.number,
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    blockHeight: PropTypes.oneOf(Object.values(inputWidthOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Histogram.defaultProps = {
    isRelativeYaxis: false,
    hasYaxisMin: true,
    hasYaxisMax: true,
    yaxisValues: [],
    yaxisUnit: null,
    yaxisMaxValue: null,
    maxValue: 0,
    blockWidth: spaceOptions.md,
    blockHeight: inputWidthDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default Histogram;
