import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
    listStyleOptions,
    listStyleDefault,
    blockSpaceOptions,
    blockSpaceDefault
} from '../../shared/constants';
import { ListBase } from './style';

class List extends PureComponent {
    render() {
        return <ListBase
            as={this.props.listStyle === listStyleOptions.number ? 'ol' : 'ul'}
            {...this.props}
        >
            {React.Children.map(this.props.children, (child, index) => 
                <li key={index}>
                    {React.cloneElement(child, { number : index + 1 })}
                </li>
            )}
        </ListBase>;
    }
}

List.propTypes = {
    listStyle: PropTypes.oneOf(Object.values(listStyleOptions)),
    marginLateral: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(blockSpaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(blockSpaceOptions)),
};

List.defaultProps = {
    listStyle: listStyleDefault,
    marginLateral: blockSpaceDefault,
    marginTop: blockSpaceDefault,
    marginBottom: blockSpaceDefault,
};

export default List;