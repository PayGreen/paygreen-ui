import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault
} from '../../shared/constants';
import { LoaderBase } from './style';

const Loader = (props) => {
    return <LoaderBase
        {...props}
    >
        loader
    </LoaderBase>;
};

Loader.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    isActive: PropTypes.bool
};

Loader.defaultProps = {
    colorTheme: colorThemeDefault,
    isActive: true
};

export default Loader;