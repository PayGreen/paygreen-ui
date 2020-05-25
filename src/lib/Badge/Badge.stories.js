import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, radios, text } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    gradientOptions,
    colorTypeOptions,
    colorTypeDefault,
    fontSizeOptions,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import Badge from './Badge';
import { ArrowBottomIcon } from '../Icon/Icon';

const colorTypeLabel = 'Color type';
const colorThemeLabel = 'Color theme';
const gradientTypeLabel = 'Gradient type';
const textSizeLabel = 'Text size';
const textLabel = 'Text';
const iconSizeLabel = 'Icon size';

storiesOf(folder.main + 'Badge', module)
    .addDecorator(withKnobs)
    .add('Badge', () => (
        <Badge
            colorType={select(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
            colorTheme={select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            gradient={radios(
                gradientTypeLabel,
                gradientOptions,
                gradientOptions.theme,
            )}
            textSize={select(
                textSizeLabel,
                fontSizeOptions,
                fontSizeOptions.xxs,
            )}
        >
            {text(textLabel, 'Example')}

            <ArrowBottomIcon
                iconSize={select(
                    iconSizeLabel,
                    iconSizeOptions,
                    iconSizeOptions.sm,
                )}
                marginLeft={spaceOptions.xs}
            />
        </Badge>
    ));
