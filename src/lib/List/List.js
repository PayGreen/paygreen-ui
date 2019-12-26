import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    blockSpaceOptions,
    blockSpaceDefault,
    iconSizeOptions,
    iconSizeDefault
} from '../../shared/constants';
import { ListBase } from './style';

class List extends PureComponent {
    render() {
        const withoutIconStyles = [
            listStyleOptions.number,
            listStyleOptions.dash
        ];

        return <ListBase
            as={this.props.listStyle === listStyleOptions.number ? 'ol' : 'ul'}
            {...this.props}
        >
            {React.Children.map(this.props.children, (child, index) =>
                <li key={index}>
                    {withoutIconStyles.includes(this.props.listStyle) ?
                        <span className="bullet">
                            {this.props.listStyle === listStyleOptions.number ?
                                index + 1 : null}
                        </span>
                        : null
                    }

                    {child}
                </li>
            )}
        </ListBase>;
    }
}

List.propTypes = {
    listStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    hasDetails: PropTypes.bool,
    isClickable: PropTypes.bool,
    bulletSize: PropTypes.oneOf(Object.values(iconSizeOptions)),
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
};

List.defaultProps = {
    listStyle: listStyleDefault,
    hasDetails: false,
    isClickable: false,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
};

export default List;