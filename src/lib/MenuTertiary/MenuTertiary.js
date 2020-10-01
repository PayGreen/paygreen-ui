import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ScrollContainer from 'react-indiana-drag-scroll';
import { useScrollPosition } from '@n8tb1t/use-scroll-position';
import { useDebounce } from '../../shared/hook/useDebounce';
import { useWindowSize } from '../../shared/hook/useWindowSize';
import {
    debounceTime,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import { MenuTertiaryBase } from './style';

const MenuTertiary = props => {
    const [activeLink, setActiveLink] = useState(null);
    const [sections, setSections] = useState(null);
    const [scrollTop, setScrollTop] = useState(0);

    useScrollPosition(
        ({ currPos }) => {
            setScrollTop(currPos.y + 100);
        },
        [],
        null,
        true,
        debounceTime,
    );

    const windowSize = useDebounce(useWindowSize(), debounceTime);

    useEffect(() => {
        let sectionsTmp = [];

        React.Children.map(props.children, child => {
            if (!child) {
                return null;
            }
            if (
                child.props &&
                child.props.href &&
                child.props.href.startsWith('#')
            ) {
                const id = child.props.href.replace('#', '');
                const target = document.getElementById(id);
                if (target) {
                    sectionsTmp[id] = {
                        top: target.offsetTop,
                        bottom: target.offsetTop + target.offsetHeight,
                    };
                }
            }
        });

        setSections(sectionsTmp);
    }, [windowSize]);

    useEffect(() => {
        for (const section in sections) {
            if (
                scrollTop >= sections[section].top &&
                scrollTop <= sections[section].bottom
            ) {
                setActiveLink(section);
                break;
            } else {
                setActiveLink(null);
            }
        }
    }, [windowSize, scrollTop, sections]);

    return (
        <MenuTertiaryBase {...props}>
            <ScrollContainer horizontal nativeMobileScroll>
                {React.Children.map(props.children, (child, index) => {
                    if (!child) {
                        return null;
                    }
                    
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
    isHidden: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

MenuTertiary.defaultProps = {
    isFixed: false,
    isHidden: false,
    colorTheme: colorThemeDefault,
};

export default MenuTertiary;
