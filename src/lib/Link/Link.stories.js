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
const paddingTopLabel = 'Padding top';
const paddingBottomLabel = 'Padding bottom';
const paddingLeftLabel = 'Padding left';
const paddingRightLabel = 'Padding right';

storiesOf(folder.main + 'Link', module)
    .addDecorator(withKnobs)
    .add(
        'Link in Text',
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
                        hasUppercase={boolean('Uppercase', false)}
                    >
                        {text('Label', 'Link text')}
                    </Link>
                </a>{' '}
                curabitur congue varius ex et posuere. Maecenas tincidunt diam
                ut nisl porttitor scelerisque. Donec egestas elit dolor, quis
                eleifend ipsum sagittis ut. Proin molestie lorem et neque tempus
                tristique. Mauris finibus dui sem, nec suscipit mi porta a.
            </Text>
        )
    )
    .add(
        'List of Links',
        () => (
            <>
                <a href="#">
                    <Link
                        colorTheme={colorThemeOptions.secondary}
                        hasUnderline={false}
                        paddingTop={select(
                            paddingTopLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingBottom={select(
                            paddingBottomLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingLeft={select(
                            paddingLeftLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingRight={select(
                            paddingRightLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                    >
                        First link
                    </Link>
                </a>

                <a href="#">
                    <Link
                        colorTheme={colorThemeOptions.tertiary}
                        hasUnderline={false}
                        paddingTop={select(
                            paddingTopLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingBottom={select(
                            paddingBottomLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingLeft={select(
                            paddingLeftLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                        paddingRight={select(
                            paddingRightLabel,
                            spaceOptions,
                            spaceOptions.sm,
                        )}
                    >
                        Second link
                    </Link>
                </a>
            </>
        )
    );
