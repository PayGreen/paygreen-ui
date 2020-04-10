import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    select,
    radios,
    text,
} from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    blockWidthOptions,
} from '../../shared/constants';
import Logo from './Logo';
import { logo } from './sample/logo';

storiesOf(folder.media + 'Logo', module)
    .addDecorator(withKnobs)
    .add('Logo', () => (
        <a href="#">
            <Logo
                text={text('Text', '')}
                hasBaseline={boolean('With baseline', true)}
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
                isWhite={boolean('White', false)}
                hasHoverRight={boolean('Hover right', true)}
                hasHoverTop={boolean('Hover top', false)}
                hasHoverColor={boolean('Hover color', false)}
                blockWidth={select('Width', spaceOptions, spaceOptions.md)}
                blockHeight={select('Height', spaceOptions, spaceOptions.none)}
                textSize={select(
                    'Text size',
                    blockWidthOptions,
                    blockWidthOptions.sm,
                )}
            >
                {logo}
            </Logo>
        </a>
    ));
