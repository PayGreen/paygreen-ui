import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    displayOptions,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { InternalGridBase } from './style';

const InternalGrid = (props) => {
    return <InternalGridBase
        {...props}
    >
        {props.children}
    </InternalGridBase>;
};

InternalGrid.propTypes = {
    display: PropTypes.oneOf([displayOptions.flex, displayOptions.grid]),
    gridColumns: PropTypes.string,
    gridRows: PropTypes.string,
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    flex1: PropTypes.bool,

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

InternalGrid.defaultProps = {
    display: displayOptions.flex,
    gridColumns: '',
    gridRows: '',
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    flex1: false,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default InternalGrid;