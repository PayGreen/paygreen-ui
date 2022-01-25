import React from 'react';
import {
    folder,
    shadowSizeOptions,
    radiusOptions,
    radiusDefault,
    spaceOptions,
    spaceDefault,
    blockPositionOptions,
    fontSizeOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Title from '../Title/Title';
import Text from '../Text/Text';
import PopinComponent from './Popin';

export default {
    title: folder.popup + 'Popin',
    argTypes: {
        isActive: {
            name: labels.isActive,
            control: 'boolean',
        },
        align: {
            name: labels.align,
            options: Object.values(blockPositionOptions),
            control: 'select',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        radiusSize: {
            name: labels.radiusSize,
            options: Object.values(radiusOptions),
            control: 'select',
        },
        shadowSize: {
            name: labels.shadowSize,
            options: Object.values(shadowSizeOptions),
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
    },
};

export const Popin = args => (
    <div style={{ position: 'relative', marginTop: '100px' }}>
        <PopinComponent {...args}>
            <Title
                marginTop={spaceOptions.xs}
                marginLateral={spaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Demo
            </Title>

            <Text
                marginTop={spaceOptions.sm}
                marginLateral={spaceOptions.xs}
                marginBottom={spaceOptions.xs}
                textSize={fontSizeOptions.sm}
            >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
        </PopinComponent>
    </div>
);

Popin.args = {
    isActive: true,
    align: blockPositionOptions.left,
    blockWidth: spaceOptions.sm,
    radiusSize: radiusDefault,
    shadowSize: shadowSizeOptions.sm,
    marginTop: spaceDefault,
    marginBottom: spaceDefault,
};
