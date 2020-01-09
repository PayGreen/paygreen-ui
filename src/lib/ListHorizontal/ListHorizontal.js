import React from 'react';
import PropTypes from 'prop-types';
import {
    greyOptions,
    spaceOptions,
    spaceDefault
} from '../../shared/constants';
import { ListHorizontalBase } from './style';

const ListHorizontal = props => (
    <ListHorizontalBase {...props}>
        {React.Children.map(props.children, (child, index) => (
            <li key={index}>{child}</li>
        ))}
    </ListHorizontalBase>
);

ListHorizontal.propTypes = {
    colorWab: PropTypes.oneOf(Object.values(greyOptions)),

    paddingLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),

    marginLateral: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

ListHorizontal.defaultProps = {
    colorWab: greyOptions.grey10,

    paddingLateral: spaceDefault,
    paddingTop: spaceDefault,
    paddingBottom: spaceDefault,

    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export default ListHorizontal;
