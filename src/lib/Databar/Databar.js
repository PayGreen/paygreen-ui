import React from 'react';
import PropTypes from 'prop-types';
import {
    blockWidthOptions,
    blockWidthDefault,
    greyOptions,
    fontSizeOptions,
    spaceOptions,
} from '../../shared/constants';
import { DatabarBase, Bar, BarSection } from './style';
import Title from '../Title/Title';

const Databar = props => {
    const {
        hasDatabarLegend,
        withBackground,
        blockWidth,
        dataArray,
        minValue,
        maxValue,
        ...rest
    } = props;

    const calcPercent = value => {
        return ((value - minValue) * 100) / (maxValue - minValue);
    };

    return (
        <DatabarBase
            theme={props.theme} // not necessary, only needed for tests
            blockWidth={blockWidth}
            {...rest}
        >
            <Bar
                theme={props.theme} // not necessary, only needed for tests
                withBackground={withBackground}
                barType={dataArray.length === 1 ? 'mono' : 'multi'}
            >
                {dataArray.map((data, index) => (
                    <BarSection
                        theme={props.theme} // not necessary, only needed for tests
                        key={index}
                        dataWidth={calcPercent(data.currentValue)}
                        dataColor={data.color}
                    />
                ))}
            </Bar>

            {dataArray.length === 1 && hasDatabarLegend ? (
                <Title
                    {...props}
                    colorWab={greyOptions.grey30}
                    textSize={fontSizeOptions.md}
                    marginTop={spaceOptions.xs}
                >
                    {dataArray[0].legend}
                </Title>
            ) : null}
        </DatabarBase>
    );
};

Databar.propTypes = {
    hasDatabarLegend: PropTypes.bool,
    blockWidth: PropTypes.oneOf(Object.values(blockWidthOptions)),
    withBackground: PropTypes.bool,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    unit: PropTypes.string,
    dataArray: PropTypes.arrayOf(
        PropTypes.shape({
            currentValue: PropTypes.number.isRequired,
            legend: PropTypes.string.isRequired,
            color: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

Databar.defaultProps = {
    hasDatabarLegend: false,
    blockWidth: blockWidthDefault,
    withBackground: true,
    minValue: 0,
    maxValue: 100,
    unit: '%',
};

export default Databar;
