import React from 'react';
import PropTypes from 'prop-types';
import { colorTypeOptions } from '../../shared/constants';
import Dot from '../Dot/Dot';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import { MenuGroupBase } from './style';

const MenuGroup = props => {
    let hasOpenMenu = false;

    React.Children.map(props.children, child => {
        if (!child) {
            return null;
        }

        if ([MenuPrimary, MenuSecondary].includes(child.type)) {
            if (child.props.isOpen) {
                hasOpenMenu = true;
            }
        }
    });

    return (
        <MenuGroupBase hasOpenMenu={hasOpenMenu} {...props}>
            {React.Children.map(props.children, (child, index) => {
                if (!child) {
                    return null;
                }
                
                if (child.type === Dot) {
                    return React.cloneElement(child, {
                        colorType: props.hasTopStyle
                            ? colorTypeOptions.reverse
                            : colorTypeOptions.original,
                        key: index,
                    });
                }

                return child;
            })}
        </MenuGroupBase>
    );
};

MenuGroup.propTypes = {
    isHidden: PropTypes.bool,
    hasTopStyle: PropTypes.bool,
};

MenuGroup.defaultProps = {
    isHidden: false,
    hasTopStyle: false,
};

export default MenuGroup;
