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
        unit,
        ...rest
    } = props;

    const calcPercent = (value) => {
        return Math.round((((value - minValue) * 100) / (maxValue - minValue)) * 10) / 10;
    };

    return (
        <DatabarBase {...rest} blockWidth={blockWidth}>
            <Bar
                {...rest}
                withBackground={withBackground}
                barType={dataArray.length === 1 ? 'mono' : 'multi'}
            >
                {dataArray.map((data, index) => (
                    <BarSection
                        {...rest}
                        key={index}
                        dataWidth= {calcPercent(data.currentValue)}
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
                    {dataArray[0].legend}{unit.length > 0 && unit !== '%' ? dataArray[0].currentValue : calcPercent(dataArray[0].currentValue)}{unit.length > 0 ? unit : '%'}
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
            legend: PropTypes.string,
            color: PropTypes.string.isRequired,
        }),
    ).isRequired,
};

Databar.defaultProps = {
    hasDatabarLegend: false,
    blockWidth: blockWidthDefault,
    withBackground: false,
    minValue: 0,
    maxValue: 100,
    unit: '%',
};

export default Databar;
