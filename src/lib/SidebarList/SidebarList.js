import React from 'react';
import PropTypes from 'prop-types';
import {
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { SidebarListBase } from './style';

const SidebarList = props => {
    return (
        <SidebarListBase {...props}>
            {React.Children.map(props.children, (child, index) =>
                child ? (
                    <li key={index} {...props}>
                        {child}
                    </li>
                ) : null,
            )}
        </SidebarListBase>
    );
};
SidebarList.propTypes = {
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

SidebarList.defaultProps = {
    colorTheme: colorThemeDefault,
};

export default SidebarList;
