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

    return css`
        ${styles}
    `;
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

    return css`
        ${styles}
    `;
}

const cellsAreas = css`
    .cell {
        &-checkbox {
            grid-area: checkbox;
        }

        &-id {
            grid-area: id;
        }

        ${props => mainCellAreas(props.mainCellCount, props.hasCheckbox)};
        ${props => basicCellAreas(props.notMainCellCount)};
    }
`;

const openStyle = css`
    height: auto;
    padding-top: ${props => props.theme.space.xs};
    padding-bottom: ${props => props.theme.space.xs};
    opacity: 1;
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

const activeStyle = css`
    background-color: ${props => props.theme.wab.grey10} !important;
    box-shadow: none !important;
`;

const loadingStyle = css`
    @media ${props => props.theme.screen.max.lg} {
        .cell-basic {
            display: none;
        }
    }
`;

export { cellsAreas, openStyle, hoverStyle, activeStyle, loadingStyle };
