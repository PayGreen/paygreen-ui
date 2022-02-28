import React from 'react';
import {
    folder,
    colorTypeOptions,
    colorTypeDefault,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    formStatusOptions,
    formStatusDefault,
    radiusOptions,
    fontSizeOptions,
    fontSizeDefault,
    alignOptions,
    alignDefault,
    textHtmlTagOptions,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import HR from '../HR/HR';
import TextComponent from './Text';

const { div, p, span, ...inlineHtmlTagOptions } = textHtmlTagOptions;

export default {
    title: folder.text + 'Text',
    argTypes: {
        colorType: {
            name: labels.colorType,
            options: Object.values(colorTypeOptions),
            control: 'radio',
        },
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
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
    },
};

export const SingleParagraph = args => (
    <TextComponent {...args}>
        Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>
        . Donec eget <em>nulla in libero</em> laoreet sodales. Fusce vestibulum
        at neque nec convallis. Vivamus quis neque vulputate, fringilla massa
        vitae, interdum ipsum. Duis enim augue, euismod quis aliquam in,
        consequat quis risus.
    </TextComponent>
);

SingleParagraph.argTypes = {
    isResponsive: {
        name: labels.isResponsive,
        control: 'boolean',
    },
    textSize: {
        name: labels.textSize,
        options: Object.values(fontSizeOptions),
        control: 'select',
    },
    align: {
        name: labels.align,
        options: Object.values(alignOptions),
        control: 'radio',
    },
    hasUppercase: {
        name: labels.hasUppercase,
        control: 'boolean',
    },
    hasUnderline: {
        name: labels.hasUnderline,
        control: 'boolean',
    },
    marginLateral: {
        name: labels.marginLateral,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginTop: {
        name: labels.marginTop,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginBottom: {
        name: labels.marginBottom,
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

SingleParagraph.args = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,
    align: alignDefault,
    hasUppercase: false,
    hasUnderline: false,
    isResponsive: true,
    textSize: fontSizeDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};

export const BlockOfParagraphs = args => (
    <TextComponent htmlTag={textHtmlTagOptions.div} {...args}>
        <p>
            Lorem ipsum dolor sit amet, consectetur{' '}
            <strong>adipiscing elit</strong>. Donec eget nulla in libero laoreet
            sodales. Fusce vestibulum at neque nec convallis. Vivamus quis neque
            vulputate, fringilla massa vitae, interdum ipsum. Duis enim augue,
            euismod quis aliquam in, consequat quis risus.
        </p>

        <p>
            Etiam diam elit, fringilla sit amet blandit sit amet,{' '}
            <em>rutrum varius est</em>. Integer gravida vel urna nec interdum.
            Suspendisse vel quam et libero pellentesque aliquet. Sed est velit,
            dignissim eget nunc a, ornare tempor odio. In efficitur, leo in
            vestibulum posuere, tellus enim porttitor nisl, a tincidunt mauris
            quam sit amet mi.
        </p>

        <p>
            Nam rhoncus ligula posuere justo consequat. Suspendisse nunc nulla,
            pellentesque at tellus et, hendrerit facilisis dolor. Sed a
            dignissim mauris.
        </p>
    </TextComponent>
);

const {
    hasUppercase,
    hasUnderline,
    isResponsive,
    textSize,
    ...commonArgTypes
} = SingleParagraph.argTypes;

BlockOfParagraphs.argTypes = {
    isResponsive,
    textSize,
    ...commonArgTypes,
    marginInternal: {
        name: 'Internal margin',
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

BlockOfParagraphs.args = {
    isResponsive: true,
    textSize: fontSizeDefault,
    align: alignDefault,
    colorType: colorTypeDefault,
    colorPallet: colorPalletOptions.wab,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,
    marginLateral: spaceDefault,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginInternal: spaceOptions.sm,
};

export const TextWithBackground = args => (
    <TextComponent
        {...args}
        hasBackground={true}
        paddingLateral={spaceOptions.lg}
        paddingTop={spaceOptions.lg}
        paddingBottom={spaceOptions.lg}
        marginLateral={spaceOptions.sm}
        marginTop={spaceOptions.sm}
        marginBottom={spaceOptions.sm}
    >
        Lorem ipsum dolor sit amet, consectetur <strong>adipiscing elit</strong>
        . Donec eget nulla in libero laoreet sodales. Fusce vestibulum at neque
        nec convallis. Vivamus quis neque vulputate, fringilla massa vitae,
        interdum ipsum. Duis enim augue, euismod quis aliquam in, consequat quis
        risus.
    </TextComponent>
);

TextWithBackground.argTypes = {
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'radio',
    },
};

TextWithBackground.args = {
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey50,
    colorStatus: formStatusDefault,
    radiusSize: radiusOptions.sm,
};

export const InlineStyles = ({ text, ...args }) => (
    <>
        <TextComponent
            htmlTag={textHtmlTagOptions.em}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Emphasis Text
        </TextComponent>

        <TextComponent
            htmlTag={textHtmlTagOptions.strong}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Strong Text
        </TextComponent>

        <TextComponent
            htmlTag={textHtmlTagOptions.q}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Quote Text
        </TextComponent>

        <TextComponent
            htmlTag={textHtmlTagOptions.sub}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            Subscript Text
        </TextComponent>

        <TextComponent
            htmlTag={textHtmlTagOptions.kbd}
            marginLateral={spaceOptions.sm}
            marginTop={spaceOptions.sm}
            marginBottom={spaceOptions.sm}
        >
            KeyBoard Text
        </TextComponent>

        <HR
            marginLateral={spaceOptions.sm}
            marginBottom={spaceOptions.md}
            colorPallet={colorPalletOptions.wab}
            colorWab={greyOptions.grey40}
        />

        <TextComponent {...args} marginLateral={spaceOptions.sm}>
            {text}
        </TextComponent>
    </>
);

InlineStyles.argTypes = {
    text: {
        name: labels.text,
        control: 'text',
    },
    htmlTag: {
        name: labels.htmlTag,
        options: Object.values(inlineHtmlTagOptions),
        control: 'select',
    },
    isResponsive,
    textSize,
};

InlineStyles.args = {
    isResponsive: true,
    textSize: fontSizeDefault,
    text: 'Try Me!',
    htmlTag: textHtmlTagOptions.em,
    colorType: colorTypeDefault,
    colorPallet: colorPalletDefault,
    colorTheme: colorThemeDefault,
    colorWab: greyOptions.grey60,
    colorStatus: formStatusDefault,
};
