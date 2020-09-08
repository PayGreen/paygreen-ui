import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import { DaTableBase } from './style';

const DaTable = props => {
    return <DaTableBase {...props}>{props.children}</DaTableBase>;
};

DaTable.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

DaTable.defaultProps = {
    blockWidth: spaceOptions.md,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default DaTable;
