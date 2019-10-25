const responsive = {
    sm: 550,
    md: 960,
    lg: 1200,
    xl: 1360,
};

const querie = (value, operator) => {
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

        white00: '#ffffff',
        white10: '#fafafa',
        white20: '#f6f6f6',

        grey10: '#eeeeee',
        grey20: '#dbdbdb',
        grey30: '#aaaaaa',
        grey40: '#858585',
        grey50: '#636363',
        grey60: '#434343',

        black00: '#000000',
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
            ultra: 800,
        }
    },
    line: '2px',
    radius: {
        sm: '4px',
        lg: '12px',
    },
    space: {
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
    },
    width: {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: '',
    },
    transition: {
        xs: '0.2s',
        sm: '0.3s',
    },
    animation: {

    },
    zindex: {
        hidden: -100,
        button: -5,
        base: 0,
    },
    querie: {
        min: {
            sm: querie(responsive.sm, 'min'),
            md: querie(responsive.md, 'min'),
            lg: querie(responsive.lg, 'min'),
            xl: querie(responsive.xl, 'min'),
        },
        max: {
            sm: querie(responsive.sm, 'max'),
            md: querie(responsive.md, 'max'),
            lg: querie(responsive.lg, 'max'),
            xl: querie(responsive.xl, 'max'),
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
        shift: '-3px',
        margin: '10px',
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

    },
};