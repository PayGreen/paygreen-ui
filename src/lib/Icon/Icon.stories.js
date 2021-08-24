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
import Title from '../Title/Title';
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
            <>
                <Title
                    marginTop={spaceOptions.xs}
                    marginBottom={spaceOptions.xs}
                >
                    Arrows
                </Title>

                <div>
                    <Icon.ArrowCircleLeftBoldIcon
                        title="ArrowCircleLeftBoldIcon"
                        {...knobs}
                    />
                    <Icon.ArrowCircleLeftIcon
                        title="ArrowCircleLeftIcon"
                        {...knobs}
                    />
                    <Icon.ArrowCircleRightBoldIcon
                        title="ArrowCircleRightBoldIcon"
                        {...knobs}
                    />
                    <Icon.ArrowCircleRightIcon
                        title="ArrowCircleRightIcon"
                        {...knobs}
                    />
                </div>

                <div>
                    <Icon.ArrowLeftIcon title="ArrowLeftIcon" {...knobs} />
                    <Icon.ArrowRightIcon title="ArrowRightIcon" {...knobs} />
                    <Icon.ArrowTopIcon title="ArrowTopIcon" {...knobs} />
                    <Icon.ArrowBottomIcon title="ArrowBottomIcon" {...knobs} />
                </div>

                <div>
                    <Icon.ArrowLongLeftIcon
                        title="ArrowLongLeftIcon"
                        {...knobs}
                    />
                    <Icon.ArrowLongRightIcon
                        title="ArrowLongRightIcon"
                        {...knobs}
                    />
                    <Icon.ArrowLongTopIcon
                        title="ArrowLongTopIcon"
                        {...knobs}
                    />
                    <Icon.ArrowLongBottomIcon
                        title="ArrowLongBottomIcon"
                        {...knobs}
                    />
                </div>

                <div>
                    <Icon.ArrowRoundTopLeftIcon
                        title="ArrowRoundTopLeftIcon"
                        {...knobs}
                    />
                    <Icon.ArrowRoundTopRightIcon
                        title="ArrowRoundTopRightIcon"
                        {...knobs}
                    />
                    <Icon.ArrowRoundBottomLeftIcon
                        title="ArrowRoundBottomLeftIcon"
                        {...knobs}
                    />
                    <Icon.ArrowRoundBottomRightIcon
                        title="ArrowRoundBottomRightIcon"
                        {...knobs}
                    />
                </div>

                <Title
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.xs}
                >
                    Symbols
                </Title>

                <div>
                    <Icon.CautionBoldIcon title="CautionBoldIcon" {...knobs} />
                    <Icon.CautionIcon title="CautionIcon" {...knobs} />
                    <Icon.ChangeIcon title="ChangeIcon" {...knobs} />
                    <Icon.CheckBoldIcon title="CheckBoldIcon" {...knobs} />
                    <Icon.CheckIcon title="CheckIcon" {...knobs} />
                    <Icon.MenuBoldIcon title="MenuBoldIcon" {...knobs} />
                    <Icon.MenuIcon title="MenuIcon" {...knobs} />
                    <Icon.MenuDotsIcon title="MenuDotsIcon" {...knobs} />
                    <Icon.MooveIcon title="MooveIcon" {...knobs} />
                    <Icon.OutIcon title="OutIcon" {...knobs} />
                    <Icon.RefreshBoldIcon title="RefreshBoldIcon" {...knobs} />
                    <Icon.RefreshIcon title="RefreshIcon" {...knobs} />
                    <Icon.UploadIcon title="UploadIcon" {...knobs} />
                    <Icon.DownloadIcon title="DownloadIcon" {...knobs} />
                </div>

                <Title
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.xs}
                >
                    Math and punctuation
                </Title>

                <div>
                    <Icon.EmptyIcon title="EmptyIcon" {...knobs} />
                    <Icon.MinusIcon title="MinusIcon" {...knobs} />
                    <Icon.PlusIcon title="PlusIcon" {...knobs} />
                    <Icon.QuestionBoldIcon
                        title="QuestionBoldIcon"
                        {...knobs}
                    />
                    <Icon.QuestionIcon title="QuestionIcon" {...knobs} />
                    <Icon.QuoteLeftIcon title="QuoteLeftIcon" {...knobs} />
                    <Icon.QuoteRightIcon title="QuoteRightIcon" {...knobs} />
                </div>

                <Title
                    marginTop={spaceOptions.sm}
                    marginBottom={spaceOptions.xs}
                >
                    Objects
                </Title>

                <div>
                    <Icon.BalloonBoldIcon title="BalloonBoldIcon" {...knobs} />
                    <Icon.BalloonIcon title="BalloonIcon" {...knobs} />
                    <Icon.BankIcon title="BankIcon" {...knobs} />
                    <Icon.BeakerBoldIcon title="BeakerBoldIcon" {...knobs} />
                    <Icon.BeakerIcon title="BeakerIcon" {...knobs} />
                    <Icon.BedIcon title="BedIcon" {...knobs} />
                    <Icon.BellBoldIcon title="BellBoldIcon" {...knobs} />
                    <Icon.BellIcon title="BellIcon" {...knobs} />
                    <Icon.BrushIcon title="BrushIcon" {...knobs} />
                    <Icon.BulbBoldIcon title="BulbBoldIcon" {...knobs} />
                    <Icon.BulbIcon title="BulbIcon" {...knobs} />
                    <Icon.CameraIcon title="CameraIcon" {...knobs} />
                    <Icon.CardsBoldIcon title="CardsBoldIcon" {...knobs} />
                    <Icon.CardsIcon title="CardsIcon" {...knobs} />
                    <Icon.CarIcon title="CarIcon" {...knobs} />
                    <Icon.CartIcon title="CartIcon" {...knobs} />
                    <Icon.CheckboxIcon title="CheckboxIcon" {...knobs} />
                    <Icon.CircuitIcon title="CircuitIcon" {...knobs} />
                    <Icon.ClockBoldIcon title="ClockBoldIcon" {...knobs} />
                    <Icon.ClockIcon title="ClockIcon" {...knobs} />
                    <Icon.CodeIcon title="CodeIcon" {...knobs} />
                    <Icon.CoinsIcon title="CoinsIcon" {...knobs} />
                    <Icon.ConsoleIcon title="ConsoleIcon" {...knobs} />
                    <Icon.ContractIcon title="ContractIcon" {...knobs} />
                    <Icon.CopyIcon title="CopyIcon" {...knobs} />
                    <Icon.CrossBoldIcon title="CrossBoldIcon" {...knobs} />
                    <Icon.CrossIcon title="CrossIcon" {...knobs} />
                    <Icon.EarthIcon title="EarthIcon" {...knobs} />
                    <Icon.EyedropperIcon title="EyedropperIcon" {...knobs} />
                    <Icon.EyeIcon title="EyeIcon" {...knobs} />
                    <Icon.FactoryIcon title="FactoryIcon" {...knobs} />
                    <Icon.GlobeIcon title="GlobeIcon" {...knobs} />
                    <Icon.HeartIcon title="HeartIcon" {...knobs} />
                    <Icon.HourglassIcon title="HourglassIcon" {...knobs} />
                    <Icon.InformationIcon title="InformationIcon" {...knobs} />
                    <Icon.LeafIcon title="LeafIcon" {...knobs} />
                    <Icon.LetterBoldIcon title="LetterBoldIcon" {...knobs} />
                    <Icon.LetterIcon title="LetterIcon" {...knobs} />
                    <Icon.LinkBoldIcon title="LinkBoldIcon" {...knobs} />
                    <Icon.LinkIcon title="LinkIcon" {...knobs} />
                    <Icon.ListIcon title="ListIcon" {...knobs} />
                    <Icon.LockIcon title="LockIcon" {...knobs} />
                    <Icon.MarkerIcon title="MarkerIcon" {...knobs} />
                    <Icon.MealIcon title="MealIcon" {...knobs} />
                    <Icon.MegaphoneIcon title="MegaphoneIcon" {...knobs} />
                    <Icon.MeterIcon title="MeterIcon" {...knobs} />
                    <Icon.MoonIcon title="MoonIcon" {...knobs} />
                    <Icon.OrganizationIcon
                        title="OrganizationIcon"
                        {...knobs}
                    />
                    <Icon.PaletteIcon title="PaletteIcon" {...knobs} />
                    <Icon.PaperclipIcon title="PaperclipIcon" {...knobs} />
                    <Icon.PenIcon title="PenIcon" {...knobs} />
                    <Icon.PhoneIcon title="PhoneIcon" {...knobs} />
                    <Icon.PictureIcon title="PictureIcon" {...knobs} />
                    <Icon.PlaneIcon title="PlaneIcon" {...knobs} />
                    <Icon.PlugIcon title="PlugIcon" {...knobs} />
                    <Icon.UnplugIcon title="UnplugIcon" {...knobs} />
                    <Icon.PointerIcon title="PointerIcon" {...knobs} />
                    <Icon.PopinIcon title="PopinIcon" {...knobs} />
                    <Icon.SatchelIcon title="SatchelIcon" {...knobs} />
                    <Icon.ScheduleIcon title="ScheduleIcon" {...knobs} />
                    <Icon.ScooterIcon title="ScooterIcon" {...knobs} />
                    <Icon.SearchBoldIcon title="SearchBoldIcon" {...knobs} />
                    <Icon.SearchIcon title="SearchIcon" {...knobs} />
                    <Icon.ShopIcon title="ShopIcon" {...knobs} />
                    <Icon.StartIcon title="StartIcon" {...knobs} />
                    <Icon.SunIcon title="SunIcon" {...knobs} />
                    <Icon.SupportIcon title="SupportIcon" {...knobs} />
                    <Icon.TrashIcon title="TrashIcon" {...knobs} />
                    <Icon.TreesIcon title="TreesIcon" {...knobs} />
                    <Icon.TrophyIcon title="TrophyIcon" {...knobs} />
                    <Icon.TruckIcon title="TruckIcon" {...knobs} />
                    <Icon.TvIcon title="TvIcon" {...knobs} />
                    <Icon.UserBoldIcon title="UserBoldIcon" {...knobs} />
                    <Icon.UserIcon title="UserIcon" {...knobs} />
                    <Icon.UsersIcon title="UsersIcon" {...knobs} />
                    <Icon.WalletIcon title="WalletIcon" {...knobs} />
                    <Icon.WeightIcon title="WeightIcon" {...knobs} />
                    <Icon.WheelsIcon title="WheelsIcon" {...knobs} />
                    <Icon.WidgetIcon title="WidgetIcon" {...knobs} />
                </div>
            </>
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
