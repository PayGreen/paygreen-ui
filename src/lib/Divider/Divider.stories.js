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
import Divider from './Divider';

storiesOf(folder.main + 'Divider', module)
    .addDecorator(withKnobs)
    .add('Divider', () => (
        <Divider
            waveStyle={radios(
                'Wave direction',
                decorationOptions,
                decorationDefault,
            )}
            colorTheme={radios(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            text={text('Text', 'Your text')}
            marginTop={select('Margin top', spaceOptions, spaceOptions.md)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.md,
            )}
        />
    ));
