import { css } from 'styled-components';
import { stripUnit, transparentize, math, directionalProperty } from 'polished';

const calculateSpace = (space, toRemove = 0, coeff = 1) => {
    return props => math(props.theme.blockSpace[space] + '*' + coeff + '-' + toRemove);
};

const blockSpace = (screen, space) => {
    switch (screen) {
        case 'xs':
            return props => stripUnit(space(props)) > stripUnit(props.theme.blockSpace.xs) ?
                props.theme.blockSpace.xs :
                space;
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

const responsiveSpaces = (propAttribute, toRemove = 0, bottomCoeff = 1) => {
    const getSpace = (screen, direction, toRemove, bottomCoeff = 1) => {
        return props => props[propAttribute + direction] !== undefined ?
            props => blockSpace(screen, calculateSpace(props[propAttribute + direction], toRemove, bottomCoeff)) :
            null
    };

    return css`
        ${directionalProperty(propAttribute,
            getSpace('xs', 'Top', toRemove),
            getSpace('xs', 'Lateral', toRemove),
            getSpace('xs', 'Bottom', toRemove, bottomCoeff),
            getSpace('xs', 'Lateral', toRemove)
        )};

        @media (${props => props.theme.query.min.sm}) {
            ${directionalProperty(propAttribute,
                getSpace('sm', 'Top', toRemove),
                getSpace('sm', 'Lateral', toRemove),
                getSpace('sm', 'Bottom', toRemove, bottomCoeff),
                getSpace('sm', 'Lateral', toRemove)
            )};
        }

        @media (${props => props.theme.query.min.md}) {
            ${directionalProperty(propAttribute,
                getSpace('md', 'Top', toRemove),
                getSpace('md', 'Lateral', toRemove),
                getSpace('md', 'Bottom', toRemove, bottomCoeff),
                getSpace('md', 'Lateral', toRemove)
            )};
        }
    `;
};

const fontColor = {
    main: {
        original: props => props.theme.wab[props.mainColor],
        reverse: props => transparentize(0.05, props.theme.wab.white00)
    },
    secondary: {
        original: props => props.theme.color[props.colorTheme]['main'],
        reverse: props => transparentize(0.05, props.theme.wab.white00)
    },
};

const backgroundColor = {
    none: 'transparent',
    grey1: props => transparentize(0.97, props.theme.wab.black00),
    grey2: props => transparentize(0.92, props.theme.wab.black00),
    theme: props => transparentize(0.9, props.theme.color[props.colorTheme]['main']),
};

export {
    responsiveSpaces,
    fontColor,
    backgroundColor,
};