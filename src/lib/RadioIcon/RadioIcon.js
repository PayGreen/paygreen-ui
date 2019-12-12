import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { RadioIconBase } from './style';

class RadioIcon extends PureComponent {
    render() {
        return <RadioIconBase
            {...this.props}
        >
            {this.props.children}
        </RadioIconBase>;
    }
}

RadioIcon.propTypes = {

};

RadioIcon.defaultProps = {

};

export default RadioIcon;