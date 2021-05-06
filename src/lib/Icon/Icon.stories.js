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
import * as Icon from './Icon';

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
    .add('All icons', () => {
        const knobs = {
            colorPallet: radios(
                colorPalletLabel,
                colorPalletOptions,
                colorPalletDefault,
            ),
            colorTheme: select(
                colorThemeLabel,
                colorThemeOptions,
                colorThemeDefault,
            ),
            colorWab: select(colorWabLabel, greyOptions, greyDefault),
            colorStatus: select(
                colorStatusLabel,
                formStatusOptions,
                formStatusDefault,
            ),
            iconSize: select(
                iconSizeLabel,
                iconSizeOptions,
                iconSizeOptions.lg,
            ),
            hasBackground: boolean(backgroundLabel, false),
            hasHover: boolean(hoverLabel, false),
            isActive: boolean(isActiveLabel, false),
            isCentered: boolean(centeredLabel, false),
            marginTop: select(marginTopLabel, spaceOptions, spaceOptions.sm),
            marginBottom: select(
                marginBottomLabel,
                spaceOptions,
                spaceOptions.sm,
            ),
            marginLeft: select(marginLeftLabel, spaceOptions, spaceOptions.sm),
            marginRight: select(
                marginRightLabel,
                spaceOptions,
                spaceOptions.sm,
            ),
            rotateSize: select(
                rotateSizeLabel,
                rotateSizeOptions,
                rotateSizeDefault,
            ),
        };

        return (
            <div>
                <Icon.ArrowBottomIcon {...knobs} />
                <Icon.ArrowCircleLeftIcon {...knobs} />
                <Icon.ArrowCircleLeftBoldIcon {...knobs} />
                <Icon.ArrowCircleRightBoldIcon {...knobs} />
                <Icon.ArrowCircleRightIcon {...knobs} />
                <Icon.ArrowLeftIcon {...knobs} />
                <Icon.ArrowLongBottomIcon {...knobs} />
                <Icon.ArrowLongLeftIcon {...knobs} />
                <Icon.ArrowLongRightIcon {...knobs} />
                <Icon.ArrowLongTopIcon {...knobs} />
                <Icon.ArrowRightIcon {...knobs} />
                <Icon.ArrowRoundBottomLeftIcon {...knobs} />
                <Icon.ArrowRoundBottomRightIcon {...knobs} />
                <Icon.ArrowRoundTopLeftIcon {...knobs} />
                <Icon.ArrowRoundTopRightIcon {...knobs} />
                <Icon.ArrowTopIcon {...knobs} />
                <Icon.BalloonBoldIcon {...knobs} />
                <Icon.BalloonIcon {...knobs} />
                <Icon.BankIcon {...knobs} />
                <Icon.BeakerBoldIcon {...knobs} />
                <Icon.BeakerIcon {...knobs} />
                <Icon.BedIcon {...knobs} />
                <Icon.BellBoldIcon {...knobs} />
                <Icon.BellIcon {...knobs} />
                <Icon.BrushIcon {...knobs} />
                <Icon.BulbBoldIcon {...knobs} />
                <Icon.BulbIcon {...knobs} />
                <Icon.CameraIcon {...knobs} />
                <Icon.CardsBoldIcon {...knobs} />
                <Icon.CardsIcon {...knobs} />
                <Icon.CarIcon {...knobs} />
                <Icon.CartIcon {...knobs} />
                <Icon.CautionBoldIcon {...knobs} />
                <Icon.CautionIcon {...knobs} />
                <Icon.ChangeIcon {...knobs} />
                <Icon.CheckBoldIcon {...knobs} />
                <Icon.CheckboxIcon {...knobs} />
                <Icon.CheckIcon {...knobs} />
                <Icon.CircuitIcon {...knobs} />
                <Icon.ClockBoldIcon {...knobs} />
                <Icon.ClockIcon {...knobs} />
                <Icon.CodeIcon {...knobs} />
                <Icon.CoinsIcon {...knobs} />
                <Icon.ConsoleIcon {...knobs} />
                <Icon.ContractIcon {...knobs} />
                <Icon.CopyIcon {...knobs} />
                <Icon.CrossBoldIcon {...knobs} />
                <Icon.CrossIcon {...knobs} />
                <Icon.DownloadIcon {...knobs} />
                <Icon.EmptyIcon {...knobs} />
                <Icon.EyedropperIcon {...knobs} />
                <Icon.EyeIcon {...knobs} />
                <Icon.FactoryIcon {...knobs} />
                <Icon.GlobeIcon {...knobs} />
                <Icon.HeartIcon {...knobs} />
                <Icon.HourglassIcon {...knobs} />
                <Icon.InformationIcon {...knobs} />
                <Icon.LeafIcon {...knobs} />
                <Icon.LetterBoldIcon {...knobs} />
                <Icon.LetterIcon {...knobs} />
                <Icon.LinkBoldIcon {...knobs} />
                <Icon.LinkIcon {...knobs} />
                <Icon.ListIcon {...knobs} />
                <Icon.LockIcon {...knobs} />
                <Icon.MarkerIcon {...knobs} />
                <Icon.MealIcon {...knobs} />
                <Icon.MegaphoneIcon {...knobs} />
                <Icon.MenuBoldIcon {...knobs} />
                <Icon.MenuDotsIcon {...knobs} />
                <Icon.MenuIcon {...knobs} />
                <Icon.MeterIcon {...knobs} />
                <Icon.MinusIcon {...knobs} />
                <Icon.MoonIcon {...knobs} />
                <Icon.MooveIcon {...knobs} />
                <Icon.OrganizationIcon {...knobs} />
                <Icon.OutIcon {...knobs} />
                <Icon.PaletteIcon {...knobs} />
                <Icon.PaperclipIcon {...knobs} />
                <Icon.PenIcon {...knobs} />
                <Icon.PhoneIcon {...knobs} />
                <Icon.PictureIcon {...knobs} />
                <Icon.PlaneIcon {...knobs} />
                <Icon.PlugIcon {...knobs} />
                <Icon.PlusIcon {...knobs} />
                <Icon.PointerIcon {...knobs} />
                <Icon.PopinIcon {...knobs} />
                <Icon.QuestionBoldIcon {...knobs} />
                <Icon.QuestionIcon {...knobs} />
                <Icon.QuoteLeftIcon {...knobs} />
                <Icon.QuoteRightIcon {...knobs} />
                <Icon.RefreshBoldIcon {...knobs} />
                <Icon.RefreshIcon {...knobs} />
                <Icon.SatchelIcon {...knobs} />
                <Icon.ScheduleIcon {...knobs} />
                <Icon.SearchBoldIcon {...knobs} />
                <Icon.SearchIcon {...knobs} />
                <Icon.ShopIcon {...knobs} />
                <Icon.SunIcon {...knobs} />
                <Icon.SupportIcon {...knobs} />
                <Icon.TrashIcon {...knobs} />
                <Icon.TreesIcon {...knobs} />
                <Icon.TrophyIcon {...knobs} />
                <Icon.TruckIcon {...knobs} />
                <Icon.TvIcon {...knobs} />
                <Icon.UploadIcon {...knobs} />
                <Icon.UserBoldIcon {...knobs} />
                <Icon.UsersIcon {...knobs} />
                <Icon.UserIcon {...knobs} />
                <Icon.WalletIcon {...knobs} />
                <Icon.WeightIcon {...knobs} />
                <Icon.WheelsIcon {...knobs} />
                <Icon.WidgetIcon {...knobs} />
            </div>
        );
    })
    .add('Icon with badge number', () => (
        <Icon.BellIcon
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
