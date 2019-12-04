import React from 'react';
import {
    PlaneIcon,
    OrganizationIcon,
    ShopIcon,
    TreesIcon,
    PointerIcon
} from './Icon';
import {
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions
} from '../../shared/constants';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, radios } from '@storybook/addon-knobs';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const iconSizeLabel = 'Icon size';
const backgroundLabel = 'With background';
const shadowLabel = 'With shadow';
const activeLabel = 'Active';
const marginTopLabel = 'Margin top';
const marginBottomLabel = 'Margin bottom';
const marginLeftLabel = 'Margin left';
const marginRightLabel = 'Margin right';
const centeredLabel = 'Centered';

storiesOf('Icons', module)
    .addDecorator(withKnobs)
    .add('Some icons', () => (
        <div>
            <PlaneIcon
                colorPallet={radios(colorPalletLabel, colorPalletOptions, colorPalletDefault)}
                colorTheme={select(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(colorStatusLabel, formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean(backgroundLabel, false)}
                shadow={boolean(shadowLabel, false)}
                active={boolean(activeLabel, false)}
                marginTop={select(marginTopLabel, spaceOptions, spaceOptions.sm)}
                marginBottom={select(marginBottomLabel, spaceOptions, spaceOptions.sm)}
                marginLeft={select(marginLeftLabel, spaceOptions, spaceOptions.sm)}
                marginRight={select(marginRightLabel, spaceOptions, spaceOptions.sm)}
                centered={boolean(centeredLabel, false)}
            />

            <OrganizationIcon
                colorPallet={radios(colorPalletLabel, colorPalletOptions, colorPalletDefault)}
                colorTheme={select(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(colorStatusLabel, formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean(backgroundLabel, false)}
                shadow={boolean(shadowLabel, false)}
                active={boolean(activeLabel, false)}
                marginTop={select(marginTopLabel, spaceOptions, spaceOptions.sm)}
                marginBottom={select(marginBottomLabel, spaceOptions, spaceOptions.sm)}
                marginLeft={select(marginLeftLabel, spaceOptions, spaceOptions.sm)}
                marginRight={select(marginRightLabel, spaceOptions, spaceOptions.sm)}
                centered={boolean(centeredLabel, false)}
            />

            <ShopIcon
                colorPallet={radios(colorPalletLabel, colorPalletOptions, colorPalletDefault)}
                colorTheme={select(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(colorStatusLabel, formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean(backgroundLabel, false)}
                shadow={boolean(shadowLabel, false)}
                active={boolean(activeLabel, false)}
                marginTop={select(marginTopLabel, spaceOptions, spaceOptions.sm)}
                marginBottom={select(marginBottomLabel, spaceOptions, spaceOptions.sm)}
                marginLeft={select(marginLeftLabel, spaceOptions, spaceOptions.sm)}
                marginRight={select(marginRightLabel, spaceOptions, spaceOptions.sm)}
                centered={boolean(centeredLabel, false)}
            />

            <TreesIcon
                colorPallet={radios(colorPalletLabel, colorPalletOptions, colorPalletDefault)}
                colorTheme={select(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(colorStatusLabel, formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean(backgroundLabel, false)}
                shadow={boolean(shadowLabel, false)}
                active={boolean(activeLabel, false)}
                marginTop={select(marginTopLabel, spaceOptions, spaceOptions.sm)}
                marginBottom={select(marginBottomLabel, spaceOptions, spaceOptions.sm)}
                marginLeft={select(marginLeftLabel, spaceOptions, spaceOptions.sm)}
                marginRight={select(marginRightLabel, spaceOptions, spaceOptions.sm)}
                centered={boolean(centeredLabel, false)}
            />

            <PointerIcon
                colorPallet={radios(colorPalletLabel, colorPalletOptions, colorPalletDefault)}
                colorTheme={select(colorThemeLabel, colorThemeOptions, colorThemeDefault)}
                colorWab={select(colorWabLabel, greyOptions, greyDefault)}
                colorStatus={select(colorStatusLabel, formStatusOptions, formStatusDefault)}
                iconSize={select(iconSizeLabel, iconSizeOptions, iconSizeOptions.lg)}
                background={boolean(backgroundLabel, false)}
                shadow={boolean(shadowLabel, false)}
                active={boolean(activeLabel, false)}
                marginTop={select(marginTopLabel, spaceOptions, spaceOptions.sm)}
                marginBottom={select(marginBottomLabel, spaceOptions, spaceOptions.sm)}
                marginLeft={select(marginLeftLabel, spaceOptions, spaceOptions.sm)}
                marginRight={select(marginRightLabel, spaceOptions, spaceOptions.sm)}
                centered={boolean(centeredLabel, false)}
            />
        </div>
    ), {
        notes: 'Queen icons with some styles. You can add background, shadow, change colors, add active mode, center icon, change margins or icon size.',
    });