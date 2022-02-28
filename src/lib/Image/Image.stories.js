import React from 'react';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    maskOptions,
    maskDefault,
    imageTypeOptions,
    imageSizeOptions,
    radiusOptions,
    shadowSizeOptions,
    shadowSizeDefault,
    justifyContentOptions,
    alignItemsOptions,
    alignItemsDefault,
    spaceOptions,
    spaceDefault,
} from '../../shared/constants';
import labels from '../../shared/labels';
import portraitFile from './sample/portrait.png';
import photoFile from './sample/sample.png';
import drawFile from './sample/sample.svg';
import Image from './Image';

export default {
    title: folder.media + 'Image',
    argTypes: {
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(imageSizeOptions),
            control: 'select',
        },
        blockHeight: {
            name: labels.blockHeight,
            options: Object.values(imageSizeOptions),
            control: 'select',
        },
    },
    args: {
        blockWidth: imageSizeOptions.xl,
        blockHeight: imageSizeOptions.xs,
    },
};

export const CoverImage = args => (
    <Image {...args} imageType={imageTypeOptions.cover}>
        <img src={photoFile} alt="picture" />
    </Image>
);

CoverImage.argTypes = {
    hasModifiedColor: {
        name: labels.hasModifiedColor,
        control: 'boolean',
    },
    colorTheme: {
        name: labels.colorTheme,
        options: Object.values(colorThemeOptions),
        control: 'select',
    },
    bottomStyle: {
        name: labels.bottomStyle,
        options: Object.values(maskOptions),
        control: 'radio',
    },
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'radio',
    },
};

CoverImage.args = {
    hasModifiedColor: true,
    colorTheme: colorThemeDefault,
    bottomStyle: maskDefault,
    radiusSize: radiusOptions.none,
};

export const NormalImage = args => (
    <Image {...args}>
        <img src={drawFile} alt="drawing" />
    </Image>
);

NormalImage.argTypes = {
    padding: {
        name: labels.padding,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    shadowSize: {
        name: labels.shadowSize,
        options: Object.values(shadowSizeOptions),
        control: 'select',
    },
    justifyContent: {
        name: labels.justifyContent,
        options: Object.values(justifyContentOptions),
        control: 'select',
    },
    alignItems: {
        name: labels.alignItems,
        options: Object.values(alignItemsOptions),
        control: 'select',
    },
};

NormalImage.args = {
    padding: spaceOptions.none,
    shadowSize: shadowSizeOptions.none,
    justifyContent: justifyContentOptions.center,
    alignItems: alignItemsDefault,
};

export const PictureImage = args => (
    <Image {...args} imageType={imageTypeOptions.picture}>
        <img src={photoFile} alt="picture" />
    </Image>
);

PictureImage.argTypes = {
    radiusSize: {
        name: labels.radiusSize,
        options: Object.values(radiusOptions),
        control: 'radio',
    },
    shadowSize: {
        name: labels.shadowSize,
        options: Object.values(shadowSizeOptions),
        control: 'select',
    },
    padding: {
        name: labels.padding,
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

PictureImage.args = {
    radiusSize: radiusOptions.lg,
    shadowSize: shadowSizeDefault,
    padding: spaceOptions.none,
};

export const ImageInCircle = args => (
    <Image {...args} imageType={imageTypeOptions.picture} isCircle={true}>
        <img src={portraitFile} alt="picture" />
    </Image>
);

ImageInCircle.argTypes = {
    hasDecoration: {
        name: 'Has decoration',
        control: 'boolean',
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
    marginLeft: {
        name: labels.marginLeft,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginRight: {
        name: labels.marginRight,
        options: Object.values(spaceOptions),
        control: 'select',
    },
};

ImageInCircle.args = {
    hasDecoration: true,
    blockWidth: imageSizeOptions.sm,
    blockHeight: imageSizeOptions.auto,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
    marginLeft: spaceDefault,
    marginRight: spaceDefault,
};
