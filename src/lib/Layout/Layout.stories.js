import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import Layout from './Layout';
import {
    folder,
    colorPalletOptions,
    greyOptions,
    spaceOptions,
    iconSizeOptions,
    iconHtmlTagOptions,
} from '../../shared/constants';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import { Box } from '../Main/style';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import { ArrowRightIcon } from '../Icon/Icon';

const logoSidebar = (
    <Logo
        hasBaseline={false}
        hasHoverRight={true}
        blockWidth={spaceOptions.sm}
        text="tree"
        textSize="lg"
    >
        {logo}
    </Logo>
);

const logoTopbar = (
    <Logo
        hasBaseline={false}
        hasHoverRight={true}
        blockWidth={spaceOptions.sm}
    >
        {logo}
    </Logo>
);

const sidebarIsOpenLabel = 'Open sidebar';

storiesOf(folder.nav + 'Layout', module)
    .addDecorator(withKnobs)
    .add('Layout', () => (
        <Layout>
            <Sidebar>
                <Topbar className="hideOnDesktop">
                    <a href="#">{logoSidebar}</a>

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

            <Main isOpen={boolean(sidebarIsOpenLabel, true)}>
                <Topbar>
                    <MenuHamburger />
                    
                    <a href="#" className="hideOnDesktop">
                        {logoTopbar}
                    </a>
                </Topbar>

                <Box />
            </Main>
        </Layout>
    ));
