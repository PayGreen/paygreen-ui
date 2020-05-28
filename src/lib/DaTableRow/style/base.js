import { css } from 'styled-components';
import { transparentize } from 'polished';

function mainCellAreas(mainCount, hasCheckbox) {
    let count = hasCheckbox ? mainCount - 1 : mainCount;
    let styles = '';

    for (let i = 1; i <= count; i++) {
        styles += `
            &-main-${i} {
                grid-area: main-${i};
            }
        `;
    }

    return css`${styles}`;
}

function basicCellAreas(notMainCount) {
    let styles = '';

    for (let i = 1; i <= notMainCount; i++) {
        styles += `
            &-basic-${i} {
                grid-area: basic-${i};
            }
        `;
    }

    return css`${styles}`;
}

const cellsAreas = css`
    .cell {
        &-checkbox {
            grid-area: checkbox;
        }

        ${props => mainCellAreas(props.mainCellCount, props.hasCheckbox)};
        ${props => basicCellAreas(props.notMainCellCount)};
    }
`;

const toggableStyle = css`
    .cell-basic {
        height: 0;
        padding-top: 0;
        padding-bottom: 0;
        opacity: 0;
        overflow: hidden;
        transition: all ${props => props.theme.transition.sm};
    }

    &:hover {
        .cell-basic {
            height: ${props => props.theme.space.lg};
            padding-top: ${props => props.theme.space.xs};
            padding-bottom: ${props => props.theme.space.xs};
            opacity: 1;
        }
    }
`;

const activeStyle = css`
    background-color: ${props => props.theme.wab.grey10};
    font-weight: ${props => props.theme.font.weight.bold};
`;

const hoverStyle = css`
    box-shadow: ${props =>
        props.theme.shadow.size.none +
        ' ' +
        transparentize(
            props.theme.shadow.opacity.none,
            props.theme.wab.black00,
        )};

    &:hover {
        background-color: ${props => props.theme.wab.white00};
        box-shadow: ${props =>
            props.theme.shadow.size.xs +
            ' ' +
            transparentize(
                props.theme.shadow.opacity.sm,
                props.theme.wab.black00,
            )};
    }
`;

export {
    cellsAreas, toggableStyle, activeStyle, hoverStyle
}
