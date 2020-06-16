import React from 'react';
import PropTypes from 'prop-types';
import {
    flexDirectionOptions,
    flexDirectionDefault,
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
                    {props.legendUnit}
                </Text>
            </Text>
            {props.children}
        </DataLegendBase>
    );
};

DataLegend.propTypes = {
    dataColor: PropTypes.string,
    legendValue: PropTypes.number,
    legendUnit: PropTypes.string,
    textSize: PropTypes.oneOf(Object.values(fontSizeOptions)),
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    align: PropTypes.oneOf(Object.values(alignOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

DataLegend.defaultProps = {
    legendValue: 0,
    legendUnit: '%',
    textSize: fontSizeDefault,
    flexDirection: flexDirectionDefault,
    align: alignDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default DataLegend;
