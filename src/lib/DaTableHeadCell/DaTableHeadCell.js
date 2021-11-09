import React from 'react';
import PropTypes from 'prop-types';
import {
    iconHtmlTagOptions,
    iconSizeOptions,
    colorPalletOptions,
    formStatusDefault,
    buttonSizeOptions,
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

    if (children && children.type === Checkbox) {
        children = React.cloneElement(children, {
            fieldSize: buttonSizeOptions.sm,
        });
    }

    return (
        <DaTableHeadCellBase
            {...rest}
            isCheckbox={cellIsCheckbox}
            hasControls={sortIcon || groupIcon}
            className={
                sortIcon || children || cellIsCheckbox
                    ? null
                    : 'hideOnSmallScreen'
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

                {children && cellIsCheckbox ? children : null}
            </div>

            {children && !cellIsCheckbox ? (
                <div className="cell-child">{children}</div>
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
