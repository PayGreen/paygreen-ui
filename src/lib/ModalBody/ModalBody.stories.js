import React from 'react';
import { folder, spaceOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import ModalBody from './ModalBody';
import Text from '../Text/Text';

export default {
    title: folder.popup + folder.sub.modal + 'ModalBody',
    argTypes: {
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingLateral: {
            name: labels.paddingLateral,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
        paddingTop: {
            name: labels.paddingTop,
            options: Object.values(spaceOptions),
            control: 'select',
            defaultValue: spaceOptions.sm,
        },
    },
};

export const SimpleModalBody = ({ ...args }) => {
    return (
        <ModalBody {...args}>
            <Text>
                Curabitur congue varius ex et posuere. Maecenas tincidunt diam
                ut nisl porttitor scelerisque.
            </Text>
        </ModalBody>
    );
};
