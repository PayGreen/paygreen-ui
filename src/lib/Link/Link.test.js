import React from 'react';
import TestRenderer from 'react-test-renderer';
import { ThemeDefault } from '../../theme';
import Link from './Link';

it('renders without crashing', () => {
    const link = TestRenderer.create(
        <a href="#">
            <Link theme={ThemeDefault}>
                Link text
            </Link>
        </a>
    );
    expect(link.toJSON()).toMatchSnapshot();
});