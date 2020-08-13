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
    spaceDefault,
} from '../../shared/constants';
import { InternalGridBase } from './style';

const InternalGrid = props => {
    return <InternalGridBase {...props}>{props.children}</InternalGridBase>;
};

InternalGrid.propTypes = {
    displayType: PropTypes.oneOf([displayOptions.flex, displayOptions.grid]),
    gridTemplateColumns: PropTypes.string,
    gridTemplateRows: PropTypes.string,
    gridGap: PropTypes.oneOf(Object.values(spaceOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    childrenFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    childrenMarginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

InternalGrid.defaultProps = {
    displayType: displayOptions.flex,
    gridTemplateColumns: 'none',
    gridTemplateRows: 'none',
    gridGap: spaceOptions.none,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',

    childrenMarginLateral: spaceDefault,
    childrenMarginTop: spaceDefault,
    childrenMarginBottom: spaceDefault,
};

export default InternalGrid;
