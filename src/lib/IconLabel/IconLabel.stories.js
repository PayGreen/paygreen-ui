import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { OutIcon } from '../Icon/Icon';
import IconLabel from './IconLabel';

const { wab, ...buttonColorPalletOptions } = colorPalletOptions;

storiesOf(folder.text + 'IconLabel', module)
    .addDecorator(withKnobs)
    .add('IconLabel', () => (
        <IconLabel
            colorPallet={radios(
                labels.colorPallet,
                buttonColorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
            marginLeft={select(labels.marginLeft, spaceOptions, spaceDefault)}
            marginRight={select(labels.marginRight, spaceOptions, spaceDefault)}
            icon={<OutIcon />}
        >
            {text(labels.text, 'Sample')}
        </IconLabel>
    ));
