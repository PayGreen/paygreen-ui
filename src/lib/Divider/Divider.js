import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    waveOptions,
    waveDefault,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { DividerBase } from './style';
import { shape } from './style/shape';

class Divider extends PureComponent {
    render() {
        const hasText = this.props.text !== undefined
                        && !isNaN(this.props.text.length)
                        && this.props.text.length > 0;

        return <DividerBase
            {...this.props}
            hasText={hasText}
        >
            {this.props.waveStyle !== waveOptions.none ? shape : null}
                {hasText ?
                    <span>
                        {this.props.text}
                    </span>
                    : null
                }
            {this.props.waveStyle !== waveOptions.none ? shape : null}
        </DividerBase>;
    }
}

Divider.propTypes = {
    waveStyle: PropTypes.oneOf(Object.values(waveOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    text: PropTypes.string
};

Divider.defaultProps = {
    waveStyle: waveDefault,
    colorTheme: colorThemeDefault,
};

export default Divider;