import React from 'react';
import {
    folder,
    cornerStyleOptions,
    lateralPositionOptions,
    lateralPositionDefault,
    radiusOptions,
    radiusDefault,
    colorStyleOptions,
    colorStyleDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { QuestionBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';
import Corner from './Corner';

const { wab, ...cornerColorPalletOptions } = colorPalletOptions;

export default {
    title: folder.block + 'Corner',
    argTypes: {
        position: {
            name: labels.position,
            options: Object.values(lateralPositionOptions),
            control: 'radio',
        },
        colorStyle: {
            name: labels.colorStyle,
            options: Object.values(colorStyleOptions),
            control: 'radio',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(cornerColorPalletOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
    },
    args: {
        position: lateralPositionDefault,
        colorStyle: colorStyleDefault,
        colorPallet: colorPalletDefault,
        colorTheme: colorThemeDefault,
        colorStatus: formStatusDefault,
    },
};

export const CornerBanner = args => (
    <Corner {...args} cornerStyle={cornerStyleOptions.banner} />
);

CornerBanner.argTypes = {
    label: {
        name: labels.label,
        control: 'text',
    },
};

CornerBanner.args = {
    label: 'Corner',
};

export const CornerSquareWithPopin = args => (
    <Corner {...args} label={<QuestionBoldIcon />}>
        <Popin>
            <Text
                marginTop={spaceOptions.xs}
                marginLateral={spaceOptions.xs}
                marginBottom={spaceOptions.xs}
                textSize={fontSizeOptions.xs}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </Popin>
    </Corner>
);

CornerSquareWithPopin.argTypes = {
    hasCenteredPopin: {
        name: 'Has centered Popin',
        control: 'boolean',
    },
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'select',
    },
};

CornerSquareWithPopin.args = {
    hasCenteredPopin: false,
    radiusSize: radiusDefault,
};
