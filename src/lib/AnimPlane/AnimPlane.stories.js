import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import AnimPlane from './AnimPlane';

storiesOf(folder.media + 'AnimPlane', module)
    .addDecorator(withKnobs)
    .add('AnimPlane', () => (
        <AnimPlane
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            isActive={boolean(labels.isActive, false)}
        />
    ));
