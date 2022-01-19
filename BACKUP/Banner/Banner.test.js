import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Banner from './Banner';

it('renders without crashing', () => {
    const banner = TestRenderer.create(
        <Banner theme={ThemeDefault}>
            <div>
                Something
            </div>
        </Banner>
    );
    expect(banner.toJSON()).toMatchSnapshot();
});