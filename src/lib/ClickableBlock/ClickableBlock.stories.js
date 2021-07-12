import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select } from '@storybook/addon-knobs';
import {
    folder,
    imageTypeOptions,
    imageSizeOptions,
    spaceOptions,
    spaceDefault,
    colorPalletOptions,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import ClickableBlock from './ClickableBlock';

storiesOf(folder.popup + 'ClickableBlock', module)
    .addDecorator(withKnobs)
    .add('ClickableBlock', () => (
        <ClickableBlock
            isHiddenOnMobile={true}
            isActive={boolean(labels.isActive, false)}
            iconSize={select(
                labels.iconSize,
                iconSizeOptions,
                iconSizeOptions.lg,
            )}
            colorPallet={select(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            hasBorderTop={boolean('Has border top', false)}
            hasBorderRight={boolean('Has border right', false)}
            hasBorderLeft={boolean('Has border left', false)}
            hasBorderBottom={boolean('Has border bottom', true)}
            paddingTop={select(labels.padding, spaceOptions, spaceOptions.sm)}
            paddingBottom={select(
                labels.padding,
                spaceOptions,
                spaceOptions.sm,
            )}
            paddingLateral={select(
                labels.padding,
                spaceOptions,
                spaceOptions.sm,
            )}
            marginTop={select(labels.margin, spaceOptions, spaceDefault.xs)}
            marginBottom={select(labels.margin, spaceOptions, spaceDefault.xs)}
            marginLateral={select(labels.margin, spaceOptions, spaceDefault.xs)}
        >
            <Image
                imageType={imageTypeOptions.picture}
                isCircle={true}
                blockWidth={imageSizeOptions.xs}
                marginRight={spaceOptions.md}
            >
                <img src={portraitFile} alt="picture" />
            </Image>

            <div>
                <Title>Jane Dae</Title>

                <Text>Lorem Ipsum Store</Text>
            </div>
        </ClickableBlock>
    ));
