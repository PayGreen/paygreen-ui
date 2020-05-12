import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { ArrowRightIcon } from '../Icon/Icon';
import { Box } from '../Main/style';
import Sidebar from './Sidebar';
import Topbar from '../Topbar/Topbar';

const logoSidebar = (
    <Logo
        hasBaseline={false}
        hasHoverRight={true}
        blockWidth={spaceOptions.md}
    >
        {logo}
    </Logo>
);

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
            <Topbar className="hideOnDesktop">
                <a href="#">
                    {logoSidebar}
                </a>

                <ArrowRightIcon
                    htmlTag={iconHtmlTagOptions.button}
                    iconSize={iconSizeOptions.xl}
                    colorPallet={colorPalletOptions.wab}
                    colorWab={greyOptions.grey40}
                />
            </Topbar>

            <a href="#" className="hideOnTablet">
                {logoSidebar}
            </a>
            
            <Box />
        </Sidebar>
    ));
