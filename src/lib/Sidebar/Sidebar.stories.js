import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import {
    colorPalletOptions,
    greyOptions,
    folder,
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
import { MainSidebar } from './style';

const logoSidebar = (
    <a href="#">
        <Logo
            hasBaseline={false}
            hasHoverRight={true}
            blockWidth={spaceOptions.md}
        >
            {logo}
        </Logo>
    </a>
);

storiesOf(folder.nav + 'Sidebar', module)
    .addDecorator(withKnobs)
    .add('Sidebar', () => (
        <Sidebar>
            <div className="hideOnDesktop">
                <MainSidebar>
                    <Topbar>
                        {logoSidebar}

                        <ArrowRightIcon
                            htmlTag={iconHtmlTagOptions.button}
                            iconSize={iconSizeOptions.xl}
                            colorPallet={colorPalletOptions.wab}
                            colorWab={greyOptions.grey40}
                        />
                    </Topbar>
                    
                    <Box />
                </MainSidebar>
            </div>

            <div className="hideOnTablet">{logoSidebar}</div>
        </Sidebar>
    ));
