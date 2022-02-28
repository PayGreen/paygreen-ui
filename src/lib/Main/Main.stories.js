import React, { useState } from 'react';
import { folder } from '../../shared/constants';
import Main from './Main';
import Topbar from '../Topbar/Topbar';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Box from '../Box/Box';

export default {
    title: folder.layout + 'Main',
};

export const MainStory = () => {
    const [isOpen, setOpen] = useState(true);

    return (
        <Main isOpen={isOpen}>
            <Topbar>
                <MenuHamburger
                    isOpen={isOpen}
                    onClick={() => setOpen(!isOpen)}
                />
            </Topbar>

            <Box />
        </Main>
    );
};
