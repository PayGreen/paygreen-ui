import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    gradientOptions,
    gradientDefault,
    colorThemeOptions,
    colorThemeDefault,
} from '../../shared/constants';
import Overlay from './Overlay';
import Text from '../Text/Text';

const gradientLabel = 'Gradient';
const colorThemeLabel = 'Color theme';
const zindexLabel = 'Z index';
const opacityValueLabel = 'Opacity';

storiesOf(folder.main + 'Overlay', module)
    .addDecorator(withKnobs)
    .add('Overlay', () => (
        <>
            <Text>Some text ...</Text>
            <Overlay
                gradient={select(
                    gradientLabel,
                    gradientOptions,
                    gradientDefault,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                zindex={number(zindexLabel, 0)}
                opacityValue={number(opacityValueLabel, 60)}
            />
        </>
    ));
