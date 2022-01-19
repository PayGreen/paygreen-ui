import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Breadcrumb from './Breadcrumb';

const sampleLinks = [
    {
        url: '#',
        label: 'Home',
    },
    {
        url: '#',
        label: 'Blog',
    },
    {
        url: '#',
        label: 'Category',
    },
    {
        url: '#',
        label: 'Article title',
    },
];

it('renders without crashing', () => {
    const breadcrumb = TestRenderer.create(
        <Breadcrumb
            elements={sampleLinks}
            theme={ThemeDefault}
        />
    );
    expect(breadcrumb.toJSON()).toMatchSnapshot();
});