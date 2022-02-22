import React from 'react';
import { folder, spaceOptions } from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Box from './Box';

const spaceOptionsCustom = {
    null: null,
    ...spaceOptions,
};

export default {
    title: folder.block + 'Box',
    argTypes: {
        hasResponsivePadding: {
            name: labels.hasResponsivePadding,
            control: 'boolean',
            default: false,
        },
        hasResponsiveMargin: {
            name: labels.hasResponsiveMargin,
            control: 'boolean',
            default: false,
        },
        padding: {
            name: labels.padding,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        paddingTop: {
            name: labels.paddingTop,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        paddingRight: {
            name: labels.paddingRight,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        paddingBottom: {
            name: labels.paddingBottom,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        paddingLeft: {
            name: labels.paddingLeft,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        margin: {
            name: labels.margin,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        marginTop: {
            name: labels.marginTop,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        marginRight: {
            name: labels.marginRight,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        marginLeft: {
            name: labels.marginLeft,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
        marginBottom: {
            name: labels.marginBottom,
            options: Object.values(spaceOptionsCustom),
            control: 'select',
        },
    },
};

export const BoxStory = ({ ...args }) => (
    <Box {...args}>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            suscipit purus in blandit commodo. Vivamus rhoncus, quam sit amet
            dignissim elementum, velit purus vestibulum nunc, consequat gravida
            ex felis vel tortor. Maecenas ornare dolor eget metus bibendum, non
            sollicitudin magna finibus. Integer ut tincidunt mi, sit amet
            viverra diam. Morbi molestie nibh accumsan dolor facilisis egestas.
            Etiam aliquet cursus imperdiet. Pellentesque ut quam purus. Etiam
            maximus, augue quis consequat ornare, justo metus aliquet tellus,
            vitae pellentesque libero velit vel erat.
        </Text>
    </Box>
);
