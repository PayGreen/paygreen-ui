import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    iconSizeDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { IconBase } from './style';

class IconWrapper extends PureComponent {
    render() {
        const {
            children,
            ...rest
        } = this.props;

        const Children = React.Children.map(children, child => {
            if (typeof child == 'object') {
                return React.cloneElement(child);
            }
        });

        return <IconBase
            as={this.props.htmlTag}
            {...rest}
            className="icon"
        >
            {Children}
        </IconBase>;
    }
}

IconWrapper.propTypes = {
    htmlTag: PropTypes.oneOf(['span', 'button']),
    colorPallet: PropTypes.oneOf(Object.values(colorPalletOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),
    colorStatus: PropTypes.oneOf(Object.values(formStatusOptions)),
    iconSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    background: PropTypes.bool,
    shadow: PropTypes.bool,
    active: PropTypes.bool,
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    centered: PropTypes.bool,
};

IconWrapper.defaultProps = {
    htmlTag: 'span',
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyDefault,
    colorStatus: formStatusDefault,
    iconSize: iconSizeDefault,
    background: false,
    shadow: false,
    active: false,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
    centered: false,
};

export default IconWrapper;