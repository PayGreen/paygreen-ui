import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { debounceTime } from '../../shared/constants';
import MenuGroup from '../MenuGroup/MenuGroup';
import MenuTertiary from '../MenuTertiary/MenuTertiary';
import { HeaderBase } from './style';

const Header = props => {
    const direction = {
        top: 'top',
        bottom: 'bottom',
    };
    const [scrollTop, setScrollTop] = useState(0);
    const [scrollDirection, setScrollDirection] = useState(direction.top);

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

    React.Children.map(props.children, child => {
        if (child.type === MenuTertiary) {
            hasMenuTertiary = true;
        }
    });

    return (
        <HeaderBase {...props}>
            {React.Children.map(props.children, (child, index) => {
                if (!child) {
                    return null;
                }

                if (child.type === MenuGroup) {
                    return React.cloneElement(child, {
                        isHidden:
                            hasMenuTertiary &&
                            scrollDirection === direction.bottom,
                        hasTopStyle: scrollTop <= 0,
                    });
                }

                if (child.type === MenuTertiary) {
                    return React.cloneElement(child, {
                        isHidden: scrollTop <= 0,
                    });
                }

                return child;
            })}
        </HeaderBase>
    );
};

Header.propTypes = {
    isFixed: PropTypes.bool,
};

Header.defaultProps = {
    isFixed: false,
};

export default Header;
