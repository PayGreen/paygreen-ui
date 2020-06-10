import { css } from 'styled-components';
import { stripUnit, math, directionalProperty } from 'polished';

const calculateSpace = (space, toRemove = 0, coeff = 1) => {
    return props =>
        math(props.theme.blockSpace[space] + '*' + coeff + '-' + toRemove);
};

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

const responsiveSpaces = (
    propAttribute,
    toRemove = 0,
    bottomCoeff = 1,
    topCoeff = 1,
    directions = Object.values(directionProperty),
) => {
    const getSpace = (
        screen,
        direction,
        toRemove,
        bottomCoeff,
        topCoeff,
        directions,
    ) => {
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
                directionProperty.lateral,
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
                directionProperty.lateral,
                toRemove,
                bottomCoeff,
                topCoeff,
                directions,
            ),
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
                    directionProperty.lateral,
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
                    directionProperty.lateral,
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
