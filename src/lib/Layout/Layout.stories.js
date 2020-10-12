import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import {
    folder,
    colorPalletOptions,
    spaceOptions,
    arrowDirectionOptions,
    hoverDirectionOptions,
} from '../../shared/constants';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import Main from '../Main/Main';
import Box from '../Box/Box';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Logo from '../Logo/Logo';
import { logo } from '../Logo/sample/logo';
import Layout from './Layout';

const logoComponent = (
    <a href="#">
        <Logo
            hasBaseline={false}
            hoverDirection={hoverDirectionOptions.right}
            blockWidth={spaceOptions.sm}
        >
            {logo}
        </Logo>
    </a>
);

const sidebarIsOpenLabel = 'Open sidebar';

storiesOf(folder.nav + 'Layout', module)
    .addDecorator(withKnobs)
    .add('Layout', () => (
        <Layout>
            <Sidebar>
                <Topbar className="hideOnDesktop">
                    {logoComponent}

                    <MenuHamburger
                        isOpen={true}
                        colorPallet={colorPalletOptions.wab}
                        arrowDirection={arrowDirectionOptions.right}
                    />
                </Topbar>

                <Box
                    className="hideOnTablet"
                    marginLeft={spaceOptions.sm}
                    marginTop={spaceOptions.sm}
                >
                    {logoComponent}
                </Box>

                <Box />
            </Sidebar>

            <Main isOpen={boolean(sidebarIsOpenLabel, true)}>
                <Topbar>
                    <MenuHamburger
                        isOpen={boolean(sidebarIsOpenLabel, true)}
                        colorPallet={colorPalletOptions.wab}
                    />
                </Topbar>

                <Box />
            </Main>
        </Layout>
    ));
