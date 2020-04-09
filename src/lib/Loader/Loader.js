import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { LoaderBase } from './style';

const Loader = props => {
    return (
        <LoaderBase {...props}>
            <span></span>
        </LoaderBase>
    );
};

Loader.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    loaderSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    isActive: PropTypes.bool,
    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Loader.defaultProps = {
    colorTheme: colorThemeDefault,
    loaderSize: iconSizeDefault,
    isActive: true,
    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,
};

export default Loader;
