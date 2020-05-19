import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    select,
    text,
    radios,
    boolean,
} from '@storybook/addon-knobs';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import Text from '../Text/Text';
import Link from './Link';

const colorTypeLabel = 'Color type';

storiesOf(folder.main + 'Link', module)
    .addDecorator(withKnobs)
    .add(
        'Link',
        () => (
            <Text
                colorType={radios(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
            >
                <a href="#">
                    <Link
                        colorType={radios(
                            colorTypeLabel,
                            colorTypeOptions,
                            colorTypeDefault,
                        )}
                        colorPallet={radios(
                            'Color pallet',
                            colorPalletOptions,
                            colorPalletDefault,
                        )}
                        colorTheme={select(
                            'Color theme',
                            colorThemeOptions,
                            colorThemeDefault,
                        )}
                        colorWab={select(
                            'Grey color',
                            greyOptions,
                            greyDefault,
                        )}
                        colorStatus={select(
                            'Status color',
                            formStatusOptions,
                            formStatusDefault,
                        )}
                        hasUnderline={boolean('Has underline', true)}
                        hasHover={boolean('Has hover', true)}
                        hasUppercase={boolean('Uppercase', false)}
                        paddingTop={select(
                            'Padding top',
                            spaceOptions,
                            spaceDefault,
                        )}
                        paddingBottom={select(
                            'Padding bottom',
                            spaceOptions,
                            spaceDefault,
                        )}
                        paddingLeft={select(
                            'Padding left',
                            spaceOptions,
                            spaceDefault,
                        )}
                        paddingRight={select(
                            'Padding right',
                            spaceOptions,
                            spaceDefault,
                        )}
                    >
                        {text('Label', 'Link text')}
                    </Link>
                </a>{' '}
                curabitur congue varius ex et posuere. Maecenas tincidunt diam
                ut nisl porttitor scelerisque. Donec egestas elit dolor, quis
                eleifend ipsum sagittis ut. Proin molestie lorem et neque tempus
                tristique. Mauris finibus dui sem, nec suscipit mi porta a.
            </Text>
        ),
        {
            notes: 'Link can be used inside Text component.',
        },
    );
