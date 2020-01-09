import React from 'react';
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
    displayType: PropTypes.oneOf([displayOptions.flex, displayOptions.grid]),
    gridTemplateColumns: PropTypes.string,
    gridTemplateRows: PropTypes.string,
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    childrenFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

InternalGrid.defaultProps = {
    displayType: displayOptions.flex,
    gridTemplateColumns: 'none',
    gridTemplateRows: 'none',
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default InternalGrid;