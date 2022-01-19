import { colorPalletOptions } from '../../../shared/constants';

const colorStyle = {
    main: props => props.theme.wab.white00,
    light: props =>
        props.theme[
            props.colorPallet === colorPalletOptions.theme
                ? 'color'
                : props.colorPallet
        ][
            props.colorPallet === colorPalletOptions.theme
                ? props.colorTheme
                : props.colorStatus
        ].main,
};

export { colorStyle };
