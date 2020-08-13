import React from 'react';
import PropTypes from 'prop-types';
import { spaceOptions, spaceDefault } from '../../shared/constants';
import { BoxBase } from './style';

const Box = ({ children, padding, margin, ...rest }) => {
    ['Top', 'Bottom', 'Left', 'Right'].forEach(direction => {
        let paddingDirection = 'padding' + direction;

        if (!rest[paddingDirection]) {
            rest[paddingDirection] = padding;
        }

        let marginDirection = 'margin' + direction;

        if (!rest[marginDirection]) {
            rest[marginDirection] = margin;
        }
    });

    return <BoxBase {...rest}>{children}</BoxBase>;
};

Box.propTypes = {
    hasResponsivePadding: PropTypes.bool,
    padding: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingTop: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingRight: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    paddingBottom: PropTypes.oneOf(Object.values(spaceOptions)),
    hasResponsiveMargin: PropTypes.bool,
    margin: PropTypes.oneOf(Object.values(spaceOptions)),
    marginTop: PropTypes.oneOf(Object.values(spaceOptions)),
    marginRight: PropTypes.oneOf(Object.values(spaceOptions)),
    marginLeft: PropTypes.oneOf(Object.values(spaceOptions)),
    marginBottom: PropTypes.oneOf(Object.values(spaceOptions)),
};

Box.defaultProps = {
    hasResponsivePadding: false,
    padding: spaceDefault,
    hasResponsiveMargin: false,
    margin: spaceDefault,
};

export default Box;
