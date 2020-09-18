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
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import ClickableBlock from './ClickableBlock';

const paddingLabel = 'Padding';
const marginLabel = 'Margin';

storiesOf(folder.popup + 'ClickableBlock', module)
    .addDecorator(withKnobs)
    .add('ClickableBlock', () => (
        <ClickableBlock
            isHiddenOnMobile={true}
            isActive={boolean('Is active', false)}
            iconSize={select('Icon size', iconSizeOptions, iconSizeOptions.lg)}
            colorPallet={select(
                'Color pallet',
                colorPalletOptions,
                colorPalletOptions.wab,
            )}
            colorTheme={select(
                'Color theme',
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select('Color wab', greyOptions, greyDefault)}
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            borderTop={boolean('Border top', true)}
            borderRight={boolean('Border right', true)}
            borderLeft={boolean('Border left', true)}
            borderBottom={boolean('Border bottom', true)}
            paddingTop={select(paddingLabel, spaceOptions, spaceOptions.sm)}
            paddingBottom={select(paddingLabel, spaceOptions, spaceOptions.sm)}
            paddingLateral={select(paddingLabel, spaceOptions, spaceOptions.sm)}
            marginTop={select(marginLabel, spaceOptions, spaceDefault.xs)}
            marginBottom={select(marginLabel, spaceOptions, spaceDefault.xs)}
            marginLateral={select(marginLabel, spaceOptions, spaceDefault.xs)}
        >
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
    ));
