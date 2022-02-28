import React from 'react';
import {
    folder,
    hoverDirectionOptions,
    hoverDirectionDefault,
    spaceOptions,
    alignOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import Badge from '../Badge/Badge';
import Logo from './Logo';
import { logo } from './sample/logo';

export default {
    title: folder.media + 'Logo',
    argTypes: {
        hasBaseline: {
            name: 'Has baseline',
            control: 'boolean',
        },
        badge: {
            name: 'With badge',
            control: 'boolean',
        },
        isWhite: {
            name: 'Is White',
            control: 'boolean',
        },
        hasThemeColor: {
            name: 'Has theme color',
            control: 'boolean',
        },
        blockWidth: {
            name: labels.blockWidth,
            options: Object.values(spaceOptions),
            defaultValue: spaceOptions.sm,
            control: 'select',
        },
        blockHeight: {
            name: labels.blockHeight,
            options: Object.values(spaceOptions),
            control: 'select',
        },
        align: {
            name: labels.align,
            options: Object.values(alignOptions),
            control: 'select',
        },
        hasHoverColor: {
            name: 'Has hover color',
            control: 'boolean',
        },
        hoverDirection: {
            name: 'Hover direction',
            options: Object.values(hoverDirectionOptions),
            control: 'radio',
        },
    },
};

export const SimpleLogo = ({ badge, ...args }) => (
    <a href="#">
        <Logo badge={badge ? <Badge>Tree</Badge> : null} {...args}>
            {logo}
        </Logo>
    </a>
);

SimpleLogo.args = {
    hasBaseline: true,
    badge: false,
    isWhite: false,
    hasThemeColor: false,
    blockWidth: spaceOptions.sm,
    blockHeight: spaceOptions.none,
    align: alignOptions.center,
    hasHoverColor: false,
    hoverDirection: hoverDirectionDefault,
};
