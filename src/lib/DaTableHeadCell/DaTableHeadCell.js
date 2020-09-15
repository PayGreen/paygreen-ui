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
        <DaTableHeadCellBase
            {...rest}
            hasControls={sortIcon || groupIcon}
            className={!children && !sortIcon ? 'hideOnSmallScreen' : null}
        >
            <div className="head-child">
                {label ? <span className="label-child">{label}</span> : null}

                {sortIcon ? (
                    <span className="icon-child">{sortIcon}</span>
                ) : null}

                {groupIcon ? (
                    <span className="icon-child hideOnSmallScreen">
                        {groupIcon}
                    </span>
                ) : null}

                {children && rest.isCheckbox ? (
                    <span className="hideOnBigScreen">{children}</span>
                ) : null}
            </div>

            {children && !rest.isCheckbox ? (
                <div className="cell-child">{children}</div>
            ) : null}

            {children && rest.isCheckbox ? (
                <div className="hideOnSmallScreen">{children}</div>
            ) : null}
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
