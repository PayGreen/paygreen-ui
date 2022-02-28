import React from 'react';
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

export default {
    title: folder.media + 'Icons',
    argTypes: {
        colorPallet: {
            name: labels.colorPallet,
            options: Object.values(colorPalletOptions),
            control: 'radio',
        },
        colorTheme: {
            name: labels.colorTheme,
            options: Object.values(colorThemeOptions),
            control: 'select',
        },
        colorWab: {
            name: labels.colorWab,
            options: Object.values(greyOptions),
            control: 'select',
        },
        colorStatus: {
            name: labels.colorStatus,
            options: Object.values(formStatusOptions),
            control: 'select',
        },
        iconSize: {
            name: labels.iconSize,
            options: Object.values(iconSizeOptions),
            control: 'select',
        },
        disabled: {
            name: labels.disabled,
            control: 'boolean',
        },
    },
    args: {
        colorPallet: colorPalletDefault,
        colorTheme: colorThemeDefault,
        colorWab: greyDefault,
        colorStatus: formStatusDefault,
        disabled: false,
    },
};

export const AllIcons = args => (
    <>
        <Title marginTop={spaceOptions.xs} marginBottom={spaceOptions.xs}>
            Arrows
        </Title>

        <div>
            <Icon.ArrowLeftIcon title="ArrowLeftIcon" {...args} />
            <Icon.ArrowRightIcon title="ArrowRightIcon" {...args} />
            <Icon.ArrowTopIcon title="ArrowTopIcon" {...args} />
            <Icon.ArrowBottomIcon title="ArrowBottomIcon" {...args} />
        </div>

        <div>
            <Icon.ArrowLongLeftIcon title="ArrowLongLeftIcon" {...args} />
            <Icon.ArrowLongRightIcon title="ArrowLongRightIcon" {...args} />
            <Icon.ArrowLongTopIcon title="ArrowLongTopIcon" {...args} />
            <Icon.ArrowLongBottomIcon title="ArrowLongBottomIcon" {...args} />
        </div>

        <div>
            <Icon.ArrowRoundTopLeftIcon
                title="ArrowRoundTopLeftIcon"
                {...args}
            />
            <Icon.ArrowRoundTopRightIcon
                title="ArrowRoundTopRightIcon"
                {...args}
            />
            <Icon.ArrowRoundBottomLeftIcon
                title="ArrowRoundBottomLeftIcon"
                {...args}
            />
            <Icon.ArrowRoundBottomRightIcon
                title="ArrowRoundBottomRightIcon"
                {...args}
            />
        </div>

        <div>
            <Icon.ArrowCircleLeftBoldIcon
                title="ArrowCircleLeftBoldIcon"
                {...args}
            />
            <Icon.ArrowCircleLeftIcon title="ArrowCircleLeftIcon" {...args} />
            <Icon.ArrowCircleRightBoldIcon
                title="ArrowCircleRightBoldIcon"
                {...args}
            />
            <Icon.ArrowCircleRightIcon title="ArrowCircleRightIcon" {...args} />
        </div>

        <div>
            <Icon.RefreshBoldIcon title="RefreshBoldIcon" {...args} />
            <Icon.RefreshIcon title="RefreshIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Symbols
        </Title>

        <div>
            <Icon.CautionBoldIcon title="CautionBoldIcon" {...args} />
            <Icon.CautionIcon title="CautionIcon" {...args} />
            <Icon.CheckBoldIcon title="CheckBoldIcon" {...args} />
            <Icon.CheckIcon title="CheckIcon" {...args} />
            <Icon.CrossBoldIcon title="CrossBoldIcon" {...args} />
            <Icon.CrossIcon title="CrossIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Web and dev
        </Title>

        <div>
            <Icon.ChangeIcon title="ChangeIcon" {...args} />
            <Icon.CheckboxIcon title="CheckboxIcon" {...args} />
            <Icon.CodeIcon title="CodeIcon" {...args} />
            <Icon.ConsoleIcon title="ConsoleIcon" {...args} />
            <Icon.CopyIcon title="CopyIcon" {...args} />
            <Icon.InformationIcon title="InformationIcon" {...args} />
            <Icon.LinkBoldIcon title="LinkBoldIcon" {...args} />
            <Icon.LinkIcon title="LinkIcon" {...args} />
            <Icon.ListIcon title="ListIcon" {...args} />
            <Icon.MarkerIcon title="MarkerIcon" {...args} />
            <Icon.MenuBoldIcon title="MenuBoldIcon" {...args} />
            <Icon.MenuIcon title="MenuIcon" {...args} />
            <Icon.MenuDotsIcon title="MenuDotsIcon" {...args} />
            <Icon.MooveIcon title="MooveIcon" {...args} />
            <Icon.OutIcon title="OutIcon" {...args} />
            <Icon.PointerIcon title="PointerIcon" {...args} />
            <Icon.PopinIcon title="PopinIcon" {...args} />
            <Icon.SearchBoldIcon title="SearchBoldIcon" {...args} />
            <Icon.SearchIcon title="SearchIcon" {...args} />
            <Icon.UploadIcon title="UploadIcon" {...args} />
            <Icon.DownloadIcon title="DownloadIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Math and punctuation
        </Title>

        <div>
            <Icon.EmptyIcon title="EmptyIcon" {...args} />
            <Icon.MinusIcon title="MinusIcon" {...args} />
            <Icon.PlusIcon title="PlusIcon" {...args} />
            <Icon.QuestionBoldIcon title="QuestionBoldIcon" {...args} />
            <Icon.QuestionIcon title="QuestionIcon" {...args} />
            <Icon.QuoteLeftIcon title="QuoteLeftIcon" {...args} />
            <Icon.QuoteRightIcon title="QuoteRightIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Transport
        </Title>

        <div>
            <Icon.CarIcon title="CarIcon" {...args} />
            <Icon.PlaneIcon title="PlaneIcon" {...args} />
            <Icon.ScooterIcon title="ScooterIcon" {...args} />
            <Icon.TruckIcon title="TruckIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Devices
        </Title>

        <div>
            <Icon.DesktopIcon title="DesktopIcon" {...args} />
            <Icon.MobileIcon title="MobileIcon" {...args} />
            <Icon.TabletIcon title="TabletIcon" {...args} />
            <Icon.TvIcon title="TvIcon" {...args} />
        </div>

        <Title marginTop={spaceOptions.sm} marginBottom={spaceOptions.xs}>
            Objects
        </Title>

        <div>
            <Icon.BalloonBoldIcon title="BalloonBoldIcon" {...args} />
            <Icon.BalloonIcon title="BalloonIcon" {...args} />
            <Icon.BankIcon title="BankIcon" {...args} />
            <Icon.BeakerBoldIcon title="BeakerBoldIcon" {...args} />
            <Icon.BeakerIcon title="BeakerIcon" {...args} />
            <Icon.BedIcon title="BedIcon" {...args} />
            <Icon.BellBoldIcon title="BellBoldIcon" {...args} />
            <Icon.BellIcon title="BellIcon" {...args} />
            <Icon.BrushIcon title="BrushIcon" {...args} />
            <Icon.BulbBoldIcon title="BulbBoldIcon" {...args} />
            <Icon.BulbIcon title="BulbIcon" {...args} />
            <Icon.CameraIcon title="CameraIcon" {...args} />
            <Icon.CardsBoldIcon title="CardsBoldIcon" {...args} />
            <Icon.CardsIcon title="CardsIcon" {...args} />
            <Icon.CartIcon title="CartIcon" {...args} />
            <Icon.CircuitIcon title="CircuitIcon" {...args} />
            <Icon.ClockBoldIcon title="ClockBoldIcon" {...args} />
            <Icon.ClockIcon title="ClockIcon" {...args} />
            <Icon.CoinsIcon title="CoinsIcon" {...args} />
            <Icon.ContractIcon title="ContractIcon" {...args} />
            <Icon.EarthIcon title="EarthIcon" {...args} />
            <Icon.EyedropperIcon title="EyedropperIcon" {...args} />
            <Icon.EyeIcon title="EyeIcon" {...args} />
            <Icon.FactoryIcon title="FactoryIcon" {...args} />
            <Icon.GlobeIcon title="GlobeIcon" {...args} />
            <Icon.HeartIcon title="HeartIcon" {...args} />
            <Icon.HourglassIcon title="HourglassIcon" {...args} />
            <Icon.LeafIcon title="LeafIcon" {...args} />
            <Icon.LetterBoldIcon title="LetterBoldIcon" {...args} />
            <Icon.LetterIcon title="LetterIcon" {...args} />
            <Icon.LockIcon title="LockIcon" {...args} />
            <Icon.MealIcon title="MealIcon" {...args} />
            <Icon.MegaphoneIcon title="MegaphoneIcon" {...args} />
            <Icon.MeterIcon title="MeterIcon" {...args} />
            <Icon.MoonIcon title="MoonIcon" {...args} />
            <Icon.OrganizationIcon title="OrganizationIcon" {...args} />
            <Icon.PaletteIcon title="PaletteIcon" {...args} />
            <Icon.PaperclipIcon title="PaperclipIcon" {...args} />
            <Icon.PenIcon title="PenIcon" {...args} />
            <Icon.PhoneIcon title="PhoneIcon" {...args} />
            <Icon.PictureIcon title="PictureIcon" {...args} />
            <Icon.PlugIcon title="PlugIcon" {...args} />
            <Icon.UnplugIcon title="UnplugIcon" {...args} />
            <Icon.SatchelIcon title="SatchelIcon" {...args} />
            <Icon.ScheduleIcon title="ScheduleIcon" {...args} />
            <Icon.ShopIcon title="ShopIcon" {...args} />
            <Icon.StartIcon title="StartIcon" {...args} />
            <Icon.SunIcon title="SunIcon" {...args} />
            <Icon.SupportIcon title="SupportIcon" {...args} />
            <Icon.TrashIcon title="TrashIcon" {...args} />
            <Icon.TreesIcon title="TreesIcon" {...args} />
            <Icon.TrophyIcon title="TrophyIcon" {...args} />
            <Icon.UserBoldIcon title="UserBoldIcon" {...args} />
            <Icon.UserIcon title="UserIcon" {...args} />
            <Icon.UsersIcon title="UsersIcon" {...args} />
            <Icon.WalletIcon title="WalletIcon" {...args} />
            <Icon.WeightIcon title="WeightIcon" {...args} />
            <Icon.WheelsIcon title="WheelsIcon" {...args} />
            <Icon.WidgetIcon title="WidgetIcon" {...args} />
        </div>
    </>
);

