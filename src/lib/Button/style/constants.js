const colorCollection = {
    main: props => props.theme.color[props.colorTheme].main,
    white: props => props.theme.wab.white00,
    lightGrey: props => props.theme.wab.white20,
    grey: props => props.theme.wab.grey30,
};

const buttonColors = {
    text: {
        fill: {
            original: {
                enabled: colorCollection.white,
                disabled: colorCollection.lightGrey,
            },
            reverse: {
                enabled: colorCollection.main,
                disabled: colorCollection.grey,
            },
        },
        line: {
            original: {
                enabled: colorCollection.main,
                disabled: colorCollection.grey,
            },
            reverse: {
                enabled: colorCollection.white,
                disabled: colorCollection.grey,
            },
        },
    },
    bg: {
        fill: {
            original: {
                enabled: colorCollection.main,
                disabled: colorCollection.grey,
            },
            reverse: {
                enabled: colorCollection.white,
                disabled: colorCollection.grey,
            },
        },
        line: {
            original: {
                enabled: colorCollection.main,
                disabled: colorCollection.grey,
            },
            reverse: {
                enabled: colorCollection.white,
                disabled: colorCollection.grey,
            },
        },
    },
};

const enableType = props => (props.isDisabled ? 'disabled' : 'enabled');

const opacity = {
    original: 0.5,
    reverse: 0.6,
};

export { buttonColors, enableType, opacity };
