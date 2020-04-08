import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import AnimPlane from './AnimPlane';

storiesOf(folder.media + 'AnimPlane', module)
    .addDecorator(withKnobs)
    .add('AnimPlane', () => (
        <AnimPlane
            colorTheme={radios(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
        />
    ));
