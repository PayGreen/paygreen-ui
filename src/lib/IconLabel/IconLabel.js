import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { IconLabelBase } from './style';

class IconLabel extends PureComponent {
    render() {
        return <IconLabelBase
            {...this.props}
        >
            {this.props.children}
        </IconLabelBase>;
    }
}

IconLabel.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
};

IconLabel.defaultProps = {
    colorTheme: colorThemeDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
};

export default IconLabel;