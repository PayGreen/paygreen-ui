import React from 'react';
import PropTypes from 'prop-types';
import {
    iconHtmlTagOptions,
    iconSizeOptions,
    colorPalletOptions,
    formStatusDefault,
    spaceOptions,
} from '../../shared/constants';
import { DaTableHeadCellBase } from './style';

const DaTableHeadCell = (props) => {
    const iconProps = {
        htmlTag: iconHtmlTagOptions.button,
        iconSize: iconSizeOptions.xxs,
        hasBackground: true,
        hasHover: true,
        marginLeft: spaceOptions.xs,
        colorPallet: colorPalletOptions.status,
        colorStatus: formStatusDefault,
    };
    let sortIcon = null;
    let groupIcon = null;

    if (props.sortIcon) {
        sortIcon = React.cloneElement(props.sortIcon, iconProps);
    }

    if (props.groupIcon) {
        groupIcon = React.cloneElement(props.groupIcon, iconProps);
    }

    return <DaTableHeadCellBase
        {...props}
    >
        {props.children}

        {sortIcon ? sortIcon : null}
        {groupIcon ? groupIcon : null}
    </DaTableHeadCellBase>;
};

DaTableHeadCell.propTypes = {
    isCheckbox: PropTypes.bool,
    sortIcon: PropTypes.element,
    groupIcon: PropTypes.element,
};

DaTableHeadCell.defaultProps = {
    isCheckbox: false,
    sortIcon: null,
    groupIcon: null,
};

export default DaTableHeadCell;
