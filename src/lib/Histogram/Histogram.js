import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    spaceDefault,
    inputWidthOptions,
    inputWidthDefault,
} from '../../shared/constants';
import { HistogramBase } from './style';
import HistogramYaxisValue from './HistogramYaxisValue';

const Histogram = ({
    children,
    maxValue,
    hasYaxisMin,
    hasYaxisMax,
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

    let allYaxisValues = yaxisValues.map(value => {
        if (isRelativeYaxis) {
            return (value * max) / 100;
        } else if (value > max) {
            return max;
        } else {
            return value;
        }
    });

    if (hasYaxisMin) {
        allYaxisValues.push(0);
    }

    if (hasYaxisMax) {
        allYaxisValues.push(max);
    }

    allYaxisValues = Array.from(new Set(allYaxisValues));

    return (
        <HistogramBase {...rest} hasYaxis={allYaxisValues.length > 0}>
            {allYaxisValues.length ? (
                <div className="y-axis">
                    {allYaxisValues.map(value => (
                        <HistogramYaxisValue
                            theme={rest.theme} // not necessary, only needed for tests
                            key={value}
                            value={value}
                            maxValue={max}
                            unit={yaxisUnit}
                        />
                    ))}
                </div>
            ) : null}

            {React.Children.map(children, (child, index) => {
                if (!child) {
                    return null;
                }

                return React.cloneElement(child, {
                    key: index,
                    maxValue: max,
                    blockHeight: rest.blockHeight,
                });
            })}
        </HistogramBase>
    );
};

Histogram.propTypes = {
    isRelativeYaxis: PropTypes.bool,
    hasYaxisMin: PropTypes.bool,
    hasYaxisMax: PropTypes.bool,
    yaxisValues: PropTypes.arrayOf(PropTypes.number),
    yaxisUnit: PropTypes.string,
    maxValue: PropTypes.number,
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
    maxValue: 0,
    blockHeight: inputWidthDefault,
    marginTop: spaceDefault,
    marginBottom: spaceOptions.md,
};

export default Histogram;
