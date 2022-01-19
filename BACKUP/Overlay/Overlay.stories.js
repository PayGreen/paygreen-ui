import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    gradientOptions,
    gradientDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Overlay from './Overlay';

storiesOf(folder.popup + 'Overlay', module)
    .addDecorator(withKnobs)
    .add('Overlay', () => (
        <>
            <Text>Some text ...</Text>

            <Overlay
                gradient={select(
                    labels.gradient,
                    gradientOptions,
                    gradientDefault,
                )}
                colorTheme={select(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(
                    labels.colorWab,
                    greyOptions,
                    greyOptions.black00,
                )}
                zindex={number('Z index', 0)}
                opacityValue={number(labels.opacityValue, 60)}
            />
        </>
    ));
