import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, radios, select } from '@storybook/addon-knobs';
import {
    folder,
    decorationOptions,
    decorationDefault,
    colorThemeOptions,
    colorThemeDefault,
    spaceOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Divider from './Divider';

storiesOf(folder.grid + 'Divider', module)
    .addDecorator(withKnobs)
    .add('Divider', () => (
        <Divider
            waveStyle={radios(
                labels.waveDirection,
                decorationOptions,
                decorationDefault,
            )}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            text={text(labels.text, 'Your text')}
            marginTop={select(labels.marginTop, spaceOptions, spaceOptions.md)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
