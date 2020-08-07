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
};

const pallet = {
    green: {
        main: '#33ad73',
        light: '#d5f3e5',
    },
    blue: {
        main: '#00a99d',
        light: '#e1f3f2',
    },
    orange: {
        main: '#e58a28',
        light: '#fbe6ce',
    },
};

export const ThemeBase = {
    name: 'Base',
    color: {
        primary: {
            ...pallet.green,
            gradientBase: '#77d1a6',
            gradientShade: '#a4db95',
        },
        secondary: {
            ...pallet.blue,
            gradientBase: '#51c6be',
            gradientShade: '#76bbd8',
        },
        tertiary: {
            ...pallet.orange,
            gradientBase: '#fab56b',
            gradientShade: '#faa272',
        },
        quaternary: {
            main: '#ec6a6a',
            light: '#ffe0e1',
            gradientBase: '#e98e90',
            gradientShade: '#e98eb9',
        },
        quinary: {
            main: '#a26ae1',
            light: '#e9d9fb',
            gradientBase: '#b887ee',
            gradientShade: '#dd94ef',
        },
    },
    status: {
        success: {
            ...pallet.green,
        },
        default: {
            ...pallet.blue,
        },
        warning: {
            ...pallet.orange,
        },
        danger: {
            main: '#b54025',
            light: '#f7d7d0',
        },
    },
    font: {
        size: {
            tiny: '1rem',
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
        lineHeight: {
            base: 1,
            md: 1.5,
        },
        spacing: '0.3em',
        underline: {
            space: {
                tiny: '8px',
                xxs: '10px',
                xs: '10px',
                sm: '12px',
                base: '12px',
                md: '12px',
                lg: '24px',
                xl: '24px',
            },
            line: {
                tiny: '2px',
                xxs: '2px',
                xs: '2px',
                sm: '2px',
                base: '2px',
                md: '2px',
                lg: '3px',
                xl: '3px',
            },
            width: {
                tiny: '30px',
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
    dash: '3px',
    radius: {
        none: '0',
        sm: '4px',
        md: '8px',
        lg: '12px',
    },
    arrow: {
        sm: '8px',
        md: '12px',
        lg: '16px',
    },
    space: {
        none: '0',
        xs: '4px',
        sm: '8px',
        md: '16px',
        lg: '32px',
        xl: '64px',
    },
    grid: {
        header: '45px',
        headerBig: '70px',
        topbar: '45px',
        sidebar: '380px',
        maxWidth: '1400px',
    },
    blockShift: {
        none: '0',
        xs: '64px',
        sm: '128px',
        md: '256px',
        lg: '320px',
        xl: '384px',
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
        xl: '800px',
    },
    blockHeader: {
        sm: '140px',
        md: '180px',
        lg: '210px',
        xl: '240px',
    },
    bannerHeight: {
        xs: '33vh',
        sm: '50vh',
        lg: '100vh',
    },
    wave: {
        simple: '8vw',
        double: '11vw',
    },
    icon: {
        size: {
            xxs: '12px',
            xs: '16px',
            sm: '20px',
            md: '24px',
            lg: '32px',
            xl: '40px',
        },
        shift: {
            xxs: '2px',
            xs: '3px',
            sm: '4px',
            md: '4px',
            lg: '6px',
            xl: '6px',
        },
    },
    imageSize: {
        auto: 'auto',
        xxs: '150px',
        xs: '240px',
        sm: '400px',
        md: '560px',
        lg: '640px',
        xl: '760px',
    },
    imageCircleSize: {
        auto: 'auto',
        xxs: '38px',
        xs: '60px',
        sm: '80px',
        md: '100px',
        lg: '120px',
        xl: '140px',
    },
    logoHeight: {
        none: 'auto',
        xs: '20px',
        sm: '30px',
        md: '40px',
        lg: '50px',
        xl: '60px',
    },
    logoWidth: {
        none: 'auto',
        xs: '90px',
        sm: '120px',
        md: '150px',
        lg: '200px',
        xl: '250px',
    },
    loaderSize: {
        xxs: '40px',
        xs: '50px',
        sm: '60px',
        md: '70px',
        lg: '80px',
        xl: '90px',
    },
    transition: {
        xxs: '0.1s',
        xs: '0.2s',
        sm: '0.3s',
        md: '0.5s',
        lg: '0.7s',
        xl: '1s',
    },
    zindex: {
        hidden: -100,
        layer: -5,
        background: -1,
        base: 0,
        content: 1,
        corner: 3,
        front: 5,
        loader: 90,
        subHeader: 100,
        menu: 105,
        header: 110,
        popin: 115,
        modal: 120,
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
            lg: '30px',
        },
        paddingHeight: {
            sm: '12px',
            md: '14px',
            lg: '16px',
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
    daButton: {
        buttonHeight: {
            sm: '32px',
            md: '38px',
            lg: '44px',
        },
        shift: {
            sm: '2px',
            md: '4px',
            lg: '6px',
        },
        font: {
            sm: '1.35rem',
            md: '1.4rem',
            lg: '1.7rem',
        },
        iconSpacing: {
            sm: '0.9rem',
            md: '1rem',
            lg: '1.1rem',
        },
    },
    form: {
        inputWidth: {
            xs: '260px',
            sm: '330px',
            md: '400px',
            lg: '500px',
        },
        textareaHeight: '200px',
        radio: {
            md: '120px',
            lg: '150px',
        },
        checkboxSize: {
            sm: '18px',
            md: '20px',
            lg: '22px',
        },
        radioButtonSize: {
            sm: '19px',
            md: '21px',
            lg: '23px',
        },
        radioButtonSpace: {
            sm: '8px',
            md: '10px',
            lg: '10px',
        },
        toggle: '30px',
    },
    corner: {
        size: {
            lg: '34px',
        },
        padding: {
            lg: '6px',
        },
    },
    shadow: {
        size: {
            none: '0 0 0',
            xs: '1px 1px 5px',
            sm: '1px 1px 10px',
            md: '2px 2px 15px',
            lg: '3px 3px 20px',
        },
        opacity: {
            none: 1,
            xs: 0.95,
            sm: 0.9,
            md: 0.8,
            lg: 0.7,
        },
    },
    rotateSize: {
        d0: '0deg',
        d45: '45deg',
        d90: '90deg',
        d135: '135deg',
        d180: '180deg',
        d225: '225deg',
        d270: '270deg',
        d315: '315deg',
    },
    dataBar: {
        height: '10px',
        width: {
            sm: '300px',
            md: '400px',
            lg: '500px',
            xl: '600px',
        },
    },
};
