import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DaTableHeadBase } from './style';

const DaTableHead = (props) => {
    return <DaTableHeadBase
        {...props}
    >
        {props.children}
    </DaTableHeadBase>;
};

DaTableHead.propTypes = {

};

DaTableHead.defaultProps = {

};

export default DaTableHead;