AllIcons.argTypes = {
    hasBackground: {
        name: labels.hasBackground,
        control: 'boolean',
    },
    hasHover: {
        name: labels.hasHover + ' (needs background)',
        control: 'boolean',
    },
    isActive: {
        name: labels.isActive + ' (needs background)',
        control: 'boolean',
    },
    isCentered: {
        name: 'Is centered',
        control: 'boolean',
    },
    marginTop: {
        name: labels.marginTop,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginBottom: {
        name: labels.marginBottom,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginLeft: {
        name: labels.marginLeft,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    marginRight: {
        name: labels.marginRight,
        options: Object.values(spaceOptions),
        control: 'select',
    },
    rotateSize: {
        name: 'Rotate size',
        options: Object.values(rotateSizeOptions),
        control: 'select',
    },
};

AllIcons.args = {
    hasBackground: true,
    iconSize: iconSizeOptions.lg,
    hasHover: false,
    isActive: false,
    isCentered: false,
    marginLeft: spaceOptions.sm,
    marginRight: spaceOptions.sm,
    marginTop: spaceOptions.sm,
    marginBottom: spaceOptions.sm,
    rotateSize: rotateSizeDefault,
};

export const IconWithBadgeNumber = args => (
    <Icon.BellIcon
        {...args}
        htmlTag={iconHtmlTagOptions.button}
        hasBackground={true}
        hasHover={true}
    />
);

IconWithBadgeNumber.argTypes = {
    number: {
        name: 'Number',
        control: { type: 'range', min: 0, max: 110 },
    },
};

IconWithBadgeNumber.args = {
    iconSize: iconSizeOptions.md,
    number: 3,
};
