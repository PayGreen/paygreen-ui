import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DaTableBase } from './style';

const DaTable = (props) => {
    return <DaTableBase
        {...props}
    >
        {props.children}
    </DaTableBase>;
};

DaTable.propTypes = {

};

DaTable.defaultProps = {

};

export default DaTable;