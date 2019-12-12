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
    blockSpaceOptions
} from '../../shared/constants';
import { GridBase } from './style';

class Grid extends PureComponent {
    render() {
        const {
            display,
            ...rest
        } = this.props;

        return <GridBase
            displayType={display}
            {...rest}
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
    childrenShift: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    negativeShift: PropTypes.bool,
    reverseShift: PropTypes.bool,
};

Grid.defaultProps = {
    display: displayDefault,
    columns: columnDefault,
    flexDirection: flexDirectionDefault,
    flexWrap: flexWrapDefault,
    justifyContent: justifyContentOptions.spaceBetween,
    justifyItems: justifyItemsDefault,
    alignItems: alignItemsDefault,
    childrenShift: blockSpaceOptions.none,
    negativeShift: false,
    reverseShift: false,
};

export default Grid;