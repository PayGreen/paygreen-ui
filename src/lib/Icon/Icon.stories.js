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
import labels from '../../shared/labels';
import * as Icon from './Icon';

storiesOf(folder.media + 'Icons', module)
    .addDecorator(withKnobs)
    .add('All icons', () => {
        const knobs = {
            colorPallet: radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletDefault,
            ),
            colorTheme: select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            ),
            colorWab: select(labels.colorWab, greyOptions, greyDefault),
            colorStatus: select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            ),
            iconSize: select(
                labels.iconSize,
                iconSizeOptions,
                iconSizeOptions.lg,
            ),
            hasBackground: boolean(labels.hasBackground, false),
            hasHover: boolean(labels.hasHover + ' (needs background)', false),
            isActive: boolean(labels.isActive + ' (needs background)', false),
            isCentered: boolean('Is centered', false),
            marginTop: select(labels.marginTop, spaceOptions, spaceOptions.sm),
            marginBottom: select(
                labels.marginBottom,
                spaceOptions,
                spaceOptions.sm,
            ),
            marginLeft: select(
                labels.marginLeft,
                spaceOptions,
                spaceOptions.sm,
            ),
            marginRight: select(
                labels.marginRight,
                spaceOptions,
                spaceOptions.sm,
            ),
            rotateSize: select(
                'Rotate size',
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
            number={number('Number', 3, {
                range: true,
                max: 110,
            })}
            colorPallet={radios(
                labels.colorPallet,
                colorPalletOptions,
                colorPalletDefault,
            )}
            colorTheme={select(
                labels.colorTheme,
                colorThemeOptions,
                colorThemeDefault,
            )}
            colorWab={select(labels.colorWab, greyOptions, greyDefault)}
            colorStatus={select(
                labels.colorStatus,
                formStatusOptions,
                formStatusDefault,
            )}
            iconSize={select(
                labels.iconSize,
                iconSizeOptions,
                iconSizeOptions.md,
            )}
            hasBackground={true}
            hasHover={true}
        />
    ));
