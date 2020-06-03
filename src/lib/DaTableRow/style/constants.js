/**
 * Return main cells' number without checkbox and id cells
 * 
 * @param {number} mainCount 
 * @param {boolean} hasCheckbox 
 * @param {boolean} hasId 
 */
function mainCellsCount(mainCount, hasCheckbox, hasId) {
    let mainCells = mainCount;

    if (hasCheckbox) {
        mainCells--;
    }

    if (hasId) {
        mainCells--;
    }

    return mainCells;
}

/**
 * Return first part of grid-template-areas
 * 
 * @param {number} mainCount 
 * @param {boolean} hasCheckbox 
 * @param {boolean} hasId 
 */
function gridTemplateTop(mainCount, hasCheckbox, hasId) {
    const mainCells = mainCellsCount(mainCount, hasCheckbox, hasId);
    let template = hasId ? 'id' : '';

    for (let i = 1; i <= mainCells; i++) {
        template += ' main-' + i;
    }

    template += hasCheckbox ? ' checkbox' : '';

    return '"' + template.trim() + '"';
}

/**
 * Return lasts parts of grid-template-areas
 * 
 * @param {number} mainCount 
 * @param {number} notMainCount 
 */
function gridTemplateBottom(mainCount, notMainCount) {
    let template = '';

    for (let i = 1; i <= notMainCount; i++) {
        let row = '';

        for (let j = 1; j <= mainCount; j++) {
            row += ' basic-' + i;
        }

        template += ' "' + row.trim() + '"';
    }

    return template.trim();
}

/**
 * Return all grid-template-areas value for CSS
 * 
 * @param {number} mainCount 
 * @param {number} notMainCount 
 * @param {boolean} hasCheckbox 
 * @param {boolean} hasId 
 */
function gridTemplate(mainCount, notMainCount, hasCheckbox, hasId) {
    return (
        gridTemplateTop(mainCount, hasCheckbox, hasId) +
        ' ' +
        gridTemplateBottom(mainCount, notMainCount)
    );
}

/**
 * Return grid-template-columns
 * 
 * @param {number} mainCount 
 * @param {boolean} hasCheckbox 
 * @param {boolean} hasId 
 */
function gridColumns(mainCount, hasCheckbox, hasId) {
    const mainCells = mainCellsCount(mainCount, hasCheckbox, hasId);
    const idCell = hasId ? 'auto ' : '';
    const checkboxCell = hasCheckbox ? ' min-content' : '';

    return idCell + 'repeat(' + mainCells + ', 1fr)' + checkboxCell;
}

export { gridTemplate, gridColumns };
