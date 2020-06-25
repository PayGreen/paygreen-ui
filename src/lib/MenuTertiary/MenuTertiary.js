import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from 'react-indiana-drag-scroll';
import {} from '../../shared/constants';
import { MenuTertiaryBase } from './style';

/**
 * Debounce function
 * @param {requestCallback} fn
 * @param {number} ms
 */
function debounce(fn, ms) {
    let timer;

    return _ => {
        clearTimeout(timer);

        timer = setTimeout(_ => {
            timer = null;
            fn.apply(this, arguments);
        }, ms);
    };
}

const MenuTertiary = props => {
    /**
     * Get all page sections from links anchors
     */
    let sections = {};

    React.Children.map(props.children, child => {
        if (child.props.href && child.props.href.startsWith('#')) {
            const id = child.props.href.replace('#', '');
            sections[id] = { top: 0, bottom: 0 };
        }
    });

    /**
     * Define which link is active
     */
    const [activeLink, setActiveLink] = useState(null);

    /**
     * Listen resize and scroll events
     */
    useEffect(() => {
        window.addEventListener('load', refreshMenu);
        window.addEventListener('resize', refreshMenu);
        window.addEventListener('scroll', currentActiveLink);

        return _ => {
            window.removeEventListener('load', refreshMenu);
            window.removeEventListener('resize', refreshMenu);
            window.removeEventListener('scroll', currentActiveLink);
        };
    }, []);

    /**
     * Set sections top and bottom
     */
    const sectionsPositions = debounce(() => {
        for (const section in sections) {
            const target = document.getElementById(section);

            if (target) {
                sections[section] = {
                    top: target.offsetTop,
                    bottom: target.offsetTop + target.offsetHeight,
                };
            }
        }
    }, 100);

    /**
     * Set current active link
     */
    const currentActiveLink = debounce(() => {
        const currentScroll = window.scrollY + 100;

        for (const section in sections) {
            if (
                currentScroll >= sections[section].top &&
                currentScroll <= sections[section].bottom
            ) {
                setActiveLink(section);
                break;
            } else {
                setActiveLink(null);
            }
        }
    }, 10);

    /**
     * Refresh menu after load or resize
     */
    const refreshMenu = () => {
        sectionsPositions();
        currentActiveLink();
    };

    return (
        <MenuTertiaryBase {...props}>
            <ScrollContainer horizontal nativeMobileScroll>
                {props.children.map((child, index) => {
                    return React.cloneElement(child, {
                        key: index,
                        className:
                            child.props.href === '#' + activeLink
                                ? 'active'
                                : null,
                    });
                })}
            </ScrollContainer>
        </MenuTertiaryBase>
    );
};

MenuTertiary.propTypes = {
    isFixed: PropTypes.bool,
};

MenuTertiary.defaultProps = {
    isFixed: false,
};

export default MenuTertiary;
