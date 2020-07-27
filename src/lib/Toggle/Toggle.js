import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { ToggleBase } from './style';

const Toggle = (props) => {
    return <ToggleBase
        {...props}
    >
        {props.children}
    </ToggleBase>;
};

Toggle.propTypes = {

};

Toggle.defaultProps = {

};

export default Toggle;
