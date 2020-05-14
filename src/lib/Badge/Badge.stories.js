import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    select,
    radios,
} from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    blockWidthOptions,
} from '../../shared/constants';
import { ArrowBottomIcon } from '../Icon/Icon';
import Badge from './Badge';

storiesOf(folder.main + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            isWhite={boolean('White', false)}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                'Gradient type',
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select(
                'Size',
                blockWidthOptions,
                blockWidthOptions.sm,
            )}
        >
            {text('Text', 'Example')}
            <ArrowBottomIcon
                colorPallet={boolean('White', false) ? 'theme' : 'wab'}
                colorWab="white00"
                colorTheme={select(
                    'Color theme',
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                iconSize={select(
                    'Size',
                    blockWidthOptions,
                    blockWidthOptions.sm,
                )}
            />
        </Badge>
    ));
