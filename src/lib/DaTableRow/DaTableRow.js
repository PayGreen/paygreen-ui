import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DaTableRowBase } from './style';

const DaTableRow = (props) => {
    return <DaTableRowBase
        {...props}
    >
        {props.children}
    </DaTableRowBase>;
};

DaTableRow.propTypes = {

};

DaTableRow.defaultProps = {

};

export default DaTableRow;