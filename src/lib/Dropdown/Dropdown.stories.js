import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    imageTypeOptions,
    imageSizeOptions,
    spaceOptions,
    colorPalletOptions,
    greyOptions,
    fontSizeOptions,
    alignOptions,
    blockWidthOptions,
    colorTypeDefault,
    colorThemeDefault,
    gradientOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Dropdown from './Dropdown';
import ClickableBlock from '../ClickableBlock/ClickableBlock';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import Badge from '../Badge/Badge';
import { PenIcon, ArrowBottomIcon } from '../Icon/Icon';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Popin from '../Popin/Popin';

storiesOf(folder.main + 'Dropdown', module)
    .addDecorator(withKnobs)
    .add(
        'Dropdown with ClickableBlock',
        () => (
            <Dropdown>
                <ClickableBlock colorWab={greyOptions.grey20}>
                    <Image
                        imageType={imageTypeOptions.picture}
                        isCircle={true}
                        blockWidth={imageSizeOptions.xs}
                    >
                        <img src={portraitFile} alt="picture" />
                    </Image>

                    <div>
                        <Title>Jane Dae</Title>

                        <Text>Lorem Ipsum Store</Text>
                    </div>
                </ClickableBlock>

                <Popin
                    marginTop={spaceOptions.sm}
                    blockWidth={blockWidthOptions.sm}
                >
                    <Title
                        marginTop={spaceOptions.xs}
                        marginLateral={spaceOptions.xs}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                        textSize={fontSizeOptions.sm}
                        align={alignOptions.center}
                    >
                        Ma jolie <strong>Popin</strong> !
                    </Title>

                    <Text
                        marginTop={spaceOptions.sm}
                        marginLateral={spaceOptions.xs}
                        marginBottom={spaceOptions.xs}
                        textSize={fontSizeOptions.sm}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </Popin>
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

                <Popin
                    marginTop={spaceOptions.sm}
                    blockWidth={blockWidthOptions.sm}
                >
                    <Title
                        marginTop={spaceOptions.xs}
                        marginLateral={spaceOptions.xs}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                        textSize={fontSizeOptions.sm}
                        align={alignOptions.center}
                    >
                        Ma jolie <strong>Popin</strong> !
                    </Title>

                    <Text
                        marginTop={spaceOptions.sm}
                        marginLateral={spaceOptions.xs}
                        marginBottom={spaceOptions.xs}
                        textSize={fontSizeOptions.sm}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </Popin>
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

                <Popin
                    marginTop={spaceOptions.sm}
                    blockWidth={blockWidthOptions.sm}
                >
                    <Title
                        marginTop={spaceOptions.xs}
                        marginLateral={spaceOptions.xs}
                        colorPallet={colorPalletOptions.wab}
                        colorWab={greyOptions.grey60}
                        textSize={fontSizeOptions.sm}
                        align={alignOptions.center}
                    >
                        Ma jolie <strong>Popin</strong> !
                    </Title>

                    <Text
                        marginTop={spaceOptions.sm}
                        marginLateral={spaceOptions.xs}
                        marginBottom={spaceOptions.xs}
                        textSize={fontSizeOptions.sm}
                    >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua.
                    </Text>
                </Popin>
            </Dropdown>
        ),
        {},
    );
