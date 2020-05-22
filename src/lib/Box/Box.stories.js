import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import Box from './Box';
import Card from '../Card/Card';
import Title from '../Title/Title';

storiesOf(folder.main + 'Box', module)
    .addDecorator(withKnobs)
    .add('Box', () => (
        <Box
            padding={text('Padding', '')}
            paddingTop={text('Padding top', '')}
            paddingRight={text('Padding right', '')}
            paddingLeft={text('Padding left', '')}
            paddingBottom={text('Padding bottom', '')}
            margin={text('Margin', '')}
            marginTop={text('Margin top', '')}
            marginRight={text('Margin right', '')}
            marginLeft={text('Margin left', '')}
            marginBottom={text('Margin bottom', '')}
        >
            <Card>
                <Title align="center">Card</Title>
                <Box
                    padding={text('Inner padding', '')}
                    paddingTop={text('Inner padding top', '')}
                    paddingRight={text('Inner padding right', '')}
                    paddingLeft={text('Inner padding left', '')}
                    paddingBottom={text('Inner padding bottom', '')}
                    margin={text('Inner margin', '')}
                    marginTop={text('Inner margin top', '')}
                    marginRight={text('Inner margin right', '')}
                    marginLeft={text('Inner margin left', '')}
                    marginBottom={text('Inner margin bottom', '')}
                >
                    <Card>
                        <Title align="center">Inner Card</Title>
                    </Card>
                </Box>
            </Card>
        </Box>
    ));
