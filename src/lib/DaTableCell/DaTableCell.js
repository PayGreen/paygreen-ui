import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DaTableCellBase } from './style';

const DaTableCell = (props) => {
    return <DaTableCellBase
        {...props}
    >
        {props.children}
    </DaTableCellBase>;
};

DaTableCell.propTypes = {

};

DaTableCell.defaultProps = {

};

export default DaTableCell;