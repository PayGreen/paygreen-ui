import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { ListHorizontalBase } from './style';

class ListHorizontal extends PureComponent {
    render() {
        return <ListHorizontalBase
            {...this.props}
        >
            {React.Children.map(this.props.children, (child, index) =>
                <li key={index}>
                    {child}
                </li>
            )}
        </ListHorizontalBase>;
    }
}

ListHorizontal.propTypes = {

};

ListHorizontal.defaultProps = {

};

export default ListHorizontal;