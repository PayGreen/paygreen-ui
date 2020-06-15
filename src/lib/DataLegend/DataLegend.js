import React from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    spaceOptions,
    spaceDefault,
    textHtmlTagOptions,
} from '../../shared/constants';
import { DataLegendBase } from './style';
import Text from '../Text/Text';

const DataLegend = props => {
    return (
        <DataLegendBase {...props}>
            <Text {...props}>
                {props.legendValue}
                <Text {...props} htmlTag={textHtmlTagOptions.span}>
                    {props.legendUnit}&nbsp;
                </Text>
            </Text>

            {props.children}
        </DataLegendBase>
    );
};

DataLegend.propTypes = {
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    legendValue: PropTypes.number,
    legendUnit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),

    align: PropTypes.oneOf(Object.values(alignOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

DataLegend.defaultProps = {
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,
    legendValue: 0,
    legendUnit: '%',
    textSize: fontSizeDefault,
    flexDirection: flexDirectionDefault,

    align: alignDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default DataLegend;
