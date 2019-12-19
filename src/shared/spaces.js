import { css } from 'styled-components';
import { stripUnit, math, directionalProperty } from 'polished';

const calculateSpace = (space, toRemove = 0, coeff = 1) => {
    return props => math(props.theme.blockSpace[space] + '*' + coeff + '-' + toRemove);
};

const blockSpace = (screen, space) => {
    switch (screen) {
        case 'sm':
            return props => stripUnit(space(props)) > stripUnit(props.theme.blockSpace.sm) ?
                props.theme.blockSpace.sm :
                stripUnit(space(props)) > stripUnit(props.theme.blockSpace.xs) ?
                    props.theme.blockSpace.xs :
                    space;
        case 'md':
            return space;
    }
};

const responsiveSpaces = (propAttribute, toRemove = 0, bottomCoeff = 1, topCoeff = 1) => {
    const getSpace = (screen, direction, toRemove, bottomCoeff = 1, topCoeff = 1) => {
        return props => props[propAttribute + direction] !== undefined ?
            props => blockSpace(screen, calculateSpace(props[propAttribute + direction], toRemove, bottomCoeff, topCoeff)) :
            null
    };

    return css`
        ${directionalProperty(propAttribute,
            getSpace('sm', 'Top', toRemove, topCoeff),
            getSpace('sm', 'Lateral', toRemove),
            getSpace('sm', 'Bottom', toRemove, bottomCoeff),
            getSpace('sm', 'Lateral', toRemove)
        )};

        @media (${props => props.theme.query.min.md}) {
            ${directionalProperty(propAttribute,
                getSpace('md', 'Top', toRemove, topCoeff),
                getSpace('md', 'Lateral', toRemove),
                getSpace('md', 'Bottom', toRemove, bottomCoeff),
                getSpace('md', 'Lateral', toRemove)
            )};
        }
    `;
};

export { responsiveSpaces };