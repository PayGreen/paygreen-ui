import React from 'react';
import PropTypes from 'prop-types';
import {
    alignOptions,
    displayOptions,
    displayDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
} from '../../shared/constants';
import { GridBase } from './style';

const Grid = props => {
    return (
        <GridBase {...props}>
            {props.displayType === displayOptions.column
                ? React.Children.map(props.children, (child, index) =>
                      child ? <div key={index}>{child}</div> : null,
                  )
                : props.children}
        </GridBase>
    );
};

Grid.propTypes = {
    align: PropTypes.oneOf(Object.values(alignOptions)),
    blockPadding: PropTypes.oneOf(Object.values(spaceOptions)),

    displayType: PropTypes.oneOf(Object.values(displayOptions)),
    columnNumber: PropTypes.number,
    gridTemplateColumns: PropTypes.string,
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    childrenFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),

    gridGap: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMargin: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginBig: PropTypes.oneOf(Object.values(spaceOptions)),

    childrenShiftSize: PropTypes.oneOf(Object.values(spaceOptions)),
    isNegativeShift: PropTypes.bool,
    isReverseShift: PropTypes.bool,
};

Grid.defaultProps = {
    align: alignOptions.center,
    blockPadding: spaceOptions.md,

    displayType: displayDefault,
    columnNumber: 2,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    childrenFlex: 'initial',
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    
    gridGap: spaceOptions.none,
    childrenMargin: spaceOptions.md,
    childrenMarginBig: spaceOptions.lg,

    childrenShiftSize: spaceOptions.none,
    isNegativeShift: false,
    isReverseShift: false,
};

export default Grid;
