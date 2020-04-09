import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import Loader from './Loader';

storiesOf(folder.main + 'Loader', module)
    .addDecorator(withKnobs)
    .add('Loader', () => (
        <Loader
            isActive={boolean('Is active', true)}
            colorTheme={radios(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
