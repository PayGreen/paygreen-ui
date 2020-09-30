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

const DaTableHeadCell = ({ children, label, sortIcon, groupIcon, ...rest }) => {
    const iconProps = {
        htmlTag: iconHtmlTagOptions.button,
        iconSize: iconSizeOptions.xxs,
        hasBackground: true,
        hasHover: true,
        colorPallet: colorPalletOptions.status,
        colorStatus: formStatusDefault,
    };

    const isCheckbox = children && children.type === Checkbox;

    return (
        <DaTableHeadCellBase
            {...rest}
            isCheckbox={isCheckbox}
            hasControls={sortIcon || groupIcon}
            className={!children && !sortIcon ? 'hideOnSmallScreen' : null}
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

                {children && isCheckbox ? (
                    <span className="hideOnBigScreen">{children}</span>
                ) : null}
            </div>

            {children && !isCheckbox ? (
                <div className="cell-child">{children}</div>
            ) : null}

            {children && isCheckbox ? (
                <div className="hideOnSmallScreen">{children}</div>
            ) : null}
        </DaTableHeadCellBase>
    );
};

DaTableHeadCell.propTypes = {
    sortIcon: PropTypes.element,
    groupIcon: PropTypes.element,
    label: PropTypes.string,
};

DaTableHeadCell.defaultProps = {
    sortIcon: null,
    groupIcon: null,
};

export default DaTableHeadCell;
