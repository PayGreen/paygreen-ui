import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import labels from '../../shared/labels';
import { UserIcon } from '../Icon/Icon';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import MenuMobile from './MenuMobile';

storiesOf(folder.layout + 'MenuMobile', module)
    .addDecorator(withKnobs)
    .add('MenuMobile', () => (
        <MenuMobile
            isHidden={boolean(labels.isHidden, false)}
            hasTopStyle={boolean(labels.hasTopStyle, false)}
        >
            <MenuHamburger />

            <a href="#">
                <Logo hasThemeColor={true}>{logo}</Logo>
            </a>

            <UserIcon
                htmlTag={iconHtmlTagOptions.button}
                iconSize={iconSizeOptions.xl}
            />
        </MenuMobile>
    ));
