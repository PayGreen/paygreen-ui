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
    justifyItemsOptions,
    justifyItemsDefault,
    alignItemsOptions,
    alignItemsDefault,
    blockSpaceOptions,
    spaceOptions
} from '../../shared/constants';
import { GridBase } from './style';

class Grid extends PureComponent {
    render() {
        return <GridBase
            {...this.props}
        >
            {this.props.displayType === displayOptions.column ?
                React.Children.map(this.props.children, (child, index) =>
                    <div key={index}>
                        {child}
                    </div>
                ) : this.props.children
            }
        </GridBase>;
    }
}

Grid.propTypes = {
    displayType: PropTypes.oneOf(Object.values(displayOptions)),
    columns: PropTypes.oneOf(Object.values(columnOptions)),
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    flex1: PropTypes.bool,
    childrenShift: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    negativeShift: PropTypes.bool,
    reverseShift: PropTypes.bool,
    blockPadding: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMargin: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginBig: PropTypes.oneOf(Object.values(spaceOptions)),
};

Grid.defaultProps = {
    displayType: displayDefault,
    columns: columnDefault,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    flex1: false,
    childrenShift: blockSpaceOptions.none,
    negativeShift: false,
    reverseShift: false,
    blockPadding: spaceOptions.md,
    childrenMargin: spaceOptions.md,
    childrenMarginBig: spaceOptions.lg
};

export default Grid;