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
import Overlay from './Overlay';
import Text from '../Text/Text';

storiesOf(folder.popup + 'Overlay', module)
    .addDecorator(withKnobs)
    .add('Overlay', () => (
        <>
            <Text>Some text ...</Text>
            <Overlay
                gradient={select('Gradient', gradientOptions, gradientDefault)}
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(
                    'Grey color',
                    greyOptions,
                    greyOptions.black00,
                )}
                zindex={number('Z index', 0)}
                opacityValue={number('Opacity', 60)}
            />
        </>
    ));
