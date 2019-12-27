import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    iconSizeOptions,
    iconSizeDefault,
    decorationOptions
} from '../../shared/constants';
import { ArrowLeftIcon, ArrowRightIcon } from '../Icon/Icon';
import { ListItemBase } from './style';

class ListItem extends PureComponent {
    render() {
        const withoutIconStyles = [
            listStyleOptions.number,
            listStyleOptions.dash
        ];

        const isClickable = this.props.href && this.props.href.length;

        return <ListItemBase
            as={isClickable ? 'a' : 'span'}
            isClickable={isClickable}
            {...this.props}
        >
            {isClickable && this.props.arrow === decorationOptions.left ?
                <span className="arrow">
                    <ArrowLeftIcon
                        theme={this.props.theme} // not necessary, only needed for tests
                        colorTheme={this.props.colorTheme}
                        iconSize={this.props.bulletSize}
                    />
                </span>
                : null
            }

            {withoutIconStyles.includes(this.props.bulletStyle) ?
                <span className="bullet">
                    {this.props.bulletStyle === listStyleOptions.number ?
                        this.props.number : null}
                </span>
                : null
            }

            {this.props.children}

            {isClickable && this.props.arrow === decorationOptions.right ?
                <span className="arrow">
                    <ArrowRightIcon
                        theme={this.props.theme} // not necessary, only needed for tests
                        colorTheme={this.props.colorTheme}
                        iconSize={this.props.bulletSize}
                    />
                </span>
                : null
            }
        </ListItemBase>;
    }
}

ListItem.propTypes = {
    number: PropTypes.number,
    isClicked: PropTypes.bool,
    bulletStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    arrow: PropTypes.oneOf(Object.values(decorationOptions))
};

ListItem.defaultProps = {
    number: 1,
    isClicked: false,
    bulletStyle: listStyleDefault,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
    arrow: decorationOptions.none
};

export default ListItem;