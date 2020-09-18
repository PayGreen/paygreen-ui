import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    fontSizeOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import { PenIcon, ArrowBottomIcon } from '../Icon/Icon';
import Badge from '../Badge/Badge';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';
import ClickableBlock from '../ClickableBlock/ClickableBlock';
import Dropdown from './Dropdown';

const popin = (
    <Popin marginTop={spaceOptions.sm} blockWidth={spaceOptions.sm}>
        <Title
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Popin's title
        </Title>

        <Text
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.xs}
            marginBottom={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
    </Popin>
);

storiesOf(folder.popup + 'Dropdown', module)
    .addDecorator(withKnobs)
    .add('Dropdown with ClickableBlock', () => (
        <Dropdown>
            <ClickableBlock>
                <Text>Click here</Text>
            </ClickableBlock>

            {popin}
        </Dropdown>
    ))
    .add(
        'Dropdown with Badge',
        () => (
            <Dropdown>
                <Badge textSize={fontSizeOptions.sm}>
                    Badge
                    <ArrowBottomIcon marginLeft={spaceOptions.xs} />
                </Badge>

                {popin}
            </Dropdown>
        ),
        {},
    )
    .add(
        'Dropdown with Icon',
        () => (
            <Dropdown>
                <PenIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.lg}
                    hasBackground
                    hasHover
                />

                {popin}
            </Dropdown>
        ),
        {},
    );
