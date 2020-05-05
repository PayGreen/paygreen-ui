import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Main from './Main';
import MenuHamburger from '../MenuHamburger/MenuHamburger';
import Topbar from '../Topbar/Topbar';
import { Box } from './style';

it('renders without crashing', () => {
    const main = TestRenderer.create(
        <Layout theme={ThemeDefault}>
        </Layout>,
    );
    expect(main.toJSON()).toMatchSnapshot();
});
