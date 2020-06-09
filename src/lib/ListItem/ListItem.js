import React from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    decorationOptions,
} from '../../shared/constants';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon/Icon';
import { ListItemBase } from './style';

const ListItem = props => {
    const withoutIconStyles = [listStyleOptions.number, listStyleOptions.dash];

    const isClickable = props.href && props.href.length;

    return (
        <ListItemBase
            as={isClickable ? 'a' : 'span'}
            isClickable={isClickable}
            {...props}
        >
            {isClickable && props.arrowStyle === decorationOptions.left ? (
                <span className="arrow">
                    <ArrowLeftIcon
                        theme={props.theme} // not necessary, only needed for tests
                        colorTheme={props.colorTheme}
                        iconSize={props.bulletSize}
                    />
                </span>
            ) : null}

            {withoutIconStyles.includes(props.bulletStyle) ? (
                <span className="bullet">
                    {props.bulletStyle === listStyleOptions.number
                        ? props.number
                        : null}
                </span>
            ) : null}

            {props.children}

            {isClickable && props.arrowStyle === decorationOptions.right ? (
                <span className="arrow">
                    <ArrowRightIcon
                        theme={props.theme} // not necessary, only needed for tests
                        colorTheme={props.colorTheme}
                        iconSize={props.bulletSize}
                    />
                </span>
            ) : null}
        </ListItemBase>
    );
};

ListItem.propTypes = {
    number: PropTypes.number,
    isClicked: PropTypes.bool,
    bulletStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    arrowStyle: PropTypes.oneOf(Object.values(decorationOptions)),
    hasLink: PropTypes.bool,
};

ListItem.defaultProps = {
    number: 1,
    isClicked: false,
    bulletStyle: listStyleDefault,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
    arrowStyle: decorationOptions.none,
    hasLink: false,
};

export default ListItem;
