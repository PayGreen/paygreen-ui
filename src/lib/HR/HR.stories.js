import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, number } from '@storybook/addon-knobs';
import {
    folder,
    colorThemeOptions,
    colorThemeDefault,
    colorPalletOptions,
    colorPalletDefault,
    spaceOptions,
    colorTypeOptions,
    colorTypeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    spaceDefault,
} from '../../shared/constants';
import Card from '../Card/Card';
import Title from '../Title/Title';
import Text from '../Text/Text';
import HR from './HR';

const colorTypeLabel = 'Color type';
const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Color wab';
const colorStatusLabel = 'Color status';
const marginLateralLabel = 'Margin lateral';
const marginTopLabel = 'Margin top';
const marginBottomLabel = 'Margin bottom';
const opacityLabel = 'Opacity';

storiesOf(folder.main + 'HR', module)
    .addDecorator(withKnobs)
    .add('HR', () => (
        <Card
            paddingLateral="xs"
            colorType={select(
                colorTypeLabel,
                colorTypeOptions,
                colorTypeDefault,
            )}
        >
            <Title
                align="center"
                marginTop="sm"
                colorType={select(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
            >
                HR test
            </Title>
            <HR
                colorType={select(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
                colorPallet={select(
                    colorPalletLabel,
                    colorPalletOptions,
                    colorPalletDefault,
                )}
                colorTheme={select(
                    colorThemeLabel,
                    colorThemeOptions,
                    colorThemeDefault,
                )}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(
                    colorStatusLabel,
                    formStatusOptions,
                    formStatusDefault,
                )}
                marginLateral={select(
                    marginLateralLabel,
                    spaceOptions,
                    spaceDefault,
                )}
                marginTop={select(marginTopLabel, spaceOptions, spaceDefault)}
                marginBottom={select(
                    marginBottomLabel,
                    spaceOptions,
                    spaceDefault,
                )}
                opacity={number(opacityLabel, 100)}
            />
            <Text
                marginBottom="sm"
                colorType={select(
                    colorTypeLabel,
                    colorTypeOptions,
                    colorTypeDefault,
                )}
            >
                Lorem ipsum uno dos tres quatros
            </Text>
        </Card>
    ));
