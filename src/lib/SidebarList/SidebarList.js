import React from 'react';
import PropTypes from 'prop-types';
import { SidebarListBase } from './style';

const SidebarList = props => {
    return (
        <SidebarListBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? <li key={index}>{child}</li> : null,
            )}
        </SidebarListBase>
    );
};

SidebarList.propTypes = {
    isOpen: PropTypes.bool,
};

SidebarList.defaultProps = {
    isOpen: true,
};

export default SidebarList;
