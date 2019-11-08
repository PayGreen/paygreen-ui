import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    buttonTemplateDefault,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import { ButtonBase } from './style';

class Button extends PureComponent {
    render() {
        return <ButtonBase
            theme={this.props.theme} // not necessary, only needed for tests
            template={this.props.template}
            colorType={this.props.colorType}
            colorTheme={this.props.colorTheme}
            buttonSize={this.props.buttonSize}
            params={this.props.params}
        >
            {this.props.children}
        </ButtonBase>;
    }
}

Button.propTypes = {
    template: PropTypes.oneOf(Object.values(buttonTemplateOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    buttonSize: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    params: PropTypes.shape({
        disabled: PropTypes.bool,
    }),
};

Button.defaultProps = {
    template: buttonTemplateDefault,
    colorType: colorTypeDefault,
    colorTheme: colorThemeDefault,
    buttonSize: buttonSizeDefault,
    params: {
        disabled: false,
    },
};

export default Button;