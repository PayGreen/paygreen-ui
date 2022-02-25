import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Layout from './Layout';
import { ArrowRightIcon } from '../Icon/Icon';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from '../Topbar/Topbar';
import Main from '../Main/Main';
import Sidebar from '../Sidebar/Sidebar';
import Box from '../Box/Box';

it('renders without crashing', () => {
    const layout = TestRenderer.create(
        <Layout theme={ThemeDefault}>
            <Sidebar theme={ThemeDefault}>
                <ArrowRightIcon theme={ThemeDefault} />
            </Sidebar>

            <Main theme={ThemeDefault}>
                <Topbar theme={ThemeDefault}>
                    <MenuHamburger theme={ThemeDefault} />
                </Topbar>

                <Box theme={ThemeDefault}/>
            </Main>
        </Layout>,
    );
    expect(layout.toJSON()).toMatchSnapshot();
});
