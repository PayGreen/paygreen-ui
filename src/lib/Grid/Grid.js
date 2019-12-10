import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    displayOptions,
    displayDefault,
    columnOptions,
    columnDefault,
    flexDirectionOptions,
    flexDirectionDefault,
    flexWrapOptions,
    flexWrapDefault,
    justifyContentOptions,
    justifyContentDefault,
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    blockSpaceOptions
} from '../../shared/constants';
import { GridBase } from './style';

class Grid extends PureComponent {
    render() {
        return <GridBase
            {...this.props}
        >
            {this.props.children}
        </GridBase>;
    }
}

Grid.propTypes = {
    display: PropTypes.oneOf(Object.values(displayOptions)),
    columns: PropTypes.oneOf(Object.values(columnOptions)),
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    gap: PropTypes.oneOf(Object.values(spaceOptions)),
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenShift: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    negativeShift: PropTypes.bool,
    reverseShift: PropTypes.bool,
};

Grid.defaultProps = {
    display: displayDefault,
    columns: columnDefault,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentDefault,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    gap: spaceOptions.xs,
    padding: spaceOptions.xs,
    childrenShift: blockSpaceOptions.none,
    negativeShift: false,
    reverseShift: false,
};

export default Grid;