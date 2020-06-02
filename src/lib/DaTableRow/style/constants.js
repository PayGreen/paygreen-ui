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

export { gridTemplate };
