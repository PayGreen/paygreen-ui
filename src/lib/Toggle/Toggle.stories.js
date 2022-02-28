import React from 'react';

import {
    folder,
    buttonSizeOptions,
    buttonSizeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { BulbIcon, BeakerIcon } from '../Icon/Icon';
import Toggle from './Toggle';

export default {
    title: folder.form + 'Toggle',
    argTypes: {
        disabled: {
            name: labels.disabled,
            control: 'boolean',
            defaultValue: false,
        },
        checkedLabel: {
            name: 'Checked label',
            control: 'text',
            defaultValue: 'Yes',
        },
        notCheckedLabel: {
            name: 'Not checked label',
            control: 'text',
            defaultValue: 'No',
        },
        fieldSize: {
            name: labels.fieldSize,
            options: Object.values(buttonSizeOptions),
            control: 'select',
            defaultValue: buttonSizeDefault,
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
            defaultValue: colorPalletOptions.status,
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
            defaultValue: colorThemeDefault,
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
            defaultValue: greyDefault,
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
            defaultValue: formStatusOptions.success,
        },
    },
};

export const ToggleAutoColors = ({ ...args }) => {
    return <Toggle {...args} />;
};

ToggleAutoColors.argTypes = {};

export const ToggleCustomColors = ({
    colorPalletSelected,
    colorPalletNotSelected,
    colorThemeSelected,
    colorThemeNotSelected,
    colorWabSelected,
    colorWabNotSelected,
    colorStatusSelected,
    colorStatusNotSelected,
    ...args
}) => {
    return (
        <Toggle
            {...args}
            checkedLabel={<BulbIcon />}
            notCheckedLabel={<BeakerIcon />}
            colorPallet={{
                checked: colorPalletSelected,
                notChecked: colorPalletNotSelected,
            }}
            colorTheme={{
                checked: colorThemeSelected,
                notChecked: colorThemeNotSelected,
            }}
            colorWab={{
                checked: colorWabSelected,
                notChecked: colorWabNotSelected,
            }}
            colorStatus={{
                checked: colorStatusSelected,
                notChecked: colorStatusNotSelected,
            }}
        />
    );
};

ToggleCustomColors.argTypes = {
    colorPalletSelected: {
        name: labels.colorPallet + ' checked',
        options: Object.values(colorPalletOptions),
        control: 'radio',
        defaultValue: colorPalletOptions.status,
    },
    colorPalletNotSelected: {
        name: labels.colorPallet + ' not checked',
        options: Object.values(colorPalletOptions),
        control: 'radio',
        defaultValue: colorPalletOptions.wab,
    },
    colorThemeSelected: {
        name: labels.colorTheme + ' checked',
        options: Object.values(colorThemeOptions),
        control: 'select',
        defaultValue: colorThemeDefault,
    },
    colorThemeNotSelected: {
        name: labels.colorTheme + ' not checked',
        options: Object.values(colorThemeOptions),
        control: 'select',
        defaultValue: colorThemeDefault,
    },
    colorWabSelected: {
        name: labels.colorWab + ' checked',
        options: Object.values(greyOptions),
        control: 'select',
        defaultValue: greyDefault,
    },
    colorWabNotSelected: {
        name: labels.colorWab + ' not checked',
        options: Object.values(greyOptions),
        control: 'select',
        defaultValue: greyDefault,
    },
    colorStatusSelected: {
        name: labels.colorStatus + ' checked',
        options: Object.values(formStatusOptions),
        control: 'select',
        defaultValue: formStatusOptions.success,
    },
    colorStatusNotSelected: {
        name: labels.colorStatus + ' not checked',
        options: Object.values(formStatusOptions),
        control: 'select',
        defaultValue: formStatusOptions.danger,
    },
};
