import { css } from 'styled-components';
import { stripUnit, math, directionalProperty } from 'polished';

/**
 * Calculate space with value in theme (space), value to remove and coeff
 * 
 * @param {string} space 
 * @param {number} toRemove 
 * @param {number} coeff 
 * 
 * @returns {string}
 */
const calculateSpace = (space, toRemove = 0, coeff = 1) => {
    return props =>
        math(props.theme.blockSpace[space] + '*' + coeff + '-' + toRemove);
};

/**
 * Return correct space for specified screen
 * 
 * @param {string} screen 
 * @param {string} space 
 * 
 * @returns {string}
 */
const blockSpace = (screen, space) => {
    switch (screen) {
        case 'sm':
            return props =>
                stripUnit(space(props)) > stripUnit(props.theme.blockSpace.sm)
                    ? props.theme.blockSpace.sm
                    : stripUnit(space(props)) >
                      stripUnit(props.theme.blockSpace.xs)
                    ? props.theme.blockSpace.xs
                    : space;
        case 'md':
            return space;
    }
};

const directionProperty = {
    top: 'Top',
    bottom: 'Bottom',
    lateral: 'Lateral',
};

/**
 * Create CSS for responsive space attribute
 * 
 * @param {string} propAttribute margin or padding
 * @param {number} toRemove value to remove to space
 * @param {number} bottomCoeff coeff for bottom space
 * @param {number} topCoeff coeff for top space
 * @param {Array} directions which directions (top, right, left, bottom) create in css
 * 
 * @returns {string} css
 */
const responsiveSpaces = (
    propAttribute,
    toRemove = 0,
    bottomCoeff = 1,
    topCoeff = 1,
    directions = Object.values(directionProperty),
) => {
    /**
     * Get correct space for given direction if exists
     * 
     * @param {string} screen sm, md
     * @param {string} direction Top, Right, Left, Right, Lateral
     * @param {number} toRemove value to remove to space
     * @param {number} bottomCoeff coeff for bottom space
     * @param {number} topCoeff coeff for top space
     * @param {Array} directions all directions which be created in css
     * 
     * @returns {string|null}
     */
    const getSpace = (
        screen,
        direction,
        toRemove,
        bottomCoeff,
        topCoeff,
        directions,
    ) => {
        if (
            ['Left', 'Right'].includes(direction) &&
            !directions.includes(direction)
        ) {
            direction = directionProperty.lateral;
        }

        return props =>
            directions.includes(direction) &&
            props[propAttribute + direction] !== undefined
                ? props =>
                      blockSpace(
                          screen,
                          calculateSpace(
                              props[propAttribute + direction],
                              toRemove,
                              bottomCoeff,
                              topCoeff,
                          ),
                      )
                : null;
    };

    return css`
        ${directionalProperty(
            propAttribute,
            getSpace(
                'sm',
                directionProperty.top,
                toRemove,
                bottomCoeff,
                topCoeff,
                directions,
            ),
            getSpace(
                'sm',
                'Right',
                toRemove,
                bottomCoeff,
                topCoeff,
                directions,
            ),
            getSpace(
                'sm',
                directionProperty.bottom,
                toRemove,
                bottomCoeff,
                topCoeff,
                directions,
            ),
            getSpace('sm', 'Left', toRemove, bottomCoeff, topCoeff, directions),
        )};

        @media (${props => props.theme.query.min.md}) {
            ${directionalProperty(
                propAttribute,
                getSpace(
                    'md',
                    directionProperty.top,
                    toRemove,
                    bottomCoeff,
                    topCoeff,
                    directions,
                ),
                getSpace(
                    'md',
                    'Right',
                    toRemove,
                    bottomCoeff,
                    topCoeff,
                    directions,
                ),
                getSpace(
                    'md',
                    directionProperty.bottom,
                    toRemove,
                    bottomCoeff,
                    topCoeff,
                    directions,
                ),
                getSpace(
                    'md',
                    'Left',
                    toRemove,
                    bottomCoeff,
                    topCoeff,
                    directions,
                ),
            )};
        }
    `;
};

export { responsiveSpaces };
