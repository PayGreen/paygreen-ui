import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Main from './Main';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from '../Topbar/Topbar';
import { Box } from './style';

it('renders without crashing', () => {
    const main = TestRenderer.create(
        <Main theme={ThemeDefault}>
            <Topbar theme={ThemeDefault}>
                <MenuHamburger theme={ThemeDefault} />
            </Topbar>
            <Box />
        </Main>,
    );
    expect(main.toJSON()).toMatchSnapshot();
});
