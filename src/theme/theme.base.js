const responsive = {
    sm: 550,
    md: 960,
    lg: 1200,
    xl: 1360,
};

const query = (value, operator) => {
    if (operator == 'max') {
        value -= 1;
    }
    return operator + '-width: ' + value + 'px';
}

export const ThemeBase = {
    name: 'Base',
    color: {
        primary: {
            main: '#33ad73',
            light: '#d5f3e5',
            gradientBase: '#77d1a6',
            gradientShade: '#a4db95',
        },
        secondary: {
            main: '#00a99d',
            light: '#e1f3f2',
            gradientBase: '#51c6be',
            gradientShade: '#76bbd8',
        },
        tertiary: {
            main: '#e58a28',
            light: '#f8e1c7',
            gradientBase: '#fab56b',
            gradientShade: '#faa272',
        },
        quaternary: {
            main: '#ec6a6a',
            light: '#f8d1d2',
            gradientBase: '#e98e90',
            gradientShade: '#e98eb9',
        },

        state: {
            success: '#33ad73',
            default: '#00a99d',
            warning: '#e58a28',
            danger: '#b54025',
        },
    },
    font: {
        size: {
            xxs: '1.2rem',
            xs: '1.4rem',
            sm: '1.6rem',
            base: '1.8rem',
            md: '2.1rem',
            lg: '3rem',
            xl: '4rem',
        },
        weight: {
            normal: 400,
            bold: 700,
        },
        spacing: '0.3em',
        underline: {
            space: {
                xxs: '10px',
                xs: '10px',
                sm: '12px',
                base: '12px',
                md: '12px',
                lg: '24px',
                xl: '24px',
            },
            line: {
                xxs: '2px',
                xs: '2px',
                sm: '2px',
                base: '2px',
                md: '2px',
                lg: '3px',
                xl: '3px',
            },
            width: {
                xxs: '40px',
                xs: '40px',
                sm: '50px',
                base: '50px',
                md: '65px',
                lg: '80px',
                xl: '80px',
            },
        },
    },
    line: '2px',
    radius: {
        none: '0',
        sm: '4px',
        lg: '12px',
    },
    space: {
        none: '0',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
    },
    blockSpace: {
        none: '0',
        xs: '16px',
        sm: '24px',
        md: '40px',
        lg: '52px',
        xl: '68px',
    },
    blockWidth: {
        sm: '400px',
        md: '560px',
        lg: '640px',
        xl: '760px',
    },
    blockHeader: {
        sm: '140px',
        md: '180px',
        lg: '210px',
        xl: '240px',
    },
    imageSize: {
        auto: 'auto',
        xs: '240px',
        sm: '400px',
        md: '560px',
        lg: '640px',
        xl: '760px',
    },
    transition: {
        xs: '0.2s',
        sm: '0.3s',
    },
    zindex: {
        hidden: -100,
        button: -5,
        base: 0,
        front: 5,
    },
    query: {
        min: {
            sm: query(responsive.sm, 'min'),
            md: query(responsive.md, 'min'),
            lg: query(responsive.lg, 'min'),
            xl: query(responsive.xl, 'min'),
        },
        max: {
            sm: query(responsive.sm, 'max'),
            md: query(responsive.md, 'max'),
            lg: query(responsive.lg, 'max'),
            xl: query(responsive.xl, 'max'),
        },
    },
    button: {
        paddingWidth: {
            sm: '22px',
            md: '26px',
            lg: '29px',
        },
        paddingHeight: {
            sm: '13px',
            md: '16px',
            lg: '19px',
        },
        shift: '3px',
        font: {
            sm: '1.2rem',
            md: '1.4rem',
            lg: '1.5rem',
        },
        letterSpacing: {
            sm: '0.3rem',
            md: '0.4rem',
            lg: '0.45rem',
        },
    },
    form: {
        inputWidth: {
            sm: '330px',
            md: '400px',
            lg: '500px',
        },
        textareaHeight: '200px',
    },
    shadow: {
        size: {
            none: '0 0 0',
            sm: '1px 1px 10px',
            md: '2px 2px 15px',
            lg: '3px 3px 20px'
        },
        opacity: {
            none: 1,
            sm: 0.9,
            md: 0.8,
            lg: 0.7
        }
    }
};