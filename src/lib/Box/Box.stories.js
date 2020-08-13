import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, boolean } from '@storybook/addon-knobs';
import { folder, spaceOptions, spaceDefault } from '../../shared/constants';
import Text from '../Text/Text';
import Box from './Box';

const spaceOptionsCustom = {
    null: null,
    ...spaceOptions,
};

storiesOf(folder.main + 'Box', module)
    .addDecorator(withKnobs)
    .add('Box', () => (
        <Box
            hasResponsivePadding={boolean('Has responsive padding', false)}
            padding={select('Padding', spaceOptions, spaceDefault)}
            paddingTop={select(
                'Padding top',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingRight={select(
                'Padding right',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingLeft={select(
                'Padding left',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            paddingBottom={select(
                'Padding bottom',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            hasResponsiveMargin={boolean('Has responsive margin', false)}
            margin={select('Margin', spaceOptions, spaceDefault)}
            marginTop={select(
                'Margin top',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginRight={select(
                'Margin right',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginLeft={select(
                'Margin left',
                spaceOptionsCustom,
                spaceOptionsCustom.null,
            )}
            marginBottom={select(
                'Margin bottom',
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
