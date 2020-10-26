import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    listStyleOptions,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    iconSizeOptions,
    iconSizeDefault,
    decorationOptions,
    iconHtmlTagOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import { LeafIcon, CheckBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';
import ListItem from './ListItem';

const colorThemeLabel = 'Color theme';

storiesOf(folder.list + 'ListItem', module)
    .addDecorator(withKnobs)
    .add('ListItem with Icon', () => (
        <ListItem
            htmlTag={iconHtmlTagOptions.button}
            isClicked={boolean('Is active', false)}
            arrowStyle={radios(
                'Arrow (if active)',
                decorationOptions,
                decorationOptions.right,
            )}
            bulletStyle={listStyleOptions.icon}
            colorTheme={radios(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
        >
            <LeafIcon
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />

            <Title
                colorPallet={colorPalletOptions.theme}
                colorTheme={radios(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            >
                First content
            </Title>

            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </ListItem>
    ))
    .add('ListItem with check', () => (
        <ListItem
            bulletStyle={listStyleOptions.icon}
            bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
        >
            <CheckBoldIcon />

            <Text>First content</Text>
        </ListItem>
    ))
    .add('ListItem with dash', () => (
        <ListItem
            colorTheme={radios(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
        >
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </ListItem>
    ))
    .add('ListItem with number', () => (
        <ListItem
            bulletStyle={listStyleOptions.number}
            colorTheme={radios(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select('Bullet size', iconSizeOptions, iconSizeDefault)}
        >
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </ListItem>
    ));
