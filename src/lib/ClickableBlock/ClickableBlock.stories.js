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
    formStatusOptions,
    formStatusDefault,
} from '../../shared/constants';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import ClickableBlock from './ClickableBlock';

storiesOf(folder.main + 'ClickableBlock', module)
    .addDecorator(withKnobs)
    .add('ClickableBlock', () => (
        <ClickableBlock
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
            colorWab={select('Color wab', greyOptions, greyOptions.grey10)}
            colorStatus={select(
                'Color status',
                formStatusOptions,
                formStatusDefault,
            )}
            borderTop={boolean('Border top', true)}
            borderRight={boolean('Border right', true)}
            borderLeft={boolean('Border left', true)}
            borderBottom={boolean('Border bottom', true)}
            marginTop={select('Margin top', spaceOptions, spaceDefault)}
            marginBottom={select('Margin bottom', spaceOptions, spaceDefault)}
            marginLateral={select('Margin lateral', spaceOptions, spaceDefault)}
            paddingTop={select('Padding top', spaceOptions, spaceDefault)}
            paddingBottom={select('Padding bottom', spaceOptions, spaceDefault)}
            paddingLateral={select(
                'Padding lateral',
                spaceOptions,
                spaceDefault,
            )}
            isActive={boolean('Is active', false)}
        >
            <Image
                imageType={imageTypeOptions.picture}
                isCircle={true}
                blockWidth={imageSizeOptions.xs}
            >
                <img src={portraitFile} alt="picture" />
            </Image>

            <div>
                <Title>Olivia Gometz</Title>

                <Text>Le colis du boucher</Text>
            </div>
        </ClickableBlock>
    ));
