import React from 'react';
import PropTypes from 'prop-types';
import {
    iconHtmlTagOptions,
    iconSizeOptions,
    colorPalletOptions,
    formStatusDefault,
} from '../../shared/constants';
import Checkbox from '../Checkbox/Checkbox';
import { DaTableHeadCellBase } from './style';

const DaTableHeadCell = ({
    children,
    label,
    sortIcon,
    groupIcon,
    isCheckbox,
    ...rest
}) => {
    const iconProps = {
        htmlTag: iconHtmlTagOptions.button,
        iconSize: iconSizeOptions.xxs,
        hasBackground: true,
        hasHover: true,
        colorPallet: colorPalletOptions.status,
        colorStatus: formStatusDefault,
    };

    const cellIsCheckbox =
        isCheckbox || (children && children.type === Checkbox);

    return (
        <DaTableHeadCellBase
            {...rest}
            isCheckbox={cellIsCheckbox}
            hasControls={sortIcon || groupIcon}
            className={
                !sortIcon && (!children || !cellIsCheckbox)
                    ? 'hideOnSmallScreen'
                    : null
            }
        >
            <div className="head-child">
                {label ? <span className="label-child">{label}</span> : null}

                {sortIcon ? (
                    <span className="icon-child">
                        {React.cloneElement(sortIcon, iconProps)}
                    </span>
                ) : null}

                {groupIcon ? (
                    <span className="icon-child hideOnSmallScreen">
                        {React.cloneElement(groupIcon, iconProps)}
                    </span>
                ) : null}

                {children && cellIsCheckbox ? (
                    <span className="hideOnBigScreen">{children}</span>
                ) : null}
            </div>

            {children && !cellIsCheckbox ? (
                <div className="cell-child">{children}</div>
            ) : null}

            {children && cellIsCheckbox ? (
                <div className="hideOnSmallScreen">{children}</div>
            ) : null}
        </DaTableHeadCellBase>
    );
};

DaTableHeadCell.propTypes = {
    sortIcon: PropTypes.element,
    groupIcon: PropTypes.element,
    label: PropTypes.string,
    isCheckbox: PropTypes.bool,
};

DaTableHeadCell.defaultProps = {
    sortIcon: null,
    groupIcon: null,
    isCheckbox: false,
};

export default DaTableHeadCell;
