import { css } from 'styled-components';

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

export {
    cellsAreas
}
