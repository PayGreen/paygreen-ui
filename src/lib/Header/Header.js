import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { debounceTime } from '../../shared/constants';
import MenuGroup from '../MenuGroup/MenuGroup';
import MenuTertiary from '../MenuTertiary/MenuTertiary';
import { HeaderBase } from './style';

const Header = ({ hasTopStyle, children, ...rest }) => {
    const direction = {
        top: 'top',
        bottom: 'bottom',
    };
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(direction.top);

    const topStyle = hasTopStyle && scrollTop <= 0;

    useScrollPosition(
        ({ prevPos, currPos }) => {
            setScrollTop(currPos.y);
            setScrollDirection(
                currPos.y > prevPos.y ? direction.bottom : direction.top,
            );
        },
        [],
        null,
        true,
        debounceTime,
    );

    let hasMenuTertiary = false;

    React.Children.map(children, child => {
        if (child && child.type === MenuTertiary) {
            hasMenuTertiary = true;
        }
    });

    const menuTertiaryStartDisplay = 110; // pixels to the top

    return (
        <HeaderBase {...rest} hasTopStyle={topStyle}>
            {React.Children.map(children, child => {
                if (!child) {
                    return null;
                }

                if (child.type === MenuGroup) {
                    return React.cloneElement(child, {
                        isHidden:
                            hasMenuTertiary &&
                            scrollDirection === direction.bottom &&
                            scrollTop > menuTertiaryStartDisplay,
                        hasTopStyle: topStyle,
                    });
                }

                if (child.type === MenuTertiary) {
                    return React.cloneElement(child, {
                        isHidden: scrollTop <= menuTertiaryStartDisplay,
                    });
                }

                return child;
            })}
        </HeaderBase>
    );
};

Header.propTypes = {
    hasTopStyle: PropTypes.bool,
};

Header.defaultProps = {
    hasTopStyle: true,
};

export default Header;
