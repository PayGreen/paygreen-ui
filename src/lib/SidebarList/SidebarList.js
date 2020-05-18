import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { SidebarListBase } from './style';

const SidebarList = props => {
    return (
        <SidebarListBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? (
                    <li key={index}>
                        {child}
                    </li>
                ) : null,
            )}
        </SidebarListBase>
    );
};
SidebarList.propTypes = {
    
};

SidebarList.defaultProps = {
    
};

export default SidebarList;
