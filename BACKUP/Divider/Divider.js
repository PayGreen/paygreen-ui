import React from 'react';
import PropTypes from 'prop-types';
import {
    decorationOptions,
    decorationDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
} from '../../shared/constants';
import { DividerBase } from './style';
import { shape } from './style/shape';

const Divider = props => {
    const hasText = props.text && props.text.length;

    return (
        <DividerBase {...props} hasText={hasText}>
            {props.waveStyle !== decorationOptions.none ? shape : null}
            {hasText ? <span>{props.text}</span> : null}
            {props.waveStyle !== decorationOptions.none ? shape : null}
        </DividerBase>
    );
};

Divider.propTypes = {
    waveStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    text: PropTypes.string,
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Divider.defaultProps = {
    waveStyle: decorationDefault,
    colorTheme: colorThemeDefault,
    marginTop: spaceOptions.md,
    marginBottom: spaceOptions.md,
};

export default Divider;
