function gridTemplateTop(mainCount, hasCheckbox) {
    let template = '';

    for (let i = 1; i < mainCount; i++) {
        template += ' main-' + i;
    }

    template += hasCheckbox ? ' checkbox' : ' main-' + mainCount;

    return '"' + template.trim() + '"';
}

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

function gridTemplate(mainCount, notMainCount, hasCheckbox) {
    return (
        gridTemplateTop(mainCount, hasCheckbox) +
        ' ' +
        gridTemplateBottom(mainCount, notMainCount)
    );
}

function gridColumns(mainCount, hasCheckbox, hasId) {
    const idCell = hasId ? 'auto ' : '';
    const checkboxCell = hasCheckbox ? ' min-content' : '';
    let basicCells = parseInt(mainCount);

    if (hasCheckbox) {
        basicCells--;
    }

    if (hasId) {
        basicCells--;
    }

    return idCell + 'repeat(' + basicCells + ', 1fr)' + checkboxCell;
}

export { gridTemplate, gridColumns };
