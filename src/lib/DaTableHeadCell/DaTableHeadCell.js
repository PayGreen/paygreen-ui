import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { DaTableHeadCellBase } from './style';

const DaTableHeadCell = (props) => {
    return <DaTableHeadCellBase
        {...props}
        isEmpty={!(props.children && props.children.length)}
    >
        {props.children}
    </DaTableHeadCellBase>;
};

DaTableHeadCell.propTypes = {
    
};

DaTableHeadCell.defaultProps = {

};

export default DaTableHeadCell;
