import React from 'react';
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

export default {
    title: folder.list + 'List',
};

const defaultArgsType = {
    listStyle: {
        name: labels.listStyle,
        options: Object.values(listStyleOptions),
        control: 'select',
    },
    hasDashed: {
        name: 'Dashed lines (on desktop)',
        control: 'boolean',
    },
    bulletSize: {
        name: labels.bulletSize,
        options: Object.values(iconSizeOptions),
        default: iconSizeDefault,
        control: 'select',
    },
    marginLateral: {
        name: labels.marginLateral,
        options: Object.values(spaceOptions),
        default: spaceDefault,
        control: 'select',
    },
    marginTop: {
        name: labels.marginTop,
        options: Object.values(spaceOptions),
        default: spaceDefault,
        control: 'select',
    },
    marginBottom: {
        name: labels.marginBottom,
        options: Object.values(spaceOptions),
        default: spaceDefault,
        control: 'select',
    },
};

export const ListIcons = args => (
    <List {...args}>
        {sampleWithIcons.map((element, index) => (
            <ListItem
                key={index}
                htmlTag={iconHtmlTagOptions.button}
                bulletStyle={listStyleOptions.icon}
                bulletSize={args.bulletSize}
            >
                {element.icon}

                <Title colorPallet={colorPalletOptions.theme}>
                    {element.main}
                </Title>

                <Text>{element.details}</Text>
            </ListItem>
        ))}
    </List>
);
ListIcons.args = {
    bulletSize: iconSizeDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};
ListIcons.argTypes = {
    ...defaultArgsType,
};

export const ListCheck = args => (
    <List {...args} listStyle={listStyleOptions.icon}>
        {sampleBasic.map((element, index) => (
            <ListItem
                key={index}
                bulletStyle={listStyleOptions.icon}
                bulletSize={args.bulletSize}
            >
                <CheckBoldIcon />

                <Text>{element}</Text>
            </ListItem>
        ))}
    </List>
);
ListCheck.args = {
    hasDashed: false,
    bulletSize: iconSizeDefault,
};
ListCheck.argTypes = {
    bulletSize: defaultArgsType.bulletSize,
    hasDashed: {
        name: 'Dashed between li',
        control: 'boolean',
    },
};

export const ListDash = args => (
    <List hasDashed>
        {sampleBasic.map((element, index) => (
            <ListItem
                key={index}
                bulletSize={args.bulletSize}
                colorTheme={args.colorTheme}
            >
                <Text>{element}</Text>
            </ListItem>
        ))}
    </List>
);

ListDash.args = {
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
};
ListDash.argTypes = {
    bulletSize: defaultArgsType.bulletSize,
    colorTheme: {
        name: labels.colorTheme,
        options: Object.values(colorThemeOptions),
        default: colorThemeDefault,
        control: 'select',
    },
};

export const ListNumbers = args => (
    <List {...args} listStyle={listStyleOptions.number}>
        {sampleBasic.map((element, index) => (
            <ListItem
                key={index}
                bulletStyle={listStyleOptions.number}
                bulletSize={args.bulletSize}
                colorTheme={args.colorTheme}
            >
                <Text>{element}</Text>
            </ListItem>
        ))}
    </List>
);

ListNumbers.args = {
    hasDashed: false,
    bulletSize: iconSizeDefault,
    colorTheme: colorThemeDefault,
};
ListNumbers.argTypes = {
    hasDashed: {
        name: 'Dashed between li',
        control: 'boolean',
    },
    bulletSize: defaultArgsType.bulletSize,
    colorTheme: {
        name: labels.colorTheme,
        options: Object.values(colorThemeOptions),
        default: colorThemeDefault,
        control: 'select',
    },
};
// storiesOf(folder.list + folder.sub.list + 'List', module)
//     .addDecorator(withKnobs)

//     .add('List with numbers', () => (
//         <List
//             listStyle={listStyleOptions.number}
//             hasDashed={boolean('Dashed between li', false)}
//             bulletSize={select(
//                 labels.bulletSize,
//                 iconSizeOptions,
//                 iconSizeDefault,
//             )}
//             colorTheme={select(
//                 labels.colorTheme,
//                 colorThemeOptions,
//                 colorThemeDefault,
//             )}
//         >
//             {sampleBasic.map((element, index) => (
//                 <ListItem
//                     key={index}
//                     bulletStyle={listStyleOptions.number}
//                     bulletSize={select(
//                         labels.bulletSize,
//                         iconSizeOptions,
//                         iconSizeDefault,
//                     )}
//                     colorTheme={select(
//                         labels.colorTheme,
//                         colorThemeOptions,
//                         colorThemeDefault,
//                     )}
//                 >
//                     <Text>{element}</Text>
//                 </ListItem>
//             ))}
//         </List>
//     ));
