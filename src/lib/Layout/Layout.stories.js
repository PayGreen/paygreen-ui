import React, { useState } from 'react';
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
            align={alignDefault}
            hasThemeColor={true}
            hasBaseline={false}
            blockWidth={spaceOptions.sm}
            align={alignDefault}
        >
            {logo}
        </Logo>
    </a>
);

export default {
    title: folder.layout + 'Layout',
};

export const LayoutStory = ({ type, blockSize, ...args }) => {
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
};
