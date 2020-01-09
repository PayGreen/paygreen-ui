import React from 'react';
import PropTypes from 'prop-types';
import {

} from '../../shared/constants';
import { ListHorizontalBase } from './style';

const ListHorizontal = (props) => {
    return <ListHorizontalBase
        {...props}
    >
        {React.Children.map(props.children, (child, index) =>
            <li key={index}>
                {child}
            </li>
        )}
    </ListHorizontalBase>;
};

ListHorizontal.propTypes = {

};

ListHorizontal.defaultProps = {

};

export default ListHorizontal;