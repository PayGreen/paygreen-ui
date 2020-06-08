import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    imageTypeOptions,
    imageSizeOptions,
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
            borderTop={boolean('Border top', true)}
            borderRight={boolean('Border right', true)}
            borderLeft={boolean('Border left', true)}
            borderBottom={boolean('Border bottom', true)}
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
