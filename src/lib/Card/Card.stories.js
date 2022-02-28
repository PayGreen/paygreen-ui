import React from 'react';
import {
    folder,
    cardHtmlTagOptions,
    cardHtmlTagDefault,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    shadowSizeOptions,
    shadowSizeDefault,
    radiusOptions,
    radiusDefault,
    gradientOptions,
    fontSizeOptions,
    maskOptions,
    imageTypeOptions,
    spaceOptions,
    buttonSizeOptions,
    colorStyleOptions,
    lateralPositionOptions,
    cornerStyleOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Button from '../Button/Button';
import ButtonGroup from '../ButtonGroup/ButtonGroup';
import Image from '../Image/Image';
import Popin from '../Popin/Popin';
import Text from '../Text/Text';
import Title from '../Title/Title';
import Corner from '../Corner/Corner';
import Card from './Card';
import imageFile from './sample/sample.png';

export default {
    title: folder.block + 'Card',
    argTypes: {
        colorType: {
            name: labels.colorType,
            options: Object.values(colorTypeOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
    },
    args: {
        colorType: colorTypeDefault,
        colorTheme: colorThemeDefault,
    },
};

export const DefaultCard = args => (
    <Card {...args}>
        <Corner
            label="Since 2016"
            cornerStyle={cornerStyleOptions.banner}
            colorStyle={colorStyleOptions.light}
            position={lateralPositionOptions.right}
            colorTheme={args.colorTheme}
        />

        <Title
            hasUnderline={true}
            textSize={fontSizeOptions.lg}
            marginTop={args.blockWidth}
            marginLateral={args.blockWidth}
            colorType={args.colorType}
            colorTheme={args.colorTheme}
        >
            Title <strong>sample</strong>
        </Title>

        <Text
            marginLateral={args.blockWidth}
            colorType={args.colorType}
            colorTheme={args.colorTheme}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
            vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum
            ullamcorper turpis vel imperdiet. Curabitur bibendum risus gravida
            tellus condimentum tristique. Sed ut elit efficitur, sagittis urna
            sed, scelerisque eros.
        </Text>

        <ButtonGroup
            marginTop={args.blockWidth}
            marginBottom={args.blockWidth}
            paddingBlock={args.blockWidth}
            hasResetedMargins={false}
        >
            <button type="button">
                <Button colorType={args.colorType} colorTheme={args.colorTheme}>
                    Your button
                </Button>
            </button>
        </ButtonGroup>
    </Card>
);

DefaultCard.argTypes = {
    shadowSize: {
        name: labels.shadowSize,
        options: Object.values(shadowSizeOptions),
        control: 'radio',
    },
    hasBackground: {
        name: labels.hasBackground,
        control: 'boolean',
    },
    blockWidth: {
        name: labels.blockWidth,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'radio',
    },
    htmlTag: {
        name: labels.htmlTag,
        options: Object.values(cardHtmlTagOptions),
        control: 'select',
    },
};

DefaultCard.args = {
    shadowSize: shadowSizeDefault,
    hasBackground: true,
    blockWidth: spaceOptions.md,
    radiusSize: radiusDefault,
    htmlTag: cardHtmlTagDefault,
};

export const BorderTopCard = args => (
    <Card
        {...args}
        blockWidth={spaceOptions.sm}
        paddingTop={spaceOptions.sm}
        paddingLateral={spaceOptions.sm}
    >
        <Title colorType={args.colorType} textSize={fontSizeOptions.md}>
            Title sample
        </Title>

        <Text
            colorType={args.colorType}
            colorTheme={args.colorTheme}
            marginTop={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
            vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum
            ullamcorper turpis vel imperdiet.
        </Text>

        <ButtonGroup marginTop={spaceOptions.sm} marginBottom={spaceOptions.sm}>
            <button type="button">
                <Button
                    colorType={args.colorType}
                    colorTheme={args.colorTheme}
                    buttonSize={buttonSizeOptions.sm}
                >
                    Your button
                </Button>
            </button>
        </ButtonGroup>
    </Card>
);

BorderTopCard.argTypes = {
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'radio',
    },
    borderTop: {
        name: 'Border top gradient',
        options: Object.values(gradientOptions),
        control: 'radio',
    },
};

BorderTopCard.args = {
    radiusSize: radiusDefault,
    borderTop: gradientOptions.theme,
};

export const CardWithTitleOut = args => (
    <Card
        {...args}
        blockWidth={spaceOptions.sm}
        hasTitleOut={true}
        colorType={args.colorType}
        colorTheme={args.colorTheme}
    >
        <Title
            colorTheme={args.colorTheme}
            marginLateral={spaceOptions.sm}
            textSize={fontSizeOptions.lg}
        >
            Sample
        </Title>

        <div>
            <Text
                colorType={args.colorType}
                colorTheme={args.colorTheme}
                marginTop={spaceOptions.sm}
                marginLateral={spaceOptions.sm}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
                <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
                vehicula in arcu non sodales. Fusce et consectetur odio. Ut
                bibendum ullamcorper turpis vel imperdiet.
            </Text>

            <ButtonGroup
                marginTop={spaceOptions.sm}
                marginBottom={spaceOptions.sm}
                paddingBlock={spaceOptions.sm}
            >
                <button type="button">
                    <Button
                        colorType={args.colorType}
                        colorTheme={args.colorTheme}
                        buttonSize={buttonSizeOptions.sm}
                    >
                        Your button
                    </Button>
                </button>
            </ButtonGroup>
        </div>
    </Card>
);

CardWithTitleOut.args = {
    colorType: colorTypeOptions.reverse,
};

export const CardWithImage = args => (
    <Card blockWidth={args.blockWidth} isShadowWab={args.isShadowWab}>
        <Image
            imageType={imageTypeOptions.cover}
            bottomStyle={maskOptions.waveLeft}
        >
            <img src={imageFile} alt="picture" />
        </Image>

        <Title
            marginLateral={args.blockWidth}
            marginTop={spaceOptions.sm}
            textSize={fontSizeOptions.md}
        >
            Title sample
        </Title>

        <Text
            marginLateral={args.blockWidth}
            marginTop={spaceOptions.xs}
            textSize={fontSizeOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
            vehicula in arcu non sodales. Fusce et consectetur odio. Ut bibendum
            ullamcorper turpis vel imperdiet.
        </Text>

        <ButtonGroup
            marginTop={spaceOptions.sm}
            marginBottom={args.blockWidth}
            paddingBlock={args.blockWidth}
        >
            <button type="button">
                <Button buttonSize={buttonSizeOptions.sm}>Don't click</Button>
            </button>
        </ButtonGroup>
    </Card>
);

CardWithImage.parameters = {
    controls: { exclude: [labels.colorType, labels.colorTheme] },
};
CardWithImage.argTypes = {
    blockWidth: {
        name: labels.blockWidth,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    isShadowWab: {
        name: 'Is shadow wab',
        control: 'boolean',
    },
};

CardWithImage.args = {
    blockWidth: spaceOptions.md,
    isShadowWab: true,
};

export const CardWithoutBackground = args => (
    <Card {...args} hasBackground={false}>
        <Title
            hasUnderline={true}
            textSize={fontSizeOptions.xl}
            colorType={args.colorType}
            colorTheme={args.colorTheme}
        >
            Title <strong>sample</strong>
        </Title>

        <Text
            textSize={fontSizeOptions.md}
            colorType={args.colorType}
            colorTheme={args.colorTheme}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.{' '}
            <strong>Duis porttitor velit a ultricies aliquet</strong>. Donec
            vehicula in arcu non sodales. Fusce et consectetur odio.
        </Text>
    </Card>
);

CardWithoutBackground.argTypes = {
    blockWidth: {
        name: labels.blockWidth,
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

CardWithoutBackground.args = {
    blockWidth: spaceOptions.md,
};

export const CardWithColoredBackground = args => (
    <Card
        {...args}
        shadowSize={shadowSizeOptions.none}
        blockWidth={spaceOptions.sm}
    >
        <Corner
            label="?"
            position={lateralPositionOptions.right}
            colorPallet={
                args.colorPallet === colorPalletOptions.wab
                    ? colorPalletOptions.theme
                    : args.colorPallet
            }
            colorTheme={args.colorTheme}
            colorStatus={args.colorStatus}
        >
            <Popin>
                <Text
                    marginTop={spaceOptions.xs}
                    marginLateral={spaceOptions.xs}
                    marginBottom={spaceOptions.xs}
                    textSize={fontSizeOptions.xs}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </Text>
            </Popin>
        </Corner>

        <Title
            marginTop={spaceOptions.sm}
            marginLateral={spaceOptions.sm}
            colorPallet={args.colorPallet}
            colorTheme={args.colorTheme}
            colorStatus={args.colorStatus}
        >
            Title <strong>colored</strong>
        </Title>

        <Text
            textSize={fontSizeOptions.sm}
            marginTop={spaceOptions.xs}
            marginLateral={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis{' '}
            <strong>porttitor velit a ultricies aliquet</strong>. Donec vehicula
            in arcu non sodales. Fusce et consectetur odio.
        </Text>
    </Card>
);

CardWithColoredBackground.argTypes = {
    colorPallet: {
        name: labels.colorPallet,
        options: Object.values(colorPalletOptions),
        control: 'radio',
    },
    colorWab: {
        name: labels.colorWab,
        options: Object.values(greyOptions),
        control: 'select',
    },
    colorStatus: {
        name: labels.colorStatus,
        options: Object.values(formStatusOptions),
        control: 'select',
    },
};
CardWithColoredBackground.parameters = {
    controls: { exclude: [labels.colorType] },
};

CardWithColoredBackground.args = {
    colorPallet: colorPalletOptions.wab,
    colorWab: greyOptions.white20,
    colorStatus: formStatusDefault,
};

export const ButtonCard = args => (
    <Card
        {...args}
        htmlTag={cardHtmlTagOptions.button}
        blockWidth={spaceOptions.xs}
        paddingTop={spaceOptions.sm}
        paddingBottom={spaceOptions.sm}
        paddingLateral={spaceOptions.sm}
        shadowSize={shadowSizeOptions.none}
        radiusSize={radiusOptions.sm}
    >
        <Text colorWab={greyOptions.grey30}>
            <i>New group</i>
        </Text>

        <Text
            textSize={fontSizeOptions.sm}
            marginTop={spaceOptions.xs}
            colorWab={greyOptions.grey30}
        >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
    </Card>
);

ButtonCard.argTypes = {
    colorWab: {
        name: labels.colorWab,
        options: Object.values(greyOptions),
        control: 'select',
    },
    hasDashedBorder: {
        name: 'Has dashed borders',
        control: 'boolean',
    },
};
ButtonCard.parameters = {
    controls: { exclude: [labels.colorType] },
};

ButtonCard.args = {
    colorWab: greyOptions.white20,
    hasDashedBorder: true,
};
