import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
    fontSizeOptions,
    greyOptions,
    textHtmlTagOptions,
} from '../../shared/constants';
import { TextBase } from '../Text/style';
import Text from '../Text/Text';

const YaxisValueBase = styled.div`
    position: absolute;
    right: 0;
    bottom: ${props => props.heightValue}%;
    margin-bottom: -${props => props.theme.line};
    display: flex;
    align-items: flex-end;

    &::after {
        content: '';
        height: ${props => props.theme.line};
        width: ${props => props.theme.space.sm};
        background-color: ${props => props.theme.wab.grey20};
    }

    ${TextBase} {
        margin-right: ${props => props.theme.space.xs};
        transform: translateY(40%);
    }
`;

const HistogramYaxisValue = ({ value, unit, maxValue, ...rest }) => {
    return (
        <YaxisValueBase {...rest} heightValue={(value / maxValue) * 100}>
            <Text
                theme={rest.theme} // not necessary, only needed for tests
                htmlTag={textHtmlTagOptions.span}
                textSize={fontSizeOptions.xxs}
                colorWab={greyOptions.grey40}
            >
                {Math.round(value)}
                {unit}
            </Text>
        </YaxisValueBase>
    );
};

HistogramYaxisValue.propTypes = {
    maxValue: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    unit: PropTypes.string,
};

HistogramYaxisValue.defaultProps = {
    unit: null,
};

export default HistogramYaxisValue;
