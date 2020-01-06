import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { InternalGridBase } from './style';

class InternalGrid extends PureComponent {
    render() {
        return <InternalGridBase
            {...this.props}
        >
            {this.props.children}
        </InternalGridBase>;
    }
}

InternalGrid.propTypes = {

};

InternalGrid.defaultProps = {

};

export default InternalGrid;