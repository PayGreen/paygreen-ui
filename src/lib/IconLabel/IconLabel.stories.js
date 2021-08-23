import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { OutIcon } from '../Icon/Icon';
import IconLabel from './IconLabel';

storiesOf(folder.text + 'IconLabel', module)
    .addDecorator(withKnobs)
    .add('IconLabel', () => (
        <IconLabel
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
            marginLeft={select(labels.marginLeft, spaceOptions, spaceDefault)}
            marginRight={select(labels.marginRight, spaceOptions, spaceDefault)}
        >
            <OutIcon
                iconSize={iconSizeOptions.xs}
                marginRight={spaceOptions.xs}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />

            {text(labels.text, 'Sample')}
        </IconLabel>
    ));
