import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    colorOptions,
    colorDefault,
    buttonSizeOptions,
    buttonSizeDefault,
    buttonTemplateOptions,
    buttonTemplateDefault,
    colorTypeOptions,
    colorTypeDefault
} from '../../shared/constants';
import {
    ButtonFill,
    ButtonLine,
    ButtonFillReverse,
    ButtonLineReverse,
    ButtonFillDisabled,
    ButtonLineDisabled
} from './style';

class Button extends PureComponent {
    render() {
        if (this.props.disabled) {
            if (this.props.template === buttonTemplateOptions.line) {
                return <ButtonLineDisabled {...this.props}>{this.props.children}</ButtonLineDisabled>;
            }
            
            return <ButtonFillDisabled {...this.props}>{this.props.children}</ButtonFillDisabled>;
        } else if (this.props.colorType === colorTypeOptions.reverse) {
            if (this.props.template === buttonTemplateOptions.line) {
                return <ButtonLineReverse {...this.props}>{this.props.children}</ButtonLineReverse>;
            }
            
            return <ButtonFillReverse {...this.props}>{this.props.children}</ButtonFillReverse>;
        } else {
            // Case of this.props.colorType === colorTypeDefault
            if (this.props.template === buttonTemplateOptions.line) {
                return <ButtonLine {...this.props}>{this.props.children}</ButtonLine>;
            }
            
            return <ButtonFill {...this.props}>{this.props.children}</ButtonFill>;
        }
    }
}

Button.propTypes = {
    template: PropTypes.oneOf(Object.values(buttonTemplateOptions)),
    colorType: PropTypes.oneOf(Object.values(colorTypeOptions)),
    color: PropTypes.oneOf(Object.values(colorOptions)),
    size: PropTypes.oneOf(Object.values(buttonSizeOptions)),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    template: buttonTemplateDefault,
    colorType: colorTypeDefault,
    color: colorDefault,
    size: buttonSizeDefault,
    disabled: false,
};

export default Button;