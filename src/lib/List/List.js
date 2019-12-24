import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    colorThemeOptions,
    colorThemeDefault,
    blockSpaceOptions,
    blockSpaceDefault,

    formStatusOptions,
    iconSizeOptions,
    spaceOptions,
    colorPalletOptions
} from '../../shared/constants';
import { CheckBoldIcon } from '../Icon/Icon';
import { ListBase } from './style';

class List extends PureComponent {
    render() {
        const items = this.props.elements.map((element, index) =>
            <li key={index}>
                {element.icon &&
                this.props.listStyle === listStyleOptions.customIcon ?
                    element.icon :

                    this.props.listStyle === listStyleOptions.check ?
                        <CheckBoldIcon
                            theme={this.props.theme} // not necessary, only needed for tests
                            iconSize={iconSizeOptions.xs}
                            marginRight={spaceOptions.sm}
                            colorPallet={colorPalletOptions.status}
                            colorStatus={formStatusOptions.success}
                        />
                        : null
                }

                <span className="content">
                    {element.content}
                </span>

                {element.details && this.props.hasDetails ?
                    <span className="details">element.details</span> :
                    null
                }
            </li>
        );

        return <ListBase
            as={this.props.listStyle === listStyleOptions.number ? 'ol' : 'ul'}
            {...this.props}
        >
            {items}
        </ListBase>;
    }
}

List.propTypes = {
    elements: PropTypes.arrayOf(
        PropTypes.shape({
            icon: PropTypes.element,
            content: PropTypes.string.isRequired,
            details: PropTypes.string
        })
    ).isRequired,
    listStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    hasDetails: PropTypes.bool,
    isClickable: PropTypes.bool,
    colorTheme: PropTypes.oneOf(Object.values(colorThemeOptions)),
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
};

List.defaultProps = {
    listStyle: listStyleDefault,
    hasDetails: false,
    isClickable: false,
    colorTheme: colorThemeDefault,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
};

export default List;