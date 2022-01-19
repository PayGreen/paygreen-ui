import React from 'react';
import PropTypes from 'prop-types';
import {
    spaceOptions,
    colorPalletOptions,
    greyOptions,
} from '../../shared/constants';
import Logo from '../Logo/Logo';
import { MenuMobileBase } from './style';

const MenuMobile = ({ children, ...rest }) => {
    let linkChildren = [];

    const logoProps = {
        blockWidth: rest.hasTopStyle ? spaceOptions.md : spaceOptions.sm,
        isWhite: rest.hasTopStyle,
    };

    React.Children.map(children, child => {
        if (typeof child === 'object' && child.type === 'a') {
            React.Children.map(child.props.children, (subChild, index) => {
                if (typeof subChild === 'object' && subChild.type === Logo) {
                    linkChildren.push(
                        React.cloneElement(subChild, {
                            ...logoProps,
                            hasBaseline:
                                subChild.props.hasBaseline && rest.hasTopStyle,
                            key: index,
                        }),
                    );
                } else {
                    linkChildren.push(subChild);
                }
            });
        }
    });

    return (
        <MenuMobileBase {...rest}>
            {React.Children.map(children, (child, index) => {
                switch (child && child.type) {
                    case null:
                        return null;

                    case Logo:
                        return React.cloneElement(child, {
                            ...logoProps,
                            hasBaseline:
                                child.props.hasBaseline && rest.hasTopStyle,
                            key: index,
                        });

                    case 'a':
                        return React.cloneElement(child, {
                            children: linkChildren,
                            key: index,
                        });

                    default:
                        return React.cloneElement(child, {
                            colorPallet: rest.hasTopStyle
                                ? colorPalletOptions.wab
                                : child.props.colorPallet,
                            colorWab: rest.hasTopStyle
                                ? greyOptions.white00
                                : child.props.colorWab,
                            key: index,
                        });
                }
            })}
        </MenuMobileBase>
    );
};

MenuMobile.propTypes = {
    hasTopStyle: PropTypes.bool,
    isHidden: PropTypes.bool,
};

MenuMobile.defaultProps = {
    hasTopStyle: false,
    isHidden: false,
};

export default MenuMobile;
