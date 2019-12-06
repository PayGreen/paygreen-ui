import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { TableBase } from './style';

class Table extends PureComponent {
    render() {
        return <TableBase
            {...this.props}
        >
            {this.props.children}
        </TableBase>;
    }
}

Table.propTypes = {

};

Table.defaultProps = {

};

export default Table;