import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DividerBase } from './style';

class Divider extends PureComponent {
    render() {
        return <DividerBase
            {...this.props}
        >
            {this.props.children}
        </DividerBase>;
    }
}

Divider.propTypes = {

};

Divider.defaultProps = {

};

export default Divider;