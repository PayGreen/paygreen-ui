import React from 'react';
import { folder } from '../../shared/constants';
import labels from '../../shared/labels';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from './Topbar';

export default {
    title: folder.layout + 'Topbar',
    argTypes: {
        isOpen: {
            name: labels.isOpen,
            control: 'boolean',
            defaultValue: true,
        },
    },
};

export const TopBarStory = ({ isOpen }) => {
    return (
        <Topbar>
            <MenuHamburger isOpen={isOpen} />
        </Topbar>
    );
};
