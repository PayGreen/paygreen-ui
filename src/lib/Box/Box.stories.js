import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import { folder } from '../../shared/constants';
import Box from './Box';
import Card from '../Card/Card';
import Title from '../Title/Title';

const spaceOptions = {
    null: null,
    none: 'none',
    xs: 'xs',
    sm: 'sm',
    md: 'md',
    lg: 'lg',
    xl: 'xl',
};

storiesOf(folder.main + 'Box', module)
    .addDecorator(withKnobs)
    .add('Box', () => (
        <Box
            padding={select('Padding', spaceOptions, spaceOptions.none)}
            paddingTop={select('Padding top', spaceOptions, spaceOptions.null)}
            paddingRight={select(
                'Padding right',
                spaceOptions,
                spaceOptions.null,
            )}
            paddingLeft={select(
                'Padding left',
                spaceOptions,
                spaceOptions.null,
            )}
            paddingBottom={select(
                'Padding bottom',
                spaceOptions,
                spaceOptions.null,
            )}
            margin={select('Margin', spaceOptions, spaceOptions.none)}
            marginTop={select('Margin top', spaceOptions, spaceOptions.null)}
            marginRight={select(
                'Margin right',
                spaceOptions,
                spaceOptions.null,
            )}
            marginLeft={select('Margin left', spaceOptions, spaceOptions.null)}
            marginBottom={select(
                'Margin bottom',
                spaceOptions,
                spaceOptions.null,
            )}
        >
            <Card>
                <Title align="center">Card</Title>
                <Box
                    padding={select(
                        'Inner padding',
                        spaceOptions,
                        spaceOptions.none,
                    )}
                    paddingTop={select(
                        'Inner padding top',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    paddingRight={select(
                        'Inner padding right',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    paddingLeft={select(
                        'Inner padding left',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    paddingBottom={select(
                        'Inner padding bottom',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    margin={select(
                        'Inner margin',
                        spaceOptions,
                        spaceOptions.none,
                    )}
                    marginTop={select(
                        'Inner margin top',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    marginRight={select(
                        'Inner margin right',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    marginLeft={select(
                        'Inner margin left',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                    marginBottom={select(
                        'Inner margin bottom',
                        spaceOptions,
                        spaceOptions.null,
                    )}
                >
                    <Card>
                        <Title align="center">Inner Card</Title>
                    </Card>
                </Box>
            </Card>
        </Box>
    ));
