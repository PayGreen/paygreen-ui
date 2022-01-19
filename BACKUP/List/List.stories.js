import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, radios, select, boolean } from '@storybook/addon-knobs';
import {
    folder,
    listStyleOptions,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    spaceOptions,
    spaceDefault,
    iconSizeOptions,
    iconSizeDefault,
    iconHtmlTagOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import {
    LeafIcon,
    CardsIcon,
    OrganizationIcon,
    MealIcon,
    CheckBoldIcon,
} from '../Icon/Icon';
import Text from '../Text/Text';
import Title from '../Title/Title';
import ListItem from '../ListItem/ListItem';
import List from './List';

const sampleWithIcons = [
    {
        icon: <LeafIcon />,
        main: 'First content',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        icon: <CardsIcon />,
        main: 'Second content',
        details: 'Lorem ipsum dolor sit amet.',
    },
    {
        icon: <OrganizationIcon />,
        main: 'Third content',
        details:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, consectetur adipiscing elit.',
    },
    {
        icon: <MealIcon />,
        main: 'Fourth content',
        details: 'Lorem ipsum dolor sit amet consectetur.',
    },
];

const sampleBasic = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing',
    'Lorem ipsum dolor sit amet',
    'Lorem ipsum dolor sit amet consectetur',
    'Lorem ipsum dolor sit adipiscing',
];

storiesOf(folder.list + folder.sub.list + 'List', module)
    .addDecorator(withKnobs)
    .add('List with icons', () => (
        <List
            listStyle={listStyleOptions.icon}
            hasDashed={boolean('Dashed lines (on desktop)', false)}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
            marginLateral={select(
                labels.marginLateral,
                spaceOptions,
                spaceDefault,
            )}
            marginTop={select(labels.marginTop, spaceOptions, spaceDefault)}
            marginBottom={select(
                labels.marginBottom,
                spaceOptions,
                spaceDefault,
            )}
        >
            {sampleWithIcons.map((element, index) => (
                <ListItem
                    key={index}
                    htmlTag={iconHtmlTagOptions.button}
                    bulletStyle={listStyleOptions.icon}
                    bulletSize={select(
                        labels.bulletSize,
                        iconSizeOptions,
                        iconSizeDefault,
                    )}
                >
                    {element.icon}

                    <Title colorPallet={colorPalletOptions.theme}>
                        {element.main}
                    </Title>

                    <Text>{element.details}</Text>
                </ListItem>
            ))}
        </List>
    ))
    .add('List with check', () => (
        <List
            listStyle={listStyleOptions.icon}
            hasDashed={boolean('Dashed between li', false)}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
        >
            {sampleBasic.map((element, index) => (
                <ListItem
                    key={index}
                    bulletStyle={listStyleOptions.icon}
                    bulletSize={select(
                        labels.bulletSize,
                        iconSizeOptions,
                        iconSizeDefault,
                    )}
                >
                    <CheckBoldIcon />

                    <Text>{element}</Text>
                </ListItem>
            ))}
        </List>
    ))
    .add('List with dash', () => (
        <List>
            {sampleBasic.map((element, index) => (
                <ListItem
                    key={index}
                    bulletSize={select(
                        labels.bulletSize,
                        iconSizeOptions,
                        iconSizeDefault,
                    )}
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    <Text>{element}</Text>
                </ListItem>
            ))}
        </List>
    ))
    .add('List with numbers', () => (
        <List
            listStyle={listStyleOptions.number}
            hasDashed={boolean('Dashed between li', false)}
            bulletSize={select(
                labels.bulletSize,
                iconSizeOptions,
                iconSizeDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
        >
            {sampleBasic.map((element, index) => (
                <ListItem
                    key={index}
                    bulletStyle={listStyleOptions.number}
                    bulletSize={select(
                        labels.bulletSize,
                        iconSizeOptions,
                        iconSizeDefault,
                    )}
                    colorTheme={select(
                        labels.colorTheme,
                        colorThemeOptions,
                        colorThemeDefault,
                    )}
                >
                    <Text>{element}</Text>
                </ListItem>
            ))}
        </List>
    ));
