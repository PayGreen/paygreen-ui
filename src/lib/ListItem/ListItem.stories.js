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
import labels from '../../shared/labels';
import { LeafIcon, CheckBoldIcon } from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';
import ListItem from './ListItem';

storiesOf(folder.list + 'ListItem', module)
    .addDecorator(withKnobs)
    .add('ListItem with Icon', () => (
        <ListItem
            htmlTag={iconHtmlTagOptions.button}
            isClicked={boolean(labels.isActive, false)}
            arrowStyle={radios(
                'Arrow (if active)',
                decorationOptions,
                decorationOptions.right,
            )}
            bulletStyle={listStyleOptions.icon}
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            <LeafIcon
                colorTheme={radios(
                    labels.colorTheme,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
            />

            <Title
                colorPallet={colorPalletOptions.theme}
                colorTheme={radios(
                    labels.colorTheme,
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
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
        >
            <CheckBoldIcon />

            <Text>First content</Text>
        </ListItem>
    ))
    .add('ListItem with dash', () => (
        <ListItem
            colorTheme={radios(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
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
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
        >
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
        </ListItem>
    ));
