import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    imageTypeOptions,
    imageSizeOptions,
    shadowSizeOptions,
    displayOptions,
    spaceOptions,
} from '../../shared/constants';
import InternalGrid from '../InternalGrid/InternalGrid';
import Title from '../Title/Title';
import Text from '../Text/Text';
import Image from '../Image/Image';
import portraitFile from '../Image/sample/portrait.png';
import ClickableBlock from './ClickableBlock';

storiesOf(folder.main + 'ClickableBlock', module)
    .addDecorator(withKnobs)
    .add('ClickableBlock', () => (
        <ClickableBlock
            borderTop={boolean('Border top', true)}
            borderRight={boolean('Border right', true)}
            borderLeft={boolean('Border left', true)}
            borderBottom={boolean('Border bottom', true)}
        >
            <Image
                imageType={imageTypeOptions.picture}
                isCircle={true}
                blockWidth={imageSizeOptions.sm}
                blockHeight={imageSizeOptions.auto}
                shadowSize={shadowSizeOptions.none}
            >
                <img src={portraitFile} alt="picture" />
            </Image>

            <InternalGrid
                displayType={displayOptions.column}
                childrenMarginLateral={spaceOptions.sm}
            >
                <Title>Olivia Gometz</Title>

                <Text>Le colis du boucher</Text>
            </InternalGrid>
        </ClickableBlock>
    ));
