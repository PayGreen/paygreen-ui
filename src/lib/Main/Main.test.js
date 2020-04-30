import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Main from './Main';

it('renders without crashing', () => {
    const topbar = TestRenderer.create(
        <Main theme={ThemeDefault}>
            <div className="main-nav">
            </div>
        </Main>,
    );
    expect(topbar.toJSON()).toMatchSnapshot();
});
