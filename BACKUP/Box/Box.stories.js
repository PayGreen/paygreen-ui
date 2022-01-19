import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions, spaceDefault } from '../../shared/constants';
import labels from '../../shared/labels';
import Text from '../Text/Text';
import Box from './Box';

const spaceOptionsCustom = {
    null: null,
    ...spaceOptions,
};

storiesOf(folder.block + 'Box', module)
    .addDecorator(withKnobs)
    .add('Box', () => (
        <Box
            hasResponsivePadding={boolean(labels.hasResponsivePadding, false)}
            padding={select(labels.padding, spaceOptions, spaceDefault)}
            paddingTop={select(
                labels.paddingTop,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingRight={select(
                labels.paddingRight,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingLeft={select(
                labels.paddingLeft,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingBottom={select(
                labels.paddingBottom,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            hasResponsiveMargin={boolean(labels.hasResponsiveMargin, false)}
            margin={select(labels.margin, spaceOptions, spaceDefault)}
            marginTop={select(
                labels.marginTop,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginRight={select(
                labels.marginRight,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginLeft={select(
                labels.marginLeft,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginBottom={select(
                labels.marginBottom,
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
        >
            <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                suscipit purus in blandit commodo. Vivamus rhoncus, quam sit
                amet dignissim elementum, velit purus vestibulum nunc, consequat
                gravida ex felis vel tortor. Maecenas ornare dolor eget metus
                bibendum, non sollicitudin magna finibus. Integer ut tincidunt
                mi, sit amet viverra diam. Morbi molestie nibh accumsan dolor
                facilisis egestas. Etiam aliquet cursus imperdiet. Pellentesque
                ut quam purus. Etiam maximus, augue quis consequat ornare, justo
                metus aliquet tellus, vitae pellentesque libero velit vel erat.
            </Text>
        </Box>
    ));
