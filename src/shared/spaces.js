import { css } from 'styled-components';
import { stripUnit, math, directionalProperty } from 'polished';

/**
 * Calculate space with value in theme (space), value to remove and coeff
 *
 * @param {string} space
 * @param {number} toRemove
 * @param {number} coeff
 * @param {string} spaceTheme 'blockSpace' or 'space'
 *
 * @returns {string}
 */
const calculateSpace = (
    space,
    toRemove = 0,
    coeff = 1,
    spaceTheme = 'blockSpace',
) => {
    return props =>
        math(props.theme[spaceTheme][space] + '*' + coeff + '-' + toRemove);
};

/**
 * Return correct space for specified screen
 *
 * @param {string} screen
 * @param {string} space
 * @param {string} spaceTheme 'blockSpace' or 'space'
 *
 * @returns {string}
 */
const blockSpace = (screen, space, spaceTheme = 'blockSpace') => {
    switch (screen) {
        case 'sm':
            return props =>
                stripUnit(space(props)) > stripUnit(props.theme[spaceTheme].sm)
                    ? props.theme[spaceTheme].sm
                    : stripUnit(space(props)) >
                      stripUnit(props.theme[spaceTheme].xs)
                    ? props.theme[spaceTheme].xs
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

const allDirectionProperty = {
    top: directionProperty.top,
    bottom: directionProperty.bottom,
    left: 'Left',
    right: 'Right',
};

/**
 * 
 * @param {Array} rest 
 * @param {string} margin 
 * @param {string} padding 
 * 
 * @returns {Array}
 */
const setSpaces = (rest, margin, padding) => {
    Object.values(allDirectionProperty).forEach(direction => {
        if (margin) {
            const marginDirection = 'margin' + direction;
            
            if (!rest[marginDirection]) {
                rest[marginDirection] = margin;
            }
        }

        if (padding) {
            const paddingDirection = 'padding' + direction;
            
            if (!rest[paddingDirection]) {
                rest[paddingDirection] = padding;
            }
        }
    });

    return rest;
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
            [allDirectionProperty.left, allDirectionProperty.right].includes(
                direction,
            ) &&
            !directions.includes(direction)
        ) {
            direction = directionProperty.lateral;
        }

        const coeff =
            direction === directionProperty.top
                ? topCoeff
                : direction === directionProperty.bottom
                ? bottomCoeff
                : 1;

        return props =>
            directions.includes(direction) &&
            props[propAttribute + direction] !== undefined
                ? props =>
                      blockSpace(
                          screen,
                          calculateSpace(
                              props[propAttribute + direction],
                              toRemove,
                              coeff,
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
                allDirectionProperty.right,
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
            getSpace(
                'sm',
                allDirectionProperty.left,
                toRemove,
                bottomCoeff,
                topCoeff,
                directions,
            ),
        )};

        @media ${props => props.theme.screen.min.md} {
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
                    allDirectionProperty.right,
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
                    allDirectionProperty.left,
                    toRemove,
                    bottomCoeff,
                    topCoeff,
                    directions,
                ),
            )};
        }
    `;
};

const responsivePaddingStyle = css`
    ${props =>
        props.hasResponsivePadding
            ? responsiveSpaces(
                  'padding',
                  0,
                  1,
                  1,
                  Object.values(allDirectionProperty),
              )
            : css`
                  padding-top: ${props => props.theme.space[props.paddingTop]};
                  padding-right: ${props =>
                      props.theme.space[props.paddingRight]};
                  padding-left: ${props =>
                      props.theme.space[props.paddingLeft]};
                  padding-bottom: ${props =>
                      props.theme.space[props.paddingBottom]};
              `};
`;

const responsiveMarginStyle = css`
    ${props =>
        props.hasResponsiveMargin
            ? responsiveSpaces(
                  'margin',
                  0,
                  1,
                  1,
                  Object.values(allDirectionProperty),
              )
            : css`
                  margin-top: ${props => props.theme.space[props.marginTop]};
                  margin-right: ${props =>
                      props.theme.space[props.marginRight]};
                  margin-left: ${props => props.theme.space[props.marginLeft]};
                  margin-bottom: ${props =>
                      props.theme.space[props.marginBottom]};
              `};
`;

export {
    calculateSpace,
    blockSpace,
    setSpaces,
    responsiveSpaces,
    responsiveMarginStyle,
    responsivePaddingStyle,
};
