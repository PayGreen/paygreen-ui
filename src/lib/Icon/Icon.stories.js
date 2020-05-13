import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, select, radios } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    colorPalletDefault,
    colorThemeOptions,
    colorThemeDefault,
    greyOptions,
    greyDefault,
    formStatusOptions,
    formStatusDefault,
    iconSizeOptions,
    spaceOptions,
    rotateOptions,
} from '../../shared/constants';
import {
    PlaneIcon,
    OrganizationIcon,
    ShopIcon,
    TreesIcon,
    PointerIcon,
} from './Icon';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const iconSizeLabel = 'Icon size';
const backgroundLabel = 'Has background';
const shadowLabel = 'With shadow';
const activeLabel = 'Active';
const marginTopLabel = 'Margin top';
const marginBottomLabel = 'Margin bottom';
const marginLeftLabel = 'Margin left';
const marginRightLabel = 'Margin right';
const centeredLabel = 'Centered';
const rotateLabel = 'Rotation (sens horaire)';

storiesOf(folder.main + 'Icons', module)
    .addDecorator(withKnobs)
    .add(
        'Some icons',
        () => (
            <div>
                <PlaneIcon
                    colorPallet={radios(
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
                    iconSize={select(
                        iconSizeLabel,
                        iconSizeOptions,
                        iconSizeOptions.lg,
                    )}
                    hasBackground={boolean(backgroundLabel, false)}
                    shadowSize={boolean(shadowLabel, false)}
                    isActive={boolean(activeLabel, false)}
                    isCentered={boolean(centeredLabel, false)}
                    marginTop={select(
                        marginTopLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginBottom={select(
                        marginBottomLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginLeft={select(
                        marginLeftLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginRight={select(
                        marginRightLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    rotate={radios(
                        rotateLabel,
                        rotateOptions,
                        rotateOptions.step0,
                    )}
                />

                <OrganizationIcon
                    colorPallet={radios(
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
                    iconSize={select(
                        iconSizeLabel,
                        iconSizeOptions,
                        iconSizeOptions.lg,
                    )}
                    hasBackground={boolean(backgroundLabel, false)}
                    shadowSize={boolean(shadowLabel, false)}
                    isActive={boolean(activeLabel, false)}
                    isCentered={boolean(centeredLabel, false)}
                    marginTop={select(
                        marginTopLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginBottom={select(
                        marginBottomLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginLeft={select(
                        marginLeftLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginRight={select(
                        marginRightLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    rotate={radios(
                        rotateLabel,
                        rotateOptions,
                        rotateOptions.step0,
                    )}
                />

                <ShopIcon
                    colorPallet={radios(
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
                    iconSize={select(
                        iconSizeLabel,
                        iconSizeOptions,
                        iconSizeOptions.lg,
                    )}
                    hasBackground={boolean(backgroundLabel, false)}
                    shadowSize={boolean(shadowLabel, false)}
                    isActive={boolean(activeLabel, false)}
                    isCentered={boolean(centeredLabel, false)}
                    marginTop={select(
                        marginTopLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginBottom={select(
                        marginBottomLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginLeft={select(
                        marginLeftLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginRight={select(
                        marginRightLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    rotate={radios(
                        rotateLabel,
                        rotateOptions,
                        rotateOptions.step0,
                    )}
                />

                <TreesIcon
                    colorPallet={radios(
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
                    iconSize={select(
                        iconSizeLabel,
                        iconSizeOptions,
                        iconSizeOptions.lg,
                    )}
                    hasBackground={boolean(backgroundLabel, false)}
                    shadowSize={boolean(shadowLabel, false)}
                    isActive={boolean(activeLabel, false)}
                    isCentered={boolean(centeredLabel, false)}
                    marginTop={select(
                        marginTopLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginBottom={select(
                        marginBottomLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginLeft={select(
                        marginLeftLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginRight={select(
                        marginRightLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    rotate={radios(
                        rotateLabel,
                        rotateOptions,
                        rotateOptions.step0,
                    )}
                />

                <PointerIcon
                    colorPallet={radios(
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
                    iconSize={select(
                        iconSizeLabel,
                        iconSizeOptions,
                        iconSizeOptions.lg,
                    )}
                    hasBackground={boolean(backgroundLabel, false)}
                    shadowSize={boolean(shadowLabel, false)}
                    isActive={boolean(activeLabel, false)}
                    isCentered={boolean(centeredLabel, false)}
                    marginTop={select(
                        marginTopLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginBottom={select(
                        marginBottomLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginLeft={select(
                        marginLeftLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    marginRight={select(
                        marginRightLabel,
                        spaceOptions,
                        spaceOptions.sm,
                    )}
                    rotate={radios(
                        rotateLabel,
                        rotateOptions,
                        rotateOptions.step0,
                    )}
                />
            </div>
        ),
        {
            notes:
                'Queen icons with some styles. You can add background, shadow, change colors, add active mode, center icon, change margins or icon size.',
        },
    );
