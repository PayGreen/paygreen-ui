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

const DaTableHeadCell = ({ children, label, ...rest }) => {
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

    if (rest.sortIcon) {
        sortIcon = React.cloneElement(rest.sortIcon, iconProps);
    }

    if (rest.groupIcon) {
        groupIcon = React.cloneElement(rest.groupIcon, iconProps);
    }

    return (
        <DaTableHeadCellBase {...rest} hasControls={sortIcon || groupIcon}>
            {label ? <span>{label}</span> : null}
            {sortIcon ? <span className="icon-child">{sortIcon}</span> : null}
            {groupIcon ? <span className="icon-child">{groupIcon}</span> : null}

            {children ? <span className="cell-child">{children}</span> : null}
        </DaTableHeadCellBase>
    );
};

DaTableHeadCell.propTypes = {
    isCheckbox: PropTypes.bool,
    sortIcon: PropTypes.element,
    groupIcon: PropTypes.element,
    label: PropTypes.string,
};

DaTableHeadCell.defaultProps = {
    isCheckbox: false,
    sortIcon: null,
    groupIcon: null,
};

export default DaTableHeadCell;
