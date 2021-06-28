import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import {
    folder,
    colorPalletOptions,
    spaceOptions,
    lateralPositionOptions,
    alignDefault,
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
            blockWidth={spaceOptions.sm}
            align={alignDefault}
        >
            {logo}
        </Logo>
    </a>
);

storiesOf(folder.nav + 'Layout', module).add('Layout', () => {
    const [isOpen, setOpen] = useState(true);

    return (
        <Layout>
            <Sidebar>
                <Topbar className="hideOnDesktop">
                    {logoComponent}

                    <MenuHamburger
                        isOpen={true}
                        colorPallet={colorPalletOptions.wab}
                        arrowDirection={lateralPositionOptions.right}
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

            <Main isOpen={isOpen}>
                <Topbar>
                    <MenuHamburger
                        isOpen={isOpen}
                        onClick={() => setOpen(!isOpen)}
                        colorPallet={colorPalletOptions.wab}
                    />
                </Topbar>

                <Box />
            </Main>
        </Layout>
    );
});
