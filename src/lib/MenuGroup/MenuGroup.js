import React from 'react';
import PropTypes from 'prop-types';
import { colorTypeOptions } from '../../shared/constants';
import Dot from '../Dot/Dot';
import MenuPrimary from '../MenuPrimary/MenuPrimary';
import MenuSecondary from '../MenuSecondary/MenuSecondary';
import MenuMobile from '../MenuMobile/MenuMobile';
import { MenuGroupBase } from './style';

const MenuGroup = ({ children, ...rest }) => {
    let hasOpenMenu = false;

    React.Children.map(children, child => {
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
        <MenuGroupBase hasOpenMenu={hasOpenMenu} {...rest}>
            {React.Children.map(children, (child, index) => {
                switch (child && child.type) {
                    case null:
                        return null;

                    case MenuMobile:
                        return React.cloneElement(child, {
                            isHidden: rest.isHidden && !hasOpenMenu,
                            hasTopStyle: rest.hasTopStyle && !hasOpenMenu,
                            key: index,
                        });

                    case Dot:
                        return React.cloneElement(child, {
                            colorType: rest.hasTopStyle
                                ? colorTypeOptions.reverse
                                : colorTypeOptions.original,
                            key: index,
                        });

                    default:
                        return child;
                }
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
