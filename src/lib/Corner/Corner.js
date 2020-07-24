import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { CornerBase } from './style';

const Corner = (props) => {
    return <CornerBase
        {...props}
    >
        {props.children}
    </CornerBase>;
};

Corner.propTypes = {

};

Corner.defaultProps = {

};

export default Corner;
