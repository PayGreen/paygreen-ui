import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    spaceOptions,
    greyOptions,
    fontSizeOptions,
    blockWidthOptions,
    colorTypeDefault,
    colorThemeDefault,
    gradientOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Dropdown from './Dropdown';
import ClickableBlock from '../ClickableBlock/ClickableBlock';
import Badge from '../Badge/Badge';
import { PenIcon, ArrowBottomIcon } from '../Icon/Icon';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';

const popin = (
    <Popin marginTop={spaceOptions.sm} blockWidth={blockWidthOptions.sm}>
        <Title
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Ma jolie <strong>Popin</strong> !
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

storiesOf(folder.main + 'Dropdown', module)
    .addDecorator(withKnobs)
    .add(
        'Dropdown with ClickableBlock',
        () => (
            <Dropdown>
                <ClickableBlock colorWab={greyOptions.grey20}>
                    <Title>
                        A very veryyyyy long <strong>Title</strong>
                    </Title>
                </ClickableBlock>

                {popin}
            </Dropdown>
        ),
        {},
    )
    .add(
        'Dropdown with Badge',
        () => (
            <Dropdown>
                <Badge
                    colorType={colorTypeDefault}
                    colorTheme={colorThemeDefault}
                    gradient={gradientOptions.theme}
                    textSize={fontSizeOptions.sm}
                >
                    Badge
                    <ArrowBottomIcon
                        iconSize={iconSizeOptions.md}
                        marginLeft={spaceOptions.xs}
                    />
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
                />

                {popin}
            </Dropdown>
        ),
        {},
    );
