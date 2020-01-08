import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
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
    columnNumber: PropTypes.number,
    flexDirection: PropTypes.oneOf(Object.values(flexDirectionOptions)),
    flexWrap: PropTypes.oneOf(Object.values(flexWrapOptions)),
    justifyContent: PropTypes.oneOf(Object.values(justifyContentOptions)),
    justifyItems: PropTypes.oneOf(Object.values(justifyItemsOptions)),
    alignItems: PropTypes.oneOf(Object.values(alignItemsOptions)),
    childrenFlex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

    childrenShiftSize: PropTypes.oneOf(Object.values(spaceOptions)),
    isNegativeShift: PropTypes.bool,
    isReverseShift: PropTypes.bool,

    blockPadding: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMargin: PropTypes.oneOf(Object.values(spaceOptions)),
    childrenMarginBig: PropTypes.oneOf(Object.values(spaceOptions)),
};

Grid.defaultProps = {
    displayType: displayDefault,
    columnNumber: 2,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    childrenFlex: 'initial',
    
    childrenShiftSize: spaceOptions.none,
    isNegativeShift: false,
    isReverseShift: false,

    blockPadding: spaceOptions.md,
    childrenMargin: spaceOptions.md,
    childrenMarginBig: spaceOptions.lg
};

export default Grid;