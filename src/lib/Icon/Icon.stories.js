import React from 'react';
import { storiesOf } from '@storybook/react';
import {
    withKnobs,
    boolean,
    number,
    select,
    radios,
} from '@storybook/addon-knobs';
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
    iconHtmlTagOptions,
    iconSizeOptions,
    spaceOptions,
    rotateSizeOptions,
    rotateSizeDefault,
} from '../../shared/constants';
import {
    BellIcon,
    OrganizationIcon,
    PlaneIcon,
    PointerIcon,
    ShopIcon,
    TreesIcon,
} from './Icon';

const colorPalletLabel = 'Color pallet';
const colorThemeLabel = 'Color theme';
const colorWabLabel = 'Grey color';
const colorStatusLabel = 'Status color';
const iconSizeLabel = 'Icon size';
const backgroundLabel = 'Has background';
const hoverLabel = 'Has hover (needs background)';
const isActiveLabel = 'Is Active (needs background)';
const marginTopLabel = 'Margin top';
const marginBottomLabel = 'Margin bottom';
const marginLeftLabel = 'Margin left';
const marginRightLabel = 'Margin right';
const centeredLabel = 'Centered';
const rotateSizeLabel = 'Rotation (sens horaire)';

storiesOf(folder.media + 'Icons', module)
    .addDecorator(withKnobs)
    .add('Some icons', () => (
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
                hasHover={boolean(hoverLabel, false)}
                isActive={boolean(isActiveLabel, false)}
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
                rotateSize={select(
                    rotateSizeLabel,
                    rotateSizeOptions,
                    rotateSizeDefault,
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
                hasHover={boolean(hoverLabel, false)}
                isActive={boolean(isActiveLabel, false)}
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
                rotateSize={select(
                    rotateSizeLabel,
                    rotateSizeOptions,
                    rotateSizeDefault,
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
                hasHover={boolean(hoverLabel, false)}
                isActive={boolean(isActiveLabel, false)}
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
                rotateSize={select(
                    rotateSizeLabel,
                    rotateSizeOptions,
                    rotateSizeDefault,
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
                hasHover={boolean(hoverLabel, false)}
                isActive={boolean(isActiveLabel, false)}
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
                rotateSize={select(
                    rotateSizeLabel,
                    rotateSizeOptions,
                    rotateSizeDefault,
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
                hasHover={boolean(hoverLabel, false)}
                isActive={boolean(isActiveLabel, false)}
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
                rotateSize={select(
                    rotateSizeLabel,
                    rotateSizeOptions,
                    rotateSizeDefault,
                )}
            />
        </div>
    ))
    .add('Icon with badge number', () => (
        <BellIcon
            htmlTag={iconHtmlTagOptions.button}
            number={number('Count value', 3, {
                range: true,
                max: 110,
            })}
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
                iconSizeOptions.md,
            )}
            hasBackground={true}
            hasHover={true}
        />
    ));
