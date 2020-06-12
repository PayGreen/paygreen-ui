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
        blockWidth,
        dataArray,
        hasDatabarLegend,
        minValue,
        maxValue,
        unit,
        withBackground,
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
                    colorPallet={props.colorPallet}
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
                    {unit.length > 0 && unit !== '%' ? dataArray[0].currentValue : calcPercent(dataArray[0].currentValue)}{unit.length > 0 ? unit : '%'}{dataArray[0].legend}
                </Title>
            ) : null}
        </DatabarBase>
    );
};

Databar.propTypes = {
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
    withBackground: PropTypes.bool,
    hasDatabarLegend: PropTypes.bool,
    minValue: PropTypes.number,
    maxValue: PropTypes.number,
    unit: PropTypes.string,
    };

Databar.defaultProps = {
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

export default Databar;
