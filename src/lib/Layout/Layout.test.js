import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Layout from './Layout';

it('renders without crashing', () => {
    const layout = TestRenderer.create(
        <Layout theme={ThemeDefault}>
            <div>some content here</div>
        </Layout>,
    );
    expect(layout.toJSON()).toMatchSnapshot();
});