import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
} from '../../shared/constants';
import { ListItemBase } from './style';

class ListItem extends PureComponent {
    render() {
        const withoutIconStyles = [
            listStyleOptions.number,
            listStyleOptions.dash
        ];

        return <ListItemBase
            as={this.props.href && this.props.href.length ? 'a' : 'span'}
            isClickable={this.props.href && this.props.href.length}
            {...this.props}
        >
            {withoutIconStyles.includes(this.props.bulletStyle) ?
                <span className="bullet">
                    {this.props.bulletStyle === listStyleOptions.number ?
                        this.props.number : null}
                </span>
                : null
            }

            {this.props.children}
        </ListItemBase>;
    }
}

ListItem.propTypes = {
    number: PropTypes.number,
    isClicked: PropTypes.bool,
    bulletStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
};

ListItem.defaultProps = {
    number: 1,
    isClicked: false,
    bulletStyle: listStyleDefault,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
};

export default ListItem;