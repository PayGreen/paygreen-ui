import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import DaTableBody from '../DaTableBody/DaTableBody';
import DaTableRow from '../DaTableRow/DaTableRow';
import { DaTableBase } from './style';

const DaTable = ({ children, ...rest }) => {
    let noRowsMessage = null;
    let hasRow = true;

    React.Children.map(children, child => {
        if (typeof child === 'object' && child.type === DaTableBody) {
            hasRow = false;

            React.Children.map(child.props.children, row => {
                if (typeof row === 'object' && row.type === DaTableRow) {
                    hasRow = true;
                }
            });

            if (!hasRow) {
                noRowsMessage = child.props.children;
            }
        }
    });

    return (
        <DaTableBase {...rest}>
            <div className="table">
                {React.Children.map(children, child => {
                    if (!child) {
                        return null;
                    } else if (hasRow || child.type !== DaTableBody) {
                        return child;
                    }
                })}
            </div>

            {!hasRow ? (
                <div className="noRows">
                    {noRowsMessage ? noRowsMessage : 'No data'}
                </div>
            ) : null}
        </DaTableBase>
    );
};

DaTable.propTypes = {
    blockWidth: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

DaTable.defaultProps = {
    blockWidth: spaceOptions.md,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default DaTable;
