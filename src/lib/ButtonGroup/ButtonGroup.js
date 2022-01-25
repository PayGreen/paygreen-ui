import React from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { ButtonGroupBase } from './style';

const ButtonGroup = props => {
    return <ButtonGroupBase {...props}>{props.children}</ButtonGroupBase>;
};

ButtonGroup.propTypes = {
    align: PropTypes.oneOf(Object.values(alignOptions)),
    hasResetedMargins: PropTypes.bool,
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ButtonGroup.defaultProps = {
    align: alignOptions.center,
    hasResetedMargins: true,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default ButtonGroup;